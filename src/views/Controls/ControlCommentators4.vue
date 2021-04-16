<template>
    <div class="controlCommentators4">
        <Fab v-on:click.native="transition()" title="Transition" />

        <InputGroup title="OBS.ninja View ID">
            <input type="text" v-model="obsNinjaViewID" />
        </InputGroup>

        <InputGroup title="OBS.ninja View Password">
            <input type="text" v-model="obsNinjaViewPassword" />
        </InputGroup>

        <button v-on:click="updateData()">Update</button>
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    import Fab from '@/components/Controls/Fab.vue';
    import InputGroup from '@/components/Controls/InputGroup.vue';
    
    export default {
        name: 'ControlCommentators4',
        components: {
            Fab,
            InputGroup
        },
        data: function() {
            return {
                obsNinjaViewID: "",
                obsNinjaViewPassword: ""
            }
        },
        mounted: function() {
            ipcRenderer.send('get-commentatorsData');
            ipcRenderer.on('update-commentatorsData', (event, newData) => {
                this.$data.obsNinjaViewID = newData.obsNinjaViewID;
                this.$data.obsNinjaViewPassword = newData.obsNinjaViewPassword;
            });
        },
        methods: {
            transition: () => {
                ipcRenderer.send('change-state', "Commentators4");
            },
            updateData: function() {
                console.log("[Controls] Update CommentatorsData");
                ipcRenderer.send('update-commentatorsData', {
                    obsNinjaViewID: this.$data.obsNinjaViewID,
                    obsNinjaViewPassword: this.$data.obsNinjaViewPassword,
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .controlCommentators4 {
        padding: 5px 20px;
    }
</style>
