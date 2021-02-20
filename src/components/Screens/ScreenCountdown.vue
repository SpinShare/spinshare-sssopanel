<template>
    <div class="screenCountdown">
        <div class="logo">
            <img src="../../assets/img/SPEEN_League_LOGO.png" alt="SSSO Logo" />
        </div>

        <div class="timer">
            <div v-if="!isSoon">{{ remainingMinutes.padStart(2, '0') }}:{{ remainingSeconds.padStart(2, '0') }}</div>
            <div v-if="isSoon">Soon</div>
        </div>

        <div class="music">
            <span class="mdi mdi-music"></span>
            <span><strong>{{ snipAuthor }}</strong>{{ snipTitle }}</span>
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
                timerTickTimeout: null,
                snipTitle: "",
                snipAuthor: ""
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
            ipcRenderer.send('get-snipData');
            ipcRenderer.on('update-snipData', (event, snipData) => {
                this.$data.snipTitle = snipData.title;
                this.$data.snipAuthor = snipData.author;
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
        grid-template-rows: 1fr auto;
        justify-content: center;
        align-items: center;

        & .logo {
            text-align: center;
            z-index: 20;

            & img {
                height: 40vh;
            }
        }

        & .timer {
            z-index: 20;
            text-align: center;
            width: 100vw;
            height: 15vh;

            & div {
                transform: translate(0px, -6.5vh);
                font-size: 6.5vw;
            }
        }

        & .music {
            z-index: 25;
            position: absolute;
            top: 4vh;
            left: 4vw;
            width: 92vw;
            font-size: 1.5vw;
            color: #fff;
            padding: 0.5vh 0vw;
            display: flex;
            justify-content: center;
            align-items: center;

            & .mdi {
                font-size: 2vw;
                margin-right: 0.75vw;
            }
            & span:not(.mdi) {
                transform: translate(0, -0.25vh);
            }
            & strong {
                margin-right: 1vw;
            }
        }
    }
</style>
