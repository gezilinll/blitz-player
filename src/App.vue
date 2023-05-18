<script setup lang="ts">
import PlayerView from './views/PlayerView.vue';
import ControlBar from './views/ControlBar.vue';
</script>

<template>
    <div style="width: 100vw; height: 90vh">
        <PlayerView></PlayerView>
    </div>
    <div style="width: 100vw; height: 10vh">
        <ControlBar></ControlBar>
    </div>
</template>

<style>
body {
    margin: 0 !important;
    height: 100%;
    overflow: hidden;
    background-color: black;
}
</style>
