
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
        for(const user in result){
            if(sort[result[user]['priority']]){
                sort[result[user]['priority']].push([user, result[user]['profile']]);
            }
            else{
                (sort[result[user]['priority']] = []).push([user, result[user]['profile']]);
            }
        }
    });
    return sort;
}


async function callSearch() {
    var array = ['html', 'css', 'js', 'php']
    var searchReturn = await search(array);
    console.log("here");
    console.log(searchReturn);
}

let candidates = callSearch();
console.log(ignore(candidates));

export {
    search
}