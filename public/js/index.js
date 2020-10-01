const auth = firebase.auth();
const db = firebase.database();

//auth
//login
function login(email, pass){
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e=> console.log(e.message));
}
//singup
function signup(email,pass){
    if(pass.length > 5){
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise
            .catch(e=> console.log(e.message));
    } else {
        console.log("password needs to be at least 6 characters long");
    }
}
//signout
function logout(){
    firebase.auth().signOut().then(console.log('logged out'));
}

auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        //reroute to dashboard
    } else{
        console.log('not logged in');
    }
});

db.ref("test/").set({"test": "success"});