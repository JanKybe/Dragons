<template>

    <div class="shop-item">
        <b-card no-body class="shop-card"

                v-bind:header="name">

            <b-list-group flush>

                <b-list-group-item>
                    <div class="row">
                        <div class="col">
                            <b-badge variant="warning">Cost: {{ cost }} </b-badge>
                        </div>

                        <div class="col">
                            <b-badge variant="info">{{ id }} </b-badge>
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


        }
    }
</script>

<style scoped>
    .shop-card {
        background-color: #f8f9fa;
        color: black;
    }

    .shop-message {
        height: 4em;
        margin: 1em;
        font-size: 0.95em;
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