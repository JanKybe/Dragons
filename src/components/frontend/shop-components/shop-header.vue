<template>
    <div class="shop-header">

        <div class="recommended-content">
            <RecommendedItem/>
        </div>

        <div class="rudolf-content">
            <b-card>Rudolf Content</b-card>
        </div>

    </div>
</template>

<script>

    import RudolfContent from '@/components/frontend/shop-components/rudolf-content'
    import RecommendedItem from '@/components/frontend/shop-components/recommended-item'

    export default {

        name: 'shop-header',

        components: {
            RudolfContent,
            RecommendedItem
        }
    }
</script>

<style scoped>

    .shop-header {
        display: grid;
        grid-template-columns: 30% 70%;
        grid-column-gap: 0.7em;
        margin-bottom: 0.7em;
    }

</style>