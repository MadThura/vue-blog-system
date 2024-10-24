<script setup>
import { computed } from 'vue';
const props = defineProps(['post'])

let cutPostBody = computed(() => {
    return props.post.body.substring(0, 100) + "...show more"
})
</script>

<template>
    <router-link :to="{ name: 'Detail', params: { id: post.id } }">
        <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ cutPostBody }}</p>
</template>