<template>
    <div class="screenBrackets">
        <!-- {{ toornamentEventId }}<br />
        {{ toornamentStageId }} -->
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    export default {
        name: 'ScreenBrackets',
        data: function() {
            return {
                toornamentEventId: 0,
                toornamentStageId: 0,
            }
        },
        mounted: function() {
            ipcRenderer.on('update-bracketsData', (event, newData) => {
                this.$data.toornamentEventId = newData.toornamentEventId;
                this.$data.toornamentStageId = newData.toornamentStageId;
            });
        },
        methods: {
        }
    }
</script>

<style scoped lang="less">
    .screenBrackets {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        display: grid;
        justify-content: center;
        align-items: center;
    }
</style>
