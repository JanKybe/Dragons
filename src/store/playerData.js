export default {

    state: {
        playerData: {},
        repData: {},
        playerHistory: {
            gold_won: 0,
            gold_spent: 0,
            quest_won: 0,
            quest_lost: 0
        },

        playerAction: {
            message: 'Welcome, choose your action! We recommend you to do the quest in your level range.'
        }
    },

    getters: {
        playerData: state => state.playerData,
        repData: state => state.repData,
        playerHistory: state => state.playerHistory,
        playerAction: state => state.playerAction
    },


    mutations: {

        setPlayerData (state, payload ){
            state.playerData = payload;
        },

        updatePlayerData (state, payload){
            state.playerData.lives = payload.lives;
            state.playerData.gold = payload.gold;
            state.playerData.turn = payload.turn;

            if ( payload.score != undefined){
                state.playerData.score = payload.score;
            }

            if ( payload.level != undefined){
                state.playerData.level = payload.level;
            }

        },

        setRepData (state, payload){
            state.repData = payload;
        },

        setPlayerHistory (state, payload){
            state.playerHistory = payload;
        },

        setPlayerAction (state, payload){
            state.playerAction.message = payload;
        }
    },

    actions: {

        async getPlayerData({ commit }) {

            const data = await window.fetch("https://www.dragonsofmugloar.com/api/v2/game/start", {
                method: "POST",
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(response => {
                    return response.json()
                });

            commit('setPlayerData', data);

        },

        async getRepData({ commit, state }) {

            const data = await window.fetch("https://www.dragonsofmugloar.com/api/v2/" + state.playerData.gameId + "/investigate/reputation", {
                method: "POST",
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(response => {
                    return response.json()
                });

            commit('setRepData', data);

        }
    }


}