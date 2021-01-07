<template>
    <div class="screenCommentators4">
        <div class="commentators-box">
            <webview :class="isFullscreen ? 'isFullscreen' : ''" src="https://streamkit.discord.com/overlay/voice/747574206904008844/747601413172887552?icon=true&online=true&logo=white&text_color=%23ffffff&text_size=14&text_outline_color=%23000000&text_outline_size=0&text_shadow_color=%23000000&text_shadow_size=0&bg_color=%231e2124&bg_opacity=0.95&bg_shadow_color=%23000000&bg_shadow_size=0&invite_code=&limit_speaking=true&small_avatars=true&hide_names=false&fade_chat=0"></webview>
        </div>

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

        <div class="music">
            <span class="mdi mdi-music"></span>
            <span><strong>{{ snipAuthor }}</strong>{{ snipTitle }}</span>
        </div>
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';
    import SSAPI from "../../modules/module.api.js";

    export default {
        name: 'ScreenCommentators4',
        data: function() {
            return {
                isFullscreen: false,
                snipTitle: "",
                snipAuthor: "",
                player1Id: 0,
                player2Id: 0,
                player1Data: {},
                player2Data: {},
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
    .screenCommentators4 {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        display: grid;

        & .commentators-box {
            position: absolute;
            top: 8vw;
            right: 5vw;
            border: 0px;
            width: 35vw;
            height: 35vh;
            padding: 1vw;
            background: rgba(255,255,255,0.2);
            border-radius: 1vw;

            &:before {
                content: "COMMENTATORS";
                display: block;
                position: absolute;
                background: #fff;
                color: #000;
                font-size: 1.25vw;
                padding: 1vh 3vw;
                border-radius: 100vw;
                font-weight: bold;
                left: 9.5vw;
                top: -2.5vh;
            }
            & webview {
                margin-top: 2vh;
                height: 50vh;
                transform-origin: top left;
                transform: scale(0.75);

                &.isFullscreen {
                    transform-origin: top left;
                    transform: scale(1.15);
                }
            }
        }

        & .users {
            display: grid;
            grid-template-columns: 1fr 6vw 1fr;
            justify-items: center;
            align-items: center;
            width: 35vw;
            margin: 0 auto;
            padding-top: 2vh;
            height: 35vh;
            position: absolute;
            bottom: 8vw;
            right: 5vw;

            & .user-data {
                display: grid;
                grid-gap: 3vh;
                justify-items: center;

                & .avatar {
                    width: 6vw;
                    height: 6vw;
                    border-radius: 100%;
                    background-size: cover;
                    background-position: center;
                }
                & .username {
                    font-size: 1.25vw;
                    line-height: 1em;
                }
                & .pronouns {
                    margin-top: -0.75vw;
                    font-size: 0.75vw;
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

        & .blobs {
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;

            & svg {
                position: absolute;
                width: 5vw;
                height: 5vw;
                animation: blobAnimSmall 10s infinite alternate linear;
                transition: 2s ease all;

                &:nth-child(2n) {
                    width: 10vw;
                    height: 10vw;
                    animation: blobAnimMedium 15s infinite alternate linear;
                }
                &:nth-child(3n) {
                    width: 20vw;
                    height: 20vw;
                    animation: blobAnimBig 20s infinite alternate linear;
                }
            }
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

    @keyframes satAnim {
        0% {
            height: 80vh;
            transform: rotate(-120deg);
        }
        100% {
            height: 100vh;
            transform: rotate(20deg);
        }
    }
</style>
