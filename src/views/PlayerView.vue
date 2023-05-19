<template>
    <div class="player-container">
        <div class="video-area" :style="{ height: videoAreaHeight + 'px' }"></div>
        <div class="controls-area" :style="{ height: controlsAreaHeight + 'px' }">
            <button class="control-button">
                <i class="fas fa-step-backward fa-3x"></i>
            </button>
            <button class="control-button">
                <i class="fas fa-play fa-3x"></i>
            </button>
            <button class="control-button">
                <i class="fas fa-step-forward fa-3x"></i>
            </button>
            <input type="range" class="volume-slider" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import '@fortawesome/fontawesome-free/css/all.css';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const videoAreaHeight = ref(0);
const controlsAreaHeight = ref(0);

const calculateHeights = () => {
    const windowHeight = window.innerHeight;
    videoAreaHeight.value = Math.floor(windowHeight * 0.85);
    controlsAreaHeight.value = Math.floor(windowHeight * 0.15);
};

onMounted(() => {
    calculateHeights();
    window.addEventListener('resize', calculateHeights);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', calculateHeights);
});
</script>

<style>
.player-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.video-area {
    flex: 1;
    background-color: #f2f2f2;
}

.controls-area {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 16px;
    background-color: #333;
}

.control-button {
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 10px;
}

.volume-slider {
    width: 100px;
}
</style>
