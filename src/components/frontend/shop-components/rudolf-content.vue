<template>
    <b-list-group flush class="shop-header-content">
        <b-list-group-item class="card-content-header">Rudolf's Shop</b-list-group-item>
        <b-list-group-item>
            <div class="row">
                <div class="col">
                    <b-badge variant="warning">Rudolf Gold: 250</b-badge>
                </div>

                <div class="col">
                    <b-badge variant="info">Rudolf Score: 1337</b-badge>
                </div>
            </div>
        </b-list-group-item>
        <b-list-group-item class="card-message">
                Welcome to Rudolf's Shop, here you can buy items to make you stronger and kill enemies faster.
        </b-list-group-item>
    </b-list-group>
</template>

<style scoped>

    .shop-header-content {
        border-left: 1px solid rgba(0, 0, 0, 0.125);
        border-right: 1px solid rgba(0, 0, 0, 0.125);
        text-align: center !important;
    }

    .card-content-header {
        background-color: rgba(0, 0, 0, 0.03);
    }

    .card-message {
        background-color: #f8f9fa;
        color: black;
        height: 4em;
        font-size: 0.95em;
    }
    
</style>
