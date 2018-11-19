export default {

    state: {
        shopData: {},
        recommendedItem: {},

        rudolfData: {
            gold: 250,
            score: 0,
            text: 'Welcome to my shop!'
        }
    },

    getters: {
        shopData: state => state.shopData,
        recommendedItem: state => state.recommendedItem,
        rudolfData: state => state.rudolfData
    },

    mutations: {
        setShopData (state, payload){
            state.shopData = payload;
        },

        setRecItem (state, payload ){
            state.recommendedItem = payload;
        }

    },

    actions: {

        async getShopData({ commit, dispatch, rootGetters }){

           const data = await window.fetch("https://www.dragonsofmugloar.com/api/v2/" + rootGetters.playerData.gameId + "/shop", {
                method: "GET",
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(response => {
                    return response.json();
                })

            for ( let item in data ) {

                switch(data[item].id){

                    case 'hpot':
                        
                        data[item].message = "This item gives you one extra healt.";
                        break;

                    case "gas":

                        data[item].message = "Wanna make campfire or burn enemies?"
                        break;

                    case "rf":

                        data[item].message = "Wanna make even bigger campfire or burn enemies even more?"
                        break;

                    case "wax":

                        data[item].message = "This plating protects your organs little bit more than just a shirt"
                        break;

                    case "tricks":

                        data[item].message = "This book contains some tricks, made by Mugloar witch!"
                        break;


                    case "wingpot":

                        data[item].message = "Wanna fly but dont wanna use LSD? Potion of Stronger Wings is for you."
                        break;

                    case "ch":

                        data[item].message = "Even shopkeeper Rudolf is not sure what this item does."
                        break;

                    case "iron":
                        data[item].message = "This plating protects your organs and will even protect you against your wife."
                        break;

                    case "mtrix":
                        data[item].message = "This book has every trick Mugloar has to offer."
                        break;

                    case "cs":

                        data[item].message = "Sharpens your claws a little bit so you can slash through your enemies like butter."
                        break;

                    case "wingpotmax":

                        data[item].message = "With this potion you can fly like a hawk."
                        break;
                }

            }

            commit('setShopData', data);
            dispatch('getRecommendedItem');
        },


        async getItem({ commit, rootGetters }, itemId) {

            const data = await window.fetch("https://www.dragonsofmugloar.com/api/v2/" + rootGetters.playerData.gameId + "/shop/buy/" + itemId, {
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

        },

        getRecommendedItem({ commit, state, rootGetters }){

            let shopItems = state.shopData;

            if ( rootGetters.playerData.lives < 3 ){
                commit('setRecItem', shopItems[0]);

                shopItems.splice(0, 1);
                commit('setShopData', shopItems);

            } else if ( rootGetters.playerData.level < 5 ) {

                commit('setRecItem', shopItems[1])

                shopItems.splice(1, 1);
                commit('setShopData', shopItems);
            } else {

                commit('setRecItem', shopItems[6])

                shopItems.splice(6, 1);
                commit('setShopData', shopItems);

            }

        }
    }
}