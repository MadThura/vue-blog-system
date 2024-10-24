<script setup>
import { computed } from 'vue';
const props = defineProps(['post'])

let cutPostBody = computed(() => {
    return props.post.body.substring(0, 100) + "...show more"
})
</script>

<template>
    <h2>{{ post.title }}</h2>
    <p>{{ cutPostBody }}</p>
</template>