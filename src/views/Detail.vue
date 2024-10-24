<script setup>
import getPost from "@/composables/getPost"
let props = defineProps(["id"]);

let { post, error, load } = getPost(props.id);

load();

</script>

<template>
    <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
    <div v-else>
        loading....
    </div>
</template>
