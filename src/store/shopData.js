export default {

    state: {
        shopData: {}
    },

    getters: {
        shopData: state => state.shopData
    },

    mutations: {
        setShopData (state, payload){
            state.shopData = payload;
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
                
            data.splice(0, 1); 
            
            data.forEach((item) => {
                switch(item.id){
                    case "gas":

                        item.message = "Wanna make campfire or burn enemies?"
                        break;

                    case "rf":

                        item.message = "Wanna make even bigger campfire or burn enemies even more?"
                        break;

                    case "wax":

                        item.message = "This plating protects your organs little bit more than just a shirt"
                        break;

                    case "tricks":

                        item.message = "This book contains some tricks, made by Mugloar witch!"
                        break;


                    case "wingpot":

                        item.message = "Wanna fly but dont wanna use LSD? Potion of Stronger Wings is for you."
                        break;

                    case "ch":

                        item.message = "Even shopkeeper Rudolf is not sure what this item does."
                        break;

                    case "iron":
                        item.message = "This plating protects your organs and will even protect you against your wife."
                        break;

                    case "mtrix":
                        item.message = "This book has every trick Mugloar has to offer."
                        break;

                    case "cs":

                        item.message = "Sharpens your claws a little bit so you can slash through your enemies like butter."
                        break;

                    case "wingpotmax":

                        item.message = "With this potion you can fly like a hawk."
                        break;

                }
            })

            commit('setShopData', data);
        },


        async getItem({ commit, rootGetters }, i_data) {

            const data = await window.fetch("https://www.dragonsofmugloar.com/api/v2/" + rootGetters.playerData.gameId + "/shop/buy/" + i_data.id, {
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

            if ( data.shoppingSuccess ){

                let { gold_won, gold_spent, quest_won, quest_lost } = rootGetters.playerHistory

                gold_spent + i_data.cost

                const playerH = Object.assign({}, { gold_won, gold_spent, quest_won, quest_lost})

                commit('setPlayerHistory', playerH)
                commit('setPlayerAction', 'Successfully bought item!') 

            } else {
                commit('setPlayerAction', 'Not enought money to buy this item!') 

            }
        }
    }
}