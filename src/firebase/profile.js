//profile template
/* profile = {
'bio': "A very random person",
'chat': ["placeholder"],
'link': ["https://github.com/", "https://www.linkedin.com/", "name@company.com"],
'name': "Some Dev",
'skill': ["Just Joined"],
'status': false,
}
*/
let profile = {};

//users exist in database
async function getProfile(db, user){
    await db.ref(`profile/${user.uid}`).once('value').then((snapshot) => {
        if(snapshot.val()){
            profile = snapshot.val();
        }
        else{
            console.log("doesn't exist");
        }
    });
    return profile;
}

function setProfile(profile, db, user){
    db.ref(`profile/${user.uid}`).set(profile).then(() => {console.log("profile set")})
}

export {
    getProfile,
    setProfile
}