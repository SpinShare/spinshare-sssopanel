<template>
    <div class="screenCountdown">
        <div class="text">
            <div class="user-data" v-if="winnerData">
                <div class="avatar" :style="'background-image: url(' + winnerData.avatar + ');'"></div>
                <div class="username">{{ winnerData.username }}</div>
                <div class="title">
                    SpinShare SpeenOpen<br />
                    Winter 2020 Winner
                </div>
            </div>
        </div>

        <div class="music">
            <span class="mdi mdi-music"></span>
            <span><strong>{{ snipAuthor }}</strong>{{ snipTitle }}</span>
        </div>
    </div>
</template>

<script>
import { remote, ipcRenderer } from 'electron';
import SSAPI from "@/modules/module.api";

export default {
    name: 'ScreenTournamentEnd',
    data: function() {
        return {
            winnerUserID: 0,
            winnerData: null,
            snipTitle: "",
            snipAuthor: ""
        }
    },
    mounted: function() {
        let ssapi = new SSAPI();

        console.log("[TournamentEnd] Ready.");

        ipcRenderer.on('update-endoftournamentdata', (event, newData) => {
            if (this.$data.winnerUserID != newData.winnerUserID) {
                ssapi.getUserDetail(newData.winnerUserID).then((data) => {
                    console.log(data);
                    this.$data.winnerData = data.data;
                });
            }
        });
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
        & .user-data {
            display: grid;
            justify-items: center;

            & .avatar {
                width: 12vw;
                height: 12vw;
                border-radius: 100%;
                background-size: cover;
                background-position: center;
            }
            & .username {
                margin-top: 3vh;
                margin-bottom: 1.5vh;
                font-size: 4vw;
            }
            & .title {
                background: #fff;
                color: #000;
                font-weight: bold;
                font-size: 1.15vw;
                padding: 1vh 4vw;
                border-radius: 50vw;
                text-align: center;
            }
        }
    }
}
</style>
