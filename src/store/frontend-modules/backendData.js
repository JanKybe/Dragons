export default {

    state: {
        b_playerData: {},
        b_repData: {}
    },

    getters: {
        b_playerData: state => state.b_playerData,
        b_repData: state => state.b_repData
    },

    mutations: {
        b_setPlayerData (state, payload ){
            state.b_playerData = payload;
        },

        b_setRepData (state, payload) {
            state.b_repData = payload;
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

            console.log(data);    
            commit('b_setPlayerData', data);    
        },

        async b_startTurn({ commit }){

        }
    }
}