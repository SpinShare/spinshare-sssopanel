<template>
    <div class="controlStreamEnd">
        <Fab v-on:click.native="transition()" title="Transition" />
        
        <span class="mdi mdi-video-off"></span>
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    import Fab from '@/components/Controls/Fab.vue';
    
    export default {
        name: 'ControlStreamEnd',
        components: {
            Fab,
        },
        methods: {
            transition: () => {
                ipcRenderer.send('change-state', "StreamEnd");
            }
        }
    }
</script>

<style scoped lang="less">
    .controlStreamEnd {
        padding: 20px;
        display: grid;
        justify-content: center;
        align-items: center;

        .mdi {
            color: rgba(255,255,255,0.15);
            font-size: 128px;
        }
    }
</style>
