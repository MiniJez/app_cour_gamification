import axios from "axios";

const URLS = "http://172.20.10.2:8000"
const USERS = "users"
const BEST_PLAYERS = "best_players"
const ALL_PLAYERS = "all_players"

export class AxiosCall {

    static async getBestPlayers() {
        let result = await axios.get(`${URLS}/${USERS}/${BEST_PLAYERS}`,
        {
            headers: {
                'Content-Type': "application/json"
            }
        })
        console.log(result)
        return result
    }

    static async getAllPlayers() {
        let result = await axios.get(`${URLS}/${USERS}/${ALL_PLAYERS}`,
        {
            headers: {
                'Content-Type': "application/json"
            }
        })
        
        return result
    }
}