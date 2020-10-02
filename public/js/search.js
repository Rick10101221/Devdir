let users = {};
function search(searchedSkill){ //searchedSkill is array
    let result = {};
    let arr = [];
    db.ref('profile/').once('value').then((snapshot)=>{
        users = snapshot.val();
        for(let i = 0; i < searchedSkill.length; i++){
            for (const user in users) {
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
        for(const user in result){
            if(arr[result[user]['priority']]){
                arr[result[user]['priority']].push(result[user]['profile']);
            }
            else{
                (arr[result[user]['priority']] = []).push(result[user]['profile']);
            }
        }
        console.log(arr);
        return arr;
    })
    
}