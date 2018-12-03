<template>
    <div class="header-content">
        <b-img
            src="https://i.imgur.com/IpnZ0Rh.png" fluid alt="Logo" />
        <a href="/"> Dragons of Mugloar </a>

        <div class="notification">
            Welcome to Dragons of Mugloar Game!
        </div>
    </div>

</template>

<style scoped>
    .header-content {
        display: flex;
        background-color: #2b2b2b;
        color: white;
        align-items: center;
        font-size: 1.5em;
        text-transform: uppercase;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: none;
        color: purple;
    }

    .notification {
        margin-left: 2em;
        border: 1px solid black;
        width: 50%;
        text-align: left;
        font-size: 0.7em !important;
        padding: 0.2em;
        border-radius: 0.25rem;
        background-color: #444444;
        text-transform: none;
    }
</style>