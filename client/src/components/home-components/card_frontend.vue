<template>
    <div class="front-end">
        <b-card title="Front-end"
            img-src="assets/f_card.png"
            img-alt="Image"
            img-top
            tag="article"
            style="width: 18rem;"
            class="float-left">

            <p class="card-text">
                The Kingdom of Mugloar needs more dragon trainers! Be the greatest dragon trainer by yourself!
            </p>

            <a href="#/frontend">
                <button class="frontend-btn">Start Game</button>
            </a>
        </b-card>
    </div>
</template>

<style scoped>
    .frontend-btn:focus {
        outline: 0;
    }

    .card {
        margin-bottom: 1em;
    }

    a, a:hover {
        text-decoration: none;
        color: #2b2b2b;
    }

    .frontend-btn {
        width: 100%;
        background-color: #f2f2f2;
        border: 1px solid rgba(0, 0, 0, 0.125);
        cursor: pointer;
        border-radius: 0.25rem;
        padding: 1em;
    }

    .frontend-btn:hover {
        background-color: white;
    }

</style>