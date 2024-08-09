<script setup lang="ts">
import VLazyImage from "v-lazy-image";

defineProps({
    image: String,
    placeholder: String,
});
</script>

<template>
    <div class="image-container">
        <VLazyImage :src="image" :src-placeholder="placeholder" />
    </div>
</template>

<style scoped lang="scss">
.image-container {
    width: 50vw;
    margin: 30px auto;
}
.v-lazy-image {
    filter: blur(5px);
    transition: filter 1.6s;
    will-change: filter;
    width: 100%;
}
.v-lazy-image-loaded {
    filter: blur(0);
}
</style>
