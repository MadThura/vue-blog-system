<script setup>
import { ref } from 'vue';

let props = defineProps(["posts"]);

let tags = ref([]);

props.posts.forEach((post) => {
    post.tags.forEach((tag) => {
        tags.value.push(tag);
    })
});

let uniqueTags = tags.value.filter((tag, index, array) => {
    return array.indexOf(tag) === index;
})

</script>

<template>
    <div class="tag-cloud">
        <h1>Tag Cloud</h1>
        <div v-for="tag in uniqueTags" :key="tag">
            <router-link :to="{ name: 'Tag', params: { tag } }">{{ tag }}</router-link>
        </div>
    </div>
</template>

<style>
.tag-cloud {
    padding: 10px;
}

.tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
}

.tag-cloud div {
    display: inline-block;
    padding: 10px;
}

.tag-cloud a {
    color: #ccc;
    text-decoration: none;
}

.tag-cloud a.router-link-active {
    color: hsla(160, 100%, 37%, 1);
    font-weight: bold;
}
</style>