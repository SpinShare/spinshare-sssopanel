<template>
    <div class="controlSettings">
        <InputGroup title="OBS Remote Port">
            <input type="text" v-model="obsRemotePort" />
        </InputGroup>

        <InputGroup title="OBS Remote Password">
            <input type="text" v-model="obsRemotePassword" />
        </InputGroup>

        <InputGroup title="OBS Remote Actions" two-inputs="true">
            <button v-on:click="reconnectRemote()">Save & Reconnect</button>
            <button v-on:click="updateData()">Save</button>
        </InputGroup>
    </div>
</template>

<script>
    import InputGroup from '@/components/Controls/InputGroup.vue';
    import {ipcRenderer} from "electron";

    import UserSettings from "../../modules/module.usersettings.js";

    export default {
        name: 'ControlSettings',
        components: {
            InputGroup
        },
        data: function() {
            return {
                obsRemotePort: "",
                obsRemotePassword: "",
                userSettings: null
            }
        },
        mounted: function() {
            this.$data.userSettings = new UserSettings();
            this.$data.obsRemotePort = this.$data.userSettings.get('obsRemotePort');
            this.$data.obsRemotePassword = this.$data.userSettings.get('obsRemotePassword');
        },
        methods: {
            updateData: function() {
                console.log("[Controls] Update Settings");

                this.$data.userSettings.set('obsRemotePort', this.$data.obsRemotePort);
                this.$data.userSettings.set('obsRemotePassword', this.$data.obsRemotePassword);
                this.$data.userSettings.write();
            },
            reconnectRemote: function() {
                this.updateData();
                ipcRenderer.send('connect-obsremote', {
                    obsRemotePort: this.$data.obsRemotePort,
                    obsRemotePassword: this.$data.obsRemotePassword
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .controlSettings {
        padding: 5px 20px;
    }
</style>
