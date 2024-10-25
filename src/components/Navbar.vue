<script setup></script>

<template>
    <header>
        <h1>Blog Vue</h1>
        <nav>
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'Create' }">Create</router-link>
        </nav> 
    </header>
</template>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
header h1 {
    color: #dfdfdf;
    font-size: 40px;
}
header a {
    margin-left: 20px;
}
header a.router-link-active {
    color: #444;
    font-weight: bold;
}
</style>