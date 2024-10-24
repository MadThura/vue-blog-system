<script setup>
import { ref } from 'vue';
import PostsList from '../components/PostsList.vue';

let posts = ref([]);
let error = ref("");

let load = async () => {
  try {
    let response = await fetch("http://localhost:3000/posts");
    if (response.status === 404) {
      throw new Error("Not found URL");
    }
    let datas = await response.json();
    posts.value = datas;
  } catch (err) {
    error.value = err.message;
  }
}

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
