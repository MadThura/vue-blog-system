<script setup>
import { ref } from 'vue';
import PostsList from '../components/PostsList.vue';

let posts = ref([
  
])

</script>

<template>
  <div class="home">
    <PostsList :posts="posts"></PostsList>
  </div>
</template>
