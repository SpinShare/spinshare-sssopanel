<template>
    <div class="controlCountdown">
        <Fab v-on:click.native="transition()" title="Transition" />

        <InputGroup title="End of Countdown">
            <input type="time" v-model="countdownEnd" v-on:change="updateData()" />
        </InputGroup>

        <InputGroup title="Countdown Mode" twoInputs="true">
            <button :disabled="!countdownIsSoon" v-on:click="changeCountdownMode(false)">Set to Countdown</button>
            <button :disabled="countdownIsSoon" v-on:click="changeCountdownMode(true)">Set to Soon</button>
        </InputGroup>
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    import Fab from '@/components/Controls/Fab.vue';
    
    import InputGroup from '@/components/Controls/InputGroup.vue';
    
    export default {
        name: 'ControlCountdown',
        components: {
            Fab,
            InputGroup
        },
        data: function() {
            return {
                countdownEnd: "00:00",
                countdownIsSoon: true,
            }
        },
        mounted: function() {
            let currentDate = new Date();
            this.$data.countdownEnd = currentDate.getHours() + ":" + currentDate.getMinutes();
        },
        methods: {
            transition: function() {
                this.updateData();
                ipcRenderer.send('change-state', "Countdown");
            },
            changeCountdownMode: function(newMode) {
                this.$data.countdownIsSoon = newMode;
                this.updateData();
            },
            updateData: function() {
                console.log("[Controls] Update CountdownData");
                ipcRenderer.send('update-countdownData', {
                    time: new Date(new Date().toDateString() + ' ' + this.$data.countdownEnd),
                    isSoon: this.$data.countdownIsSoon
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .controlCountdown {
        padding: 5px 20px;
    }
</style>
