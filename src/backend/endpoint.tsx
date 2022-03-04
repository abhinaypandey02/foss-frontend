import axios from 'axios';
export async function getLeaderboard(){
    const res=await axios.get("http://34.131.102.133:8080/leaderboard");
    console.log(res)
    if(res.data) return {...res.data};
    return {}
}
