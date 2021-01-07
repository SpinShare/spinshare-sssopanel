<template>
    <div class="controlCommentators4">
        <Fab v-on:click.native="transition()" title="Transition" />
        
        <span class="mdi mdi-microphone"></span>
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    import Fab from '@/components/Controls/Fab.vue';
    
    export default {
        name: 'ControlCommentators4',
        components: {
            Fab,
        },
        methods: {
            transition: () => {
                ipcRenderer.send('change-state', "Commentators4");
            }
        }
    }
</script>

<style scoped lang="less">
    .controlCommentators4 {
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
