<template>
    <div class="screenTesting">
    </div>
</template>

<script>
    export default {
        name: 'ScreenTesting',
        mounted: function() {
        }
    }
</script>

<style scoped lang="less">
    .screenTesting {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        background: url('../../assets/img/Wallpaper.png');
        background-size: cover;
        display: grid;
    }
    iframe {
        
    }
</style>
