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

        async solveQuest({commit, dispatch, rootGetters}, adId) {

            const data = await window.fetch("https://www.dragonsofmugloar.com/api/v2/" + rootGetters.playerData.gameId + "/solve/" + adId, {
                method: "POST",
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(response => {
                    return response.json();
                })

            commit('updatePlayerData', data);
        }

    }
}