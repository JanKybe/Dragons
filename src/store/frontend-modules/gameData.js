export default {

    state: {
        currentPage: true // true: Quests, false: Shop
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

        async startGame({ dispatch }){

            await dispatch('getPlayerData');

            dispatch('getRepData');
            dispatch('getQuests');
            dispatch('getShopData');
        },

        async startQuest({ dispatch }, adId){

            await dispatch('solveQuest', adId);

            dispatch('getQuests');
            dispatch('getRepData');
            dispatch('getShopData');
        },

        async buyItem({ dispatch }, itemId){

            await dispatch('getItem', itemId);
            
            dispatch('getShopData');
            dispatch('getRecommendedItem');

        },

        async startTurn({ dispatch }){

            dispatch('getQuestData');
            dispatch('getShopData');
        }
    }
}