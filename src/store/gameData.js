export default {

    state: {

        gameData: {
            currentGame: true, // true = frontend, false = backend
            currentPage: true, // true = quest, false = shop
        }
    },

    getters: {
        currentPage: state => state.gameData.currentPage,
        currentGame: state => state.gameData.currentGame
    },

    mutations: {
        setCurrentPage (state, payload) {
            state.gameData.currentPage = payload;
        },

        setCurrentGame(state, payload){
            state.gameData.currentGame = payload;
        }
    },

    actions: {

        async startGame({ dispatch, commit }){

            await dispatch('getPlayerData');

            dispatch('getRepData');
            dispatch('getQuests');
            dispatch('getShopData');

            commit('setCurrentPage', 1);
        },

        async startQuest({ dispatch, commit, rootGetters }, data){
            await dispatch('solveQuest', data);

            if ( rootGetters.playerData.lives > 0 ){

                dispatch('getQuests');
                dispatch('getRepData');
                dispatch('getShopData');
            }
        },

        async buyItem({ dispatch }, itemId, cost){

            await dispatch('getItem', itemId, cost);
            
            dispatch('getShopData');

        },

        async startTurn({ dispatch }){

            dispatch('getQuestData');
            dispatch('getShopData');
        }
    }
}