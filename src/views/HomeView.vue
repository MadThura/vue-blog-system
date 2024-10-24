<script setup>
import PostsList from '../components/PostsList.vue';
import getPosts from '@/composables/getPosts';

let { posts, error, load } = getPosts();

load();

</script>

<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length > 0">
      <PostsList :posts="posts"></PostsList>
    </div>
    <div v-else>
      loading....
    </div>
  </div>
</template>
