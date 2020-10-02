/* chatroom template
{
    "chatrooms:": {
        "[key]": {
            "names": {
                "user1": 'bob',
                "user2": 'dylan'
            }
            "messages": {
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

PROGRESS: Cannot get findChatroom() call inside addMessage() to return
ANYTHING. I have no idea why. I've looked into asynchronous and synchronous
functions, callback functions passed in as arguments, and set timeback calls,
but I haven't figured it out. Spent a solid 3 hours on this. It's 1:44am
and I'm probably going to wake up really late....

TODO: 1. Add Message to Chatroom, Check if Chatroom exists between 2 users
      2. Function for Refreshing Chatroom (trigger)

*/


// =========================================
// Temp Global Variables for testing purposes.
var user1 = "Ritik"
var user2 = "Rickesh"
// =========================================


/**
 * Sends a default, introductory message upon the creation
 * of a chatroom.
 * @param {String} message Message to send to contact when user1 swipe's 
 *                         right on user2's profile in search query.
 */
function sendIntroMessage(/*message*/) {
    var message = "Hey baby ;)";
    return message;
}


/**
 * Creates single chatroom for user1 and user2.
 * @param {profile} user1 User1's Profile.
 * @param {profile} user2 User2's Profile.
 */
function createChatroom(/*user1, user2*/) {
    // TODO check if chatroom already exists
    var firstMessage = sendIntroMessage();
    db.ref(`chatrooms/`).push().set({
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
}


/**
 * Adds a message to a chatroom.
 * @param {String} key Unique identifier for chatroom.
 * @param {Profile} user User (Author) who sent the message.
 * @param {String} message Message to add to chatroom.
 */
function addMessage(key, user, message, callback) {
    // This is not working........
    var chatroom = callback(key);
    console.log("dwad", chatroom);
    console.log(typeof(chatroom), chatroom.length, chatroom[0]);
    var incMsgNum = chatroom[1] + 1;
    // increment msgsum 
    var messageNumber = `msg${incMsgNum}`;

    console.log(incMsgNum);

    var messageObj = {
        [messageNumber]: {
            "message": message,
            "author": user
        }
    }

    db.ref(`chatrooms/${key}/chat`).update(messageObj);
}


/**
 * Finds a chatroom given a JSON object string.
 * @param {String} key Unique identifier for chatroom.
 */
function findChatroom(key) {
    let chatrooms = {}
    let resChatroom = [];
    db.ref('chatrooms/').once('value').then((snapshot) => {
        chatrooms = snapshot.val();
        for (const chatroom in chatrooms) {
            if (chatroom == key) {
                resChatroom.push(chatrooms[chatroom]);
                break;
            }
        }
    });
    return resChatroom;
}


// driver code
//createChatroom()
addMessage("-MIbpZQdR4PENoWSmsWP", "Ritik", "???", findChatroom);