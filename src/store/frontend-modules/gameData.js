export default {

    state: {

        gameData: {
            currentGame: '',
            currentPage: 1 // 1 = Quest Page, 2 = Shop Page, 3 = Gameover page
        }
    },

    getters: {
        currentPage: state => state.gameData.currentPage
    },

    mutations: {
        setCurrentPage (state, payload) {
            state.gameData.currentPage = payload;
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

        async startQuest({ dispatch, commit, rootGetters }, adId){

            await dispatch('solveQuest', adId);

            if ( rootGetters.playerData.lives < 1 ){
                commit('setCurrentPage', 3);
            } else {
                dispatch('getQuests');
                dispatch('getRepData');
                dispatch('getShopData');
            }
        },

        async buyItem({ dispatch }, itemId){

            await dispatch('getItem', itemId);
            
            dispatch('getShopData');

        },

        async startTurn({ dispatch }){

            dispatch('getQuestData');
            dispatch('getShopData');
        }
    }
}