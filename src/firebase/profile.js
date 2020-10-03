let app = require("init.js").app;
let init = require("init.js").init;

//profile template
// profile = {
//     'name': 'Jack Chou',
//     'bio': 'A very random person',
//     'link': ["https://www.google.com/"],
//     'skill': ["html", "css", "js", "node.js", "php", "java", "c", "c++", "c#", "python", "reactJS", "github", "docker", "AWS", "heroku", "firebase", "jquery", "sql", "bootstrap"],
//     'chat': ["placeHolder"],
//     'active: true,
// }
let profile = {};

//users exist in database
function getProfile(){
    db.ref(`profile/${user.uid}`).once('value').then((snapshot) => {
        if(snapshot.val()){
            profile = snapshot.val();
        }
        else{
            console.log("doesn't exist");
        }
    })
}

function setProfile(profile){
    db.ref(`profile/${user.uid}`).set(profile).then(() => {console.log("profile set")})
}