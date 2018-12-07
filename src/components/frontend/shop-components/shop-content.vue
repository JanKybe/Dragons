<template>
    <div class="shop-content animated fadeIn" v-if="!currentPage">
        <div class="shop-content-items">
            <div v-for="item in shopData">
                <shop-item
                    :id="item.id"
                    :name="item.name"
                    :cost="item.cost"
                    :message="item.message">
                </shop-item>
            </div>
        </div>
    </div>
</template>

<script>

    import ShopItem from '@/components/frontend/shop-components/shop-item'
    import { mapGetters } from 'vuex'

    export default {
        name: 'shop-content',

        components: {
            ShopItem
        },

        computed: {
            ...mapGetters({
                shopData: 'shopData',
                currentPage: 'currentPage'
            })
        }
    }
</script>

<style scoped>

    .shop-content-header {
        margin-bottom: 0.6em;
    }

    @media (max-width: 767px) {
        .shop-content-items {
            display: grid;
            grid-template-columns: 1;
            grid-template-rows: auto;
            grid-row-gap: 0.6em;
            grid-column-gap: 0.6em;;
            margin-bottom: 8em;
        }
    }

    @media screen and (min-width: 768px ) and (max-width: 1100px) {
        .shop-content-items {
            display: grid;
            grid-template-columns: repeat(2, auto);
            grid-template-rows: repeat(5, auto);
            grid-row-gap: 0.6em;
            grid-column-gap: 0.6em;
        }
    }

    @media (min-width: 1101px) {
        .shop-content-items {
            display: grid;
            grid-template-columns: repeat(5, auto);
            grid-template-rows: repeat(2, auto);
            grid-row-gap: 0.6em;
            grid-column-gap: 0.6em;
        }
    }

</style>