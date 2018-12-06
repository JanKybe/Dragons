<template>
    <div class="shop-content animated fadeIn" v-if="!currentPage">
        <div class="shop-content-items">
            <div v-for="item in shopData">
                <ShopItem
                    v-bind:id="item.id"
                    v-bind:name="item.name"
                    v-bind:cost="item.cost"
                    v-bind:message="item.message">
                </ShopItem>
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
    
    .shop-content-items {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-template-rows: repeat(2, auto);
        grid-column-gap: 0.6em;
        grid-row-gap: 0.6em;
    }

</style>