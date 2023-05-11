<script lang="ts" setup>
import PlayerView from '@/views/PlayerView.vue'; // @ is an alias to /src
import { ref } from 'vue';

const playing = ref(false);

function clicked() {
    playing.value = !playing.value;
}
</script>

<template>
    <div style="width: 100vw; height: 70vh">
        <PlayerView v-bind:playing="playing"></PlayerView>
    </div>
    <button @click="clicked"></button>
</template>
