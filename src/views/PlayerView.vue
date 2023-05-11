<template>
    <canvas id="surface" style="width: 100%; height: 100%; background-color: chartreuse"></canvas>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { ref } from 'vue';

const props = defineProps<{
    playing: boolean;
}>();

watch(
    () => props.playing,
    (value) => console.log('play status changed', value)
);
</script>
