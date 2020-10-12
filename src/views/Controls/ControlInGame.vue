<template>
    <div class="controlInGame">
        <Fab v-on:click.native="transition()" title="Transition" />
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    import Fab from '@/components/Controls/Fab.vue';

    export default {
        name: 'ControlInGame',
        components: {
            Fab,
        },
        methods: {
            transition: () => {
                ipcRenderer.send('change-state', "InGame");
            }
        }
    }
</script>

<style scoped lang="less">
    .controlInGame {
        padding: 20px;
    }
</style>
