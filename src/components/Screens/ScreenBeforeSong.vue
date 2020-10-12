<template>
    <div class="screenBetweenSongs">
        BetweenSongs
    </div>
</template>

<script>
    export default {
        name: 'ScreenBeforeSong'
    }
</script>

<style scoped lang="less">
    .screenBetweenSongs {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        background: darkblue;
        display: grid;
    }
</style>
