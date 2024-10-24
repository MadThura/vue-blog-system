<script setup>
import SinglePost from './SinglePost.vue';
const props = defineProps(['posts']);
</script>

<template>
    <h1>Post lists</h1>
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
    </div>
</template>