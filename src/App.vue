<template>
    <div>
        <Player />
    </div>
</template>

<script lang="ts">
import Player from './views/PlayerView.vue';

export default {
    components: {
        Player,
    },
};
</script>
<style>
body {
    margin: 0 !important;
    height: 100%;
    overflow: hidden;
    background-color: black;
}
</style>
