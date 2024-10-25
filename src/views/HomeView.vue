<script setup>
import PostsList from '../components/PostsList.vue';
import getPosts from '@/composables/getPosts';
import Spinner from '@/components/Spinner.vue';

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
      <Spinner></Spinner>
    </div>
  </div>
</template>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>