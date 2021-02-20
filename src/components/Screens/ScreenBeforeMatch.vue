<template>
    <div class="screenBeforeMatch">
        <div class="users">
            <div class="user-data" v-if="player1Data">
                <div class="avatar" :style="'background-image: url(' + player1Data.avatar + ');'"></div>
                <div class="username">{{ player1Data.username }}</div>
                <div class="pronouns" v-if="player1Data.pronouns != null">{{ player1Data.pronouns }}</div>
            </div>
            <div class="versus">VS.</div>
            <div class="user-data" v-if="player2Data">
                <div class="avatar" :style="'background-image: url(' + player2Data.avatar + ');'"></div>
                <div class="username">{{ player2Data.username }}</div>
                <div class="pronouns" v-if="player2Data.pronouns != null">{{ player2Data.pronouns }}</div>
            </div>
        </div>

        <div class="chat-box">
            <webview v-if="!isFullscreen" src="https://streamkit.discord.com/overlay/chat/747574206904008844/747599065058902078?icon=true&online=true&logo=white&text_color=%23ffffff&text_size=16&text_outline_color=%23000000&text_outline_size=0&text_shadow_color=%23000000&text_shadow_size=0&bg_color=%23000000&bg_opacity=0&bg_shadow_color=%23000000&bg_shadow_size=0&invite_code=&limit_speaking=false&small_avatars=false&hide_names=false&fade_chat=0"></webview>
            <webview class="isFullscreen" v-if="isFullscreen" src="https://streamkit.discord.com/overlay/chat/747574206904008844/747599065058902078?icon=true&online=true&logo=white&text_color=%23ffffff&text_size=18&text_outline_color=%23000000&text_outline_size=0&text_shadow_color=%23000000&text_shadow_size=0&bg_color=%23000000&bg_opacity=0&bg_shadow_color=%23000000&bg_shadow_size=0&invite_code=&limit_speaking=false&small_avatars=false&hide_names=false&fade_chat=0"></webview>
        </div>

        <div class="music">
            <span class="mdi mdi-music"></span>
            <span><strong>{{ snipAuthor }}</strong>{{ snipTitle }}</span>
        </div>
        <div class="title">COMING UP</div>
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
                snipTitle: "",
                snipAuthor: ""
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
            ipcRenderer.send('get-snipData');
            ipcRenderer.on('update-snipData', (event, snipData) => {
                this.$data.snipTitle = snipData.title;
                this.$data.snipAuthor = snipData.author;
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
        z-index: 20;
        position: relative;

        & .title {
            z-index: 25;
            position: absolute;
            top: 4vh;
            left: 4vw;
            font-size: 1.5vw;
            font-weight: bold;
            letter-spacing: 0.25em;
            background: #fff;
            color: #000;
            padding: 1vh 3vw;
            border-radius: 40vw;
        }
        & .music {
            z-index: 25;
            position: absolute;
            top: 4vh;
            right: 4vw;
            font-size: 1.5vw;
            color: #fff;
            padding: 0.5vh 0vw;
            display: flex;
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

        & .users {
            display: grid;
            grid-template-columns: 1fr 6vw 1fr;
            justify-items: center;
            align-items: center;
            width: 70vw;
            margin: 0 auto;
            padding-top: 8vh;
            height: 70vh;

            & .user-data {
                display: grid;
                grid-gap: 3vh;
                justify-items: center;

                & .avatar {
                    width: 10vw;
                    height: 10vw;
                    border-radius: 100%;
                    background-size: cover;
                    background-position: center;
                }
                & .username {
                    font-size: 2.5vw;
                    line-height: 1em;
                }
                & .pronouns {
                    margin-top: -0.5vw;
                    font-size: 1vw;
                    font-weight: bold;
                    background: #fff;
                    color: #000;
                    padding: 0.5vw 1.5vw;
                    border-radius: 50vw;
                }
            }
            & .versus {
                font-size: 1vw;
                font-weight: bold;
                background: #fff;
                padding: 0.75vw 1.5vw;
                border-radius: 50vw;
                color: #000;
            }
        }

        & .chat-box {
            background: #000;
            border-top-left-radius: 1vw;
            border-top-right-radius: 1vw;
            z-index: 30;
            position: absolute;
            left: 30vw;
            width: 40vw;
            height: 30vh;
            overflow: hidden;

            & webview {
                transform-origin: top left;
                transform: scale(1.1);
                height: 100%;

                &.isFullscreen {
                    transform: scale(1.4);
                }
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

    @keyframes blobAnimSmall {
        0% {
            transform: translate(1vw, 0vh);
        }
        25% {
            transform: translate(1vw, -1vh) rotate(25deg);
        }
        50% {
            transform: translate(-1vw, 0vh) rotate(50deg);
        }
        75% {
            transform: translate(1vw, 1vh) rotate(75deg);
        }
        100% {
            transform: translate(1vw, 0vh) rotate(100deg);
        }
    }

    @keyframes blobAnimMedium {
        0% {
            transform: translate(1vw, 0vh);
        }
        25% {
            transform: translate(1vw, -1vh) rotate(-25deg);
        }
        50% {
            transform: translate(-1vw, 0vh) rotate(-50deg);
        }
        75% {
            transform: translate(1vw, 1vh) rotate(-75deg);
        }
        100% {
            transform: translate(1vw, 0vh) rotate(-100deg);
        }
    }

    @keyframes blobAnimBig {
        0% {
            transform: translate(1vw, -1vh);
        }
        25% {
            transform: translate(-1vw, 0vh) rotate(25deg);
        }
        50% {
            transform: translate(1vw, 1vh) rotate(50deg);
        }
        75% {
            transform: translate(1vw, 0vh rotate(75deg));
        }
        100% {
            transform: translate(1vw, -1vh) rotate(100deg);
        }
    }
</style>
