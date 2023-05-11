<template>
    <canvas id="surface" style="width: 100%; height: 100%; background-color: chartreuse"></canvas>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Player from '@/components/Player.vue'; // @ is an alias to /src

@Options({
    components: {
        Player,
    },
})
export default class PlayerView extends Vue {}
</script>
