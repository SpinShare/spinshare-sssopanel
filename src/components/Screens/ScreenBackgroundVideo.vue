<template>
    <div class="screenBackgroundVideo">
        <video src="../../assets/video/LogoBackdrop.mp4" autoplay muted loop></video>
    </div>
</template>

<script>
    export default {
        name: 'ScreenBackgroundVideo'
    }
</script>

<style scoped lang="less">
    .screenBackgroundVideo {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 1;

        & video {
            width: 100%;
            height: 100%;
        }
    }
</style>
