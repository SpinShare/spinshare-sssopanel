<template>
    <div class="screenBetweenRounds">
        BetweenRounds
    </div>
</template>

<script>
    export default {
        name: 'ScreenBeforeMatch'
    }
</script>

<style scoped lang="less">
    .screenBetweenRounds {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        background: purple;
        display: grid;
    }
</style>
