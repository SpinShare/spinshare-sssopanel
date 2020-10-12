<template>
    <div class="screenCountdown">
        <div class="timer">
            <div v-if="!isSoon">{{ remainingMinutes.padStart(2, '0') }}:{{ remainingSeconds.padStart(2, '0') }}</div>
            <div v-if="isSoon">Soon</div>
        </div>
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    export default {
        name: 'ScreenCountdown',
        data: function() {
            return {
                time: 0,
                isSoon: true,
                remainingMinutes: "00",
                remainingSeconds: "00",
                timerTickTimeout: null
            }
        },
        mounted: function() {
            console.log("[Countdown] Ready.");

            this.timerTick();

            ipcRenderer.on('update-countdownData', (event, newData) => {
                clearTimeout(this.$data.timerTickTimeout);

                this.$data.time = newData.time;
                this.$data.isSoon = newData.isSoon;
                
                if(!this.$data.isSoon) {
                    this.timerTick();
                }
            });
        },
        methods: {
            timerTick: function() {
                this.$data.timerTickTimeout = setTimeout(() => {
                    if(!this.$data.isSoon) {
                        this.timerTick();

                        let currentDate = new Date();
                        let futureDate = new Date(this.$data.time);

                        let distance = futureDate - currentDate;

                        if(distance < 0) {
                            this.$data.remainingMinutes = "00";
                            this.$data.remainingSeconds = "00";

                            return;
                        }

                        this.$data.remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
                        this.$data.remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
                    }
                }, 1000);
            }
        }
    }
</script>

<style scoped lang="less">
    .screenCountdown {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        display: grid;
        justify-content: center;
        align-items: center;

        & .timer {
            font-size: 10vw;
        }
    }
</style>
