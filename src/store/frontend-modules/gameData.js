export default {

    state: {
        // 1 = Quest Page, 2 = Shop Page, 3 = Gameover page
        currentPage: 1
    },

    getters: {
        currentPage: state => state.currentPage
    },

    mutations: {
        setCurrentPage (state, payload) {
            state.currentPage = payload;
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