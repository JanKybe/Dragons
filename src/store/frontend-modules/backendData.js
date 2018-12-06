export default {

    state: {
        b_playerData: {},
        b_repData: {},
        b_turnData: {},
        b_gameData: {
            'win': 0,
            'lost': 0,
            'moneySpent': 0,
            'moneyWon': 0
        }
    },

    getters: {
        b_playerData: state => state.b_playerData,
        b_repData: state => state.b_repData,
        b_turnData: state => state.b_turnData,
        b_gameData: state => state.b_gameData
    },

    mutations: {
        b_setPlayerData (state, payload ){
            state.b_playerData = payload;
        },

        b_setRepData (state, payload) {
            state.b_repData = payload;
        },

        b_setTurnData (state, payload) {
            state.b_turnData = payload;
        },

        b_setGameData (state, payload) {
            state.b_gameData = payload;
        }
    },

    actions: {

        async b_startGame({ commit }){

            const data = await window.fetch("http://46.101.191.134:8070/start_game", {
                method: "POST",
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(response => {
                    return response.json()
                });

            commit('b_setPlayerData', data);    
        },

        async b_startTurn({ commit, state }){

            const data = await window.fetch("http://46.101.191.134:8070/start_turn/" + state.b_playerData.gameId, {
                method: "GET",
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(response => {
                    return response.json()
                })

            commit('b_setPlayerData', data.playerData);
            commit('b_setTurnData', data.turnData);
            commit('b_setRepData', data.repData);

            let gameData = {};
            
            if ( data.turnData.success ){

                if ( data.turnData.type === 'quest' ){
                    gameData = {
                        'win': state.b_gameData.win + 1,
                        'lost': state.b_gameData.lost,
                        'moneySpent': state.b_gameData.moneySpent,
                        'moneyWon': state.b_gameData.moneyWon + data.turnData.questData.reward
                    }
                } else {
                    gameData = {
                        'win': state.b_gameData.win + 1,
                        'lost': state.b_gameData.lost,
                        'moneySpent': state.b_gameData.moneySpent + data.turnData.cost,
                        'moneyWon': state.b_gameData.moneyWon
                    }
                }
            } else {
                if ( data.turnData.type === 'quest'){
                    gameData = {
                        'win': state.b_gameData.win,
                        'lost': state.b_gameData.lost + 1,
                        'moneySpent': state.b_gameData.moneySpent,
                        'moneyWon': state.b_gameData.moneyWon
                    }
                }
            }

            commit('b_setGameData', gameData);
        }
    }
}