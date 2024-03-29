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


            data.forEach((quest) => {
                if ( quest.hasOwnProperty('encrypted') && quest.encrypted === 1){
                    quest.message = atob(quest.message);
                    quest.adId = atob(quest.adId);
                    quest.probability = atob(quest.probability);
                }
            }) 

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
                const { quest_won, quest_lost, gold_spent, gold_won } = rootGetters.playerHistory

                if ( data.success ){
                    playerH = {
                        'gold_won': gold_won + q_data.reward,
                        gold_spent,
                        'quest_won': quest_won + 1,
                        quest_lost
                    }
                } else {
                    playerH = {
                        gold_won,
                        gold_spent,
                        quest_won,
                        'quest_lost': quest_lost + 1
                    } 
                }

                commit('setPlayerHistory', playerH)  
            }   
        }
    }
}