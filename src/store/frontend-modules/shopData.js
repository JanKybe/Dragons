export default {

    state: {
        shopData: {},
        healingPotion: {}
    },

    getters: {
        shopData: state => state.shopData,
        healingPotion: state => state.healingPotion
    },

    mutations: {
        setShopData (state, payload){
            state.shopData = payload;
        },

        setHealingPotion (state, payload){
            state.healingPotion = payload;
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

            commit('setHealingPotion', data[0]);
            data.splice(0, 1);    

            for ( let item in data ) {

                switch(data[item].id){

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

        }
    }
}