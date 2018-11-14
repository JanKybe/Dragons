<template>
    <div class="recommended-item">
        <b-card no-body class="recommended-card"
                v-bind:header="recommendedItem.name">

            <b-list-group flush>
                <b-list-group-item>
                    <div class="row">
                        <div class="col">
                            <b-badge variant="warning">Cost: {{ recommendedItem.cost }} </b-badge>
                        </div>

                        <div class="col">
                            <b-badge variant="success">Recommended</b-badge>
                        </div>
                    </div>
                </b-list-group-item>
            </b-list-group>

            <div class="recommended-card-message">
                {{ recommendedItem.message }}
            </div>

            <div class="recommended-card-buy" v-on:click="buyItem(recommendedItem.id)">
                Buy Item
            </div>
        </b-card>
    </div>
</template>

<script>

    import { mapActions, mapGetters } from 'vuex'

    export default {

        name: 'recommended-item',

        methods: {

            ...mapActions([
                'buyItem'
            ]),


            buyItem: function(id){
                this.$store.dispatch('buyItem', id);
            }
        },

        computed: {
            ...mapGetters({
                recommendedItem: 'recommendedItem'
            })
        }
    }

</script>

<style scoped>
    
    .recommended-card {
        background-color: #f8f9fa;
        color: black;
    }

    .recommended-card-message {
        height: 4em;
        margin: 1em;
        font-size: 0.95em;
    }

    .recommended-card-buy {
        height: 2.5em;
        line-height: 2.5em;
        cursor: pointer;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        background-color: white;
    }

    .recommended-card-buy:hover {
        background-color: #2c2c2c;
        color: whitesmoke;
    }

</style>