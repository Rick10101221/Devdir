/* chatroom template
{
    "chatrooms:": {
        "[key]": {
            "names": {
                "user1": 'bob',
                "user2": 'dylan'
            }
            "chat": {
                "msg1": {
                    "message": 'sup',
                    "author": 'dylan'
                }
                "msg2": {
                    "message": 'hey',
                    "author": 'dylan'
                }
            }
            "msgNum": int
        }
    }
}

NOTE: msgsum indicates the message number in the chat. MAY NOT BE NEEDED.
*/


/**
 * Creates single chatroom for user1 and user2.
 * @param {profile} user1 User1's Id
 * @param {profile} user2 User2's Id
 */
async function createChatroom(user1Id, user2Id, db) {
    let user1Obj = await findProfileById(user1Id, db);
    let user2Obj = await findProfileById(user2Id, db);
    let user1 = user1Obj[0].name;
    let user2 = user2Obj[0].name;
    console.log('hi');
    // If chatroom already exists, do nothing and return
    // Maybe take user to existing chatroom?
    if ((await findChatroomByUsers(user1, user2, db)).length !== 0) {
        return;
    }

    // TODO check if chatroom already exists
    var firstMessage = sendIntroMessage();

    await db.ref(`chatrooms`).push().set({
        "msgNum": 1,
        "chat": {
            "msg1": {
                "message": firstMessage,
                "author": user1
            }
        },
        "names": {
            "user1": user1,
            "user2": user2
        }
    });

    var key = await findChatroomByUsers(user1, user2, db)
    addChatroomToUser(key, user1Id, db);
    addChatroomToUser(key, user2Id, db);
}


/**
 * Finds a profile given a userid.
 * @param {String} key Unique identifier for user.
 * @return {Array} Array containing a profile object.
 */
async function findProfileById(key, db) {
    let profiles = {};
    let resProfile = [];

    await db.ref('profile/').once('value').then((snapshot) => {
        profiles = snapshot.val();
        if (profiles) {
            resProfile = profiles[key];
        } else {
            resProfile = [];
        }
    });
    return [resProfile];
}


/**
 * Finds a chatroom given user profile objects.
 * @param {profile} user1 User1's Profile Object.
 * @param {profile} user2 User2's Profile Object.
 * @return {Array} Array containing chatroom object.
 */
async function findChatroomByUsers(user1, user2, db) {
    let chatrooms = {};
    let resChatroom = [];

    await db.ref(`chatrooms/`).once('value').then((snapshot) => {
        chatrooms = snapshot.val();
        for (const chatroom in chatrooms) {
            if (chatrooms[chatroom].names.user1 === user1 &&
                chatrooms[chatroom].names.user2 === user2) {
                    resChatroom = chatroom;
            }
        }
    });
    return resChatroom.length === 0 ? resChatroom:[resChatroom];
}


/**
 * Finds a chatroom given a JSON object string.
 * @param {String} key Unique identifier for chatroom.
 * @return {Array} Array containing a chatroom object.
 */
async function findChatroomByKey(key, db) {
    let chatrooms = {};
    let resChatroom = null;

    await db.ref('chatrooms/').once('value').then((snapshot) => {
        chatrooms = snapshot.val();
        if (chatrooms) {
            resChatroom = chatrooms[key];
        } else {
            resChatroom = [];
        }
    });
    return [resChatroom];
}

/**
 * Adds a message to a chatroom.
 * @param {String} key Unique identifier for chatroom.
 * @param {Profile} user User (Author) who sent the message.
 * @param {String} message Message to add to chatroom.
 */
async function addMessage(key, user, message, db) {
    var chatroom = await findChatroomByKey(key, db);

    // increment msgsum 
    console.log(chatroom);
    var incMsgNum = chatroom[0].msgNum + 1;
    
    var messageNumber = `msg${incMsgNum}`;


    var messageObj = {
        [messageNumber]: {
            "message": message,
            "author": user
        }
    };

    var msgNumObj = {
        "msgNum": incMsgNum
    };

    db.ref(`chatrooms/${key}/chat`).update(messageObj);
    db.ref(`chatrooms/${key}`).update(msgNumObj);
}


/**
 * Sends a default, introductory message upon the creation
 * of a chatroom.
 * @param {String} message Message to send to contact when user1 swipe's 
 *                         right on user2's profile in search query.
 * @return {String} Intro message.
 */
function sendIntroMessage() {
    var message = "Hi there!";
    return message;
}


/**
 * Returns all the messages for the current chatroom with a key.
 * @param {String} key Chatroom key in firebase.
 * @return {Object} Returns chatroom object.
 */
async function returnMessagesInChatroomByKey(key, db) {
    var chatroom = await findChatroomByKey(key, db);
    return chatroom[0].chat;
}


/**
 * Returns all the messages for the current chatroom with 2 user profiles.
 * @param {profile} user1 User1's Profile.
 * @param {profile} user2 User2's Profile.
 * @return {Object} Returns chatroom object.
 */
async function returnMessagesInChatroomByUsers(user1, user2, db) {
    var chatroom = await findChatroomByUsers(user1, user2, db);
    return chatroom[0].chat;
}


/**
 * Adds the chatroom's key to a given user.
 * @param {String} key Chatroom key in firebase.
 * @param {profile} currUser Current user whose chat key will be appended to.
 * @return {None} None.
 */
async function addChatroomToUser(key, currUser, db) {
    let chatObj = {};
    await db.ref(`profile/${currUser}/chat`)
    .once('value').then((snapshot) => {
        if (snapshot.val()) {
            chatObj = snapshot.val();
        } else {
            console.log("Chat object not found");
        }
    });

    chatObj.push(key[0]);
    if (chatObj[0] === ''){
        chatObj.shift();
    }
    await db.ref(`profile/${currUser}/chat`).update(chatObj);
}


/**
 * Retrieves all active conversations for the current logged-in user.
 * @param {profile} currUser Current user.
 * @return {Array} [key, {userProfile}]
 */
async function retrieveAllActiveConversations(currUser, db) {
    let userArr = [];
    let dbChatsArray = [];
    await db.ref(`profile/${currUser.uid}/chat`)
    .once('value').then((snapshot) => {
        if (snapshot.val()) {
            dbChatsArray = snapshot.val();
        } else {
            console.log("Database for user not found");
        }
    });

    for (const database in dbChatsArray) {
        let dbChat = await findChatroomByKey(database, db);
        if(!dbChat[0]){
            continue;
        }
        let authorsArr = [dbChat[0].names.user1, dbChat[0].names.user2];
        let temp = [];
        temp.push(database);
        temp.push(authorsArr);
        userArr.push(temp);
    }

    return userArr;
}


export {
    createChatroom,
    findChatroomByUsers,
    findChatroomByKey,
    addMessage,
    sendIntroMessage,
    returnMessagesInChatroomByKey,
    returnMessagesInChatroomByUsers,
    addChatroomToUser,
    retrieveAllActiveConversations
}
