export default {

    state: {
        questData: {}
    },

    getters: {
        questData: state => state.questData
    },

    mutations: {
        setQuestData(state, payload) {
            state.questData = payload;
        }
    },

    actions: {

        async getQuests({commit, dispatch, rootGetters}) {

            const data = await window.fetch("https://www.dragonsofmugloar.com/api/v2/" + rootGetters.playerData.gameId + "/messages", {
                method: "GET",
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(response => {
                    return response.json();
                })

            for (let quest in data) {

                if (data[quest].hasOwnProperty('encrypted')) {
                    if (data[quest].encrypted === 1) {

                        data[quest].message = atob(data[quest].message);
                        data[quest].adId = atob(data[quest].adId);
                        data[quest].probability = atob(data[quest].probability);
                    }
                }
            }

            commit('setQuestData', data);
        },

        async solveQuest({commit, dispatch, rootGetters}, q_data) {

            const data = await window.fetch("https://www.dragonsofmugloar.com/api/v2/" + rootGetters.playerData.gameId + "/solve/" + q_data.adId, {
                method: "POST",
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(response => {
                    return response.json();
                })

            if ( data.lives == undefined){
                console.log("Oh-noo")
            } else {
                commit('updatePlayerData', data);
                commit('setPlayerAction', data.message);

                let playerH = {}

                if ( data.success ){
                    playerH = {
                        gold_won: rootGetters.playerHistory.gold_won + q_data.reward,
                        gold_spent: rootGetters.playerHistory.gold_spent,
                        quest_won: rootGetters.playerHistory.quest_won + 1,
                        quest_lost: rootGetters.playerHistory.quest_lost,
                    }
                } else {
                    playerH = {
                        gold_won: rootGetters.playerHistory.gold_won,
                        gold_spent: rootGetters.playerHistory.gold_spent,
                        quest_won: rootGetters.playerHistory.quest_won,
                        quest_lost: rootGetters.playerHistory.quest_lost + 1,
                    }
                }

                commit('setPlayerHistory', playerH)  
            }   
        }
    }
}