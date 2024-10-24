<script setup>
import getPost from "@/composables/getPost"
import Spinner from "@/components/Spinner.vue";
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
        <Spinner></Spinner>
    </div>
</template>
