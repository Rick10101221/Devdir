// login
function login(email, pass, auth){
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e=> console.log(e.message));
}
// signup
async function signup(email,pass, auth){
    if(pass.length > 5){
        const promise = await auth.createUserWithEmailAndPassword(email,pass);
        promise
            .catch(e=> console.log(e.message));
        //login(email, pass, auth)
    } else {
        alert("password needs to be at least 6 characters long");
    }
}

// signout
function logout(auth, firebase){
    firebase.auth().signOut().then(console.log('logged out'));
}

export {
    login,
    signup,
    logout
}