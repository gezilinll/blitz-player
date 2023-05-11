<template>
    <div style="width: 100vw; height: 70vh">
        <PlayerView></PlayerView>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PlayerView from '@/views/PlayerView.vue'; // @ is an alias to /src

@Options({
    components: {
        PlayerView,
    },
})
export default class App extends Vue {}
</script>
