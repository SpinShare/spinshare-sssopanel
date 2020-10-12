<template>
    <div class="controlTesting">
        <Fab v-on:click.native="transition()" title="Transition" />
        
        <span class="mdi mdi-bug"></span>
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    import Fab from '@/components/Controls/Fab.vue';
    
    export default {
        name: 'ControlTesting',
        components: {
            Fab,
        },
        methods: {
            transition: () => {
                ipcRenderer.send('change-state', "Testing");
            }
        }
    }
</script>

<style scoped lang="less">
    .controlTesting {
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
