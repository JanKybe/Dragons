<template>

    <div class="shop-item">
        <b-card no-body v-bind:header="name">
            <b-list-group flush>
                <b-list-group-item>
                    <div class="row">
                        <div class="col">
                            <b-badge variant="light">Cost: {{ cost }} </b-badge>
                        </div>

                        <div class="col">
                            <b-badge variant="light">{{ levelBadge(cost) }} </b-badge>
                        </div>
                    </div>
                </b-list-group-item>
            </b-list-group>

            <div class="shop-message">
                {{ message }}
            </div>

            <div class="btn-buy" v-on:click="buyItem(id)">Buy Item</div>

        </b-card>
    </div>

</template>

<script>

    import { mapActions } from 'vuex'

    export default {
        name: 'shop-item',
        props: [
            'id',
            'name',
            'cost',
            'message'
        ],

        methods: {
            ...mapActions([
              'buyItem'
            ]),


            buyItem: function(id){
                this.$store.dispatch('buyItem', id);
            },

            levelBadge: function(cost){
                switch(cost){
                    case 100: {
                        return 'Level + 1'
                        break;
                    }

                    case 300: {
                        return 'Level + 2'
                        break;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .shop-message {
        height: 6em;
        padding: 1em;
        font-size: 0.95em;
        background-color: #f8f9fa;
        color: black;
    }

    .badge-light {
        border: 1px solid #2b2b2b;
        color: #2b2b2b;
    }

    .card-header {
        background-image: url("https://i.imgur.com/j1JuKa6.jpg");
        color: whitesmoke;
        text-transform: uppercase;
        background-position: 13% 37%;
        font-weight: 700;
    }

    .btn-buy {
        height: 2.5em;
        line-height: 2.5em;
        cursor: pointer;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        background-color: white;
    }

    .btn-buy:hover {
        background-color: #2c2c2c;
        color: whitesmoke;
    }

</style>