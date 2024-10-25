<script setup>
import PostsList from '../components/PostsList.vue';
import getPosts from '@/composables/getPosts';
import Spinner from '@/components/Spinner.vue';
import TagCloud from '@/components/TagCloud.vue';
let { posts, error, load } = getPosts();

load();

</script>

<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div class="layout" v-if="posts.length > 0">
      <div>
        <PostsList :posts="posts"></PostsList>
      </div>
      <div>
        <TagCloud></TagCloud>
      </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<style>
.home {
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>