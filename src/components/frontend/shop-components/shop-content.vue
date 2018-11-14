<template>
    <div class="shop-content">

        <div class="shop-content-header">
            <ShopHeader/>
        </div>

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
    import RecItem from '@/components/frontend/shop-components/recommended-item'
    import ShopHeader from '@/components/frontend/shop-components/shop-header'

    import { mapGetters } from 'vuex'

    export default {
        name: 'shop-content',

        components: {
            ShopItem,
            RecItem,
            ShopHeader
        },

        computed: {
            ...mapGetters({
                shopData: 'shopData'
            })
        }
    }
</script>

<style scoped>

    .shop-content-header {
        margin-bottom: 0.7em;
    }

    .shop-content {
        padding: 1em;
    }

    .shop-content-items {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-template-rows: repeat(2, auto);
        grid-column-gap: 0.7em;
        grid-row-gap: 0.7em;
    }

</style>