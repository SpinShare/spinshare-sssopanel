<template>
    <div class="screenBeforeMatch">
        <div class="commentators-box">
            <webview :class="isFullscreen ? 'isFullscreen' : ''" src="https://streamkit.discord.com/overlay/voice/747574206904008844/747601413172887552?icon=true&online=true&logo=white&text_color=%23ffffff&text_size=14&text_outline_color=%23000000&text_outline_size=0&text_shadow_color=%23000000&text_shadow_size=0&bg_color=%231e2124&bg_opacity=0.95&bg_shadow_color=%23000000&bg_shadow_size=0&invite_code=&limit_speaking=false&small_avatars=false&hide_names=false&fade_chat=0"></webview>
        </div>
        <div class="users">
            <div class="user-data">
                <div class="avatar" :style="'background-image: url(' + player1Data.avatar + ');'"></div>
                <div class="username">{{ player1Data.username }}</div>
            </div>
            <div class="versus">VS.</div>
            <div class="user-data">
                <div class="avatar" :style="'background-image: url(' + player2Data.avatar + ');'"></div>
                <div class="username">{{ player2Data.username }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';
    import SSAPI from "../../modules/module.api.js";

    export default {
        name: 'ScreenBeforeMatch',
        data: function() {
            return {
                player1Id: 0,
                player2Id: 0,
                fullSet: 3,
                player1Data: {},
                player2Data: {},
                isFullscreen: false,
            }
        },
        mounted: function() {
            let ssapi = new SSAPI();

            ipcRenderer.on('update-playerData', (event, newData) => {
                if(this.$data.player1Id != newData.player1Id) {
                    ssapi.getUserDetail(newData.player1Id).then((data) => {
                        this.$data.player1Data = data.data;
                    });
                }
                if(this.$data.player2Id != newData.player2Id) {
                    ssapi.getUserDetail(newData.player2Id).then((data) => {
                        this.$data.player2Data = data.data;
                    });
                }

                this.$data.player1Id = newData.player1Id;
                this.$data.player2Id = newData.player2Id;
                this.$data.fullSet = newData.fullSet;
            });
            remote.getCurrentWindow().on('enter-full-screen', () => {
                this.$data.isFullscreen = true;
            });
            remote.getCurrentWindow().on('leave-full-screen', () => {
                this.$data.isFullscreen = false;
            });
        },
    }
</script>

<style scoped lang="less">
    .screenBeforeMatch {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        position: relative;

        & .users {
            display: grid;
            grid-template-columns: 1fr 2vw 1fr;
            justify-items: center;
            align-items: center;
            margin-left: 40vw;
            height: 100vh;

            & .user-data {
                display: grid;
                grid-gap: 3vh;
                justify-items: center;

                & .avatar {
                    width: 10vw;
                    height: 10vw;
                    border-radius: 100%;
                    background-size: cover;
                }
                & .username {
                    font-size: 2.5vw;
                }
            }
            & .versus {
                font-size: 2vw;
                background: #fff;
                padding: 0.75vw 1.5vw;
                border-radius: 0.75vw;
                color: #000;
            }
        }

        & .commentators-box {
            position: absolute;
            top: 12vw;
            left: 5vw;
            border: 0px;
            width: 30vw;
            height: 55vh;
            padding: 0.5vw;
            background: rgba(0,0,0,0.5);
            border-radius: 1vw;

            &:before {
                content: "COMMENTATORS";
                display: block;
                position: absolute;
                background: #000;
                font-size: 1.75vw;
                padding: 1vh 3vw;
                border-radius: 100vw;
                font-weight: bold;
                left: 4.5vw;
                top: -2.5vh;
            }
            & webview {
                margin: 1vw;
                margin-top: 2vw;
                width: 27vw;
                overflow: hidden;
                height: 45vh;
                transform: scale(1);

                &.isFullscreen {
                    transform-origin: top left;
                    transform: scale(1.5);
                    width: 18vw;
                    height: 32vh;
                }
            }
        }
    }
</style>
