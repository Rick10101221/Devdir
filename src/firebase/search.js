let app = require("init.js").app;
let init = require("init.js").init;

let users = {};

async function search(searchedSkill){ //searchedSkill is array
    let result = {};
    let sort = [];
    let fill = [];
    await db.ref('profile/').once('value').then((snapshot)=>{
        users = snapshot.val();
        for(let i = 0; i < searchedSkill.length; i++){
            for (const user in users) {
                if(users[user]['skill']){
                    if(users[user]['skill'].includes(searchedSkill[i])){
                        if(result[user]){
                            result[user]['priority']++;
                        }
                        else{
                            result[user] = {'profile': users[user],'priority': 1};
                        }
                    }
                }
            }
        }
        //console.log("result", result);
        for(const user in result){
            if(sort[result[user]['priority']]){
                sort[result[user]['priority']].push([user, result[user]['profile']]);
            }
            else{
                (sort[result[user]['priority']] = []).push([user, result[user]['profile']]);
            }
        }
        //console.log("sort", sort);
        /*let order = 0;
        for(let i = sort.length-1; i >= 0 ; i--){
            if(sort[i]){
                if(fill[order]){
                    fill[order].push(sort[i]);
                } else{
                    (fill[order] = []).push(sort[i]);
                }
                order++;
            }
        }*/
    });
    return sort;
}


/*
I added this code to check why JS functions do not return objects
correctly. Turns out, search() has the same error as I described in
chatroom.js. In this case, searchReturn is actually returning an 
undefined object because callSearch() is running asynchronously.
*/
async function callSearch() {
    var array = ['html', 'css', 'js', 'php']
    var searchReturn = await search(array);
    //console.log("calling search", searchReturn);
    //console.log(searchReturn[0].length);
    //for (var i = 0; i < searchReturn.length; i++) {
        console.log("here");
        console.log(searchReturn);
    //}
}

// let candidates = callSearch();
// console.log(ignore(candidates));