import axios from "axios";

const URLS = "https://gamification-sarlin.herokuapp.com"
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