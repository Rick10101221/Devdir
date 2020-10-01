let users = {};
function search(searchedSkill){ //searchedSkill is array
    let result = {};
    let arr = [];
    db.ref('profile/').once('value').then((snapshot)=>{
        users = snapshot.val();
        console.log(users);
        for(let i = 0; i < searchedSkill.length; i++){
            for (const user in users) {
                if(users[user]['skill'].includes(searchedSkill[i])){
                    console.log("in");
                    if(result[user]){
                        result[user]['priority']++;
                    }
                    else{
                        result[user] = {'priority': 1};
                    }
                }
            }
        }
    })
    for(const user in result){
        if(arr[result[user]] && arr[result[user]] > 0){
            arr[result[user]].push(result[user]);
        }
        else{
            (arr[result[user]] = []).push(result[user]);
        }
    }
    return result;
}