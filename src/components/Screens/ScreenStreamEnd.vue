<template>
    <div class="screenCountdown">
        <div class="text">
            Thank<br />You For<br/>Watching!
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
        name: 'ScreenStreamEnd',
        data: function() {
            return {
                snipTitle: "",
                snipAuthor: ""
            }
        },
        mounted: function() {
            console.log("[StreamEnd] Ready.");

            ipcRenderer.send('get-snipData');
            ipcRenderer.on('update-snipData', (event, snipData) => {
                this.$data.snipTitle = snipData.title;
                this.$data.snipAuthor = snipData.author;
            });
        },
        methods: {
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

        & .text {
            font-weight: bold;
            font-size: 7vw;
            line-height: 7vw;
            text-transform: uppercase;
            text-align: center;
            transform: skewY(-7deg) translateY(-2vh);
        }
    }
</style>
