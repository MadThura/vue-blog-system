<script setup>
import getPosts from '@/composables/getPosts';
import PostsList from '@/components/PostsList.vue';
import { computed } from 'vue';
let props = defineProps(["tag"]);

let { posts, error, load } = getPosts();

load();

let filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    return post.tags.includes(props.tag);
  })
});

</script>

<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length > 0">
      <PostsList :posts="filteredPosts"></PostsList>
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<style scoped>
.tag {
  padding: 10px;
}
</style>