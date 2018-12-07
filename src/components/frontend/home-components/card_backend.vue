<template>
    <div class="card-backend">
        <b-card title="Back-end"
            img-src="assets/b_card.png"
            img-alt="Image"
            img-top
            tag="article"
            style="width: 18rem;">

            <p class="card-text">
                The Kingdom of Mugloar needs more dragon trainers! Be the greatest dragon trainer with computer help!
            </p>

            <a href="/backend">
                <button class="backend-btn">Start Game</button>
            </a>

        </b-card>
    </div>
</template>

<style scoped>
    .backend-btn:focus {
        outline: 0;
    }

    .card {
        float: right;
        margin-bottom: 1em;
    }

    a, a:hover {
        text-decoration: none;
        color: #2b2b2b;
    }

    .backend-btn {
        width: 100%;
        background-color: #f2f2f2;
        border: 1px solid rgba(0, 0, 0, 0.125);
        cursor: pointer;
        border-radius: 0.25rem;
        padding: 1em;
    }

    .backend-btn:hover {
        background-color: white;
    }

</style>