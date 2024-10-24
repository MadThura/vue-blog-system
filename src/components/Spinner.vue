<script setup>

</script>
<template>
    <div class="spin"></div>
</template>

<style>
.spin {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 auto;
    border: 3px solid transparent;
    border-top-color: red;
    animation: spin 1s infinite;
}
@keyframes spin {
    to{transform: rotate(360deg);}
}
</style>