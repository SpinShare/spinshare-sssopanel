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
            <button v-on:click="updateData()">Just Save</button>
        </InputGroup>

        <InputGroup title="Snip JSON Location">
            <input type="file" @change="changeSnip" />
            <span>{{ snipJsonLocation ? snipJsonLocation : 'Not Set' }}</span>
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
                snipJsonLocation: "",
                userSettings: null
            }
        },
        mounted: function() {
            this.$data.userSettings = new UserSettings();
            this.$data.obsRemotePort = this.$data.userSettings.get('obsRemotePort');
            this.$data.obsRemotePassword = this.$data.userSettings.get('obsRemotePassword');
            this.$data.snipJsonLocation = this.$data.userSettings.get('snipJsonLocation');
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
            },
            changeSnip: function(event) {
                this.$data.snipJsonLocation = event.target.files[0].path;
                this.$data.userSettings.set('snipJsonLocation', this.$data.snipJsonLocation);
                this.$data.userSettings.write();

                ipcRenderer.send('reload-filewatcher', {
                    path: this.$data.snipJsonLocation
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .controlSettings {
        padding: 5px 20px;

        span {
            color: #fff;
        }
    }
</style>
