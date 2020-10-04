
async function search(searchedSkill, db){ //searchedSkill is array
    let result = {};
    let sort = [];
    let users = {};
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

export {
    search
}