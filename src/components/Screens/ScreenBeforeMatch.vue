<template>
    <div class="screenBeforeMatch">
        <div class="blobs">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF641F" d="M48.5,-16.2C55.2,4.7,47.5,29.8,30.1,42.7C12.7,55.6,-14.4,56.4,-29.9,44.4C-45.5,32.3,-49.4,7.5,-42.5,-13.7C-35.6,-35,-17.8,-52.6,1.6,-53.1C20.9,-53.6,41.9,-37,48.5,-16.2Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF641F" d="M54.5,-8.9C62.7,7.5,55.9,37.6,37.1,51.4C18.2,65.2,-12.8,62.7,-31.6,48C-50.3,33.3,-56.9,6.3,-49.6,-8.9C-42.3,-24.1,-21.2,-27.6,1,-27.9C23.1,-28.2,46.3,-25.4,54.5,-8.9Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF641F" d="M36,-3.7C44.9,15.8,49.3,44.8,35.4,56.7C21.6,68.6,-10.4,63.5,-29.1,48C-47.8,32.6,-53.3,6.7,-46.2,-10.2C-39.1,-27.1,-19.6,-35.1,-3,-34.1C13.5,-33.2,27.1,-23.2,36,-3.7Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF641F" d="M25.7,-4.8C33.8,16.6,41.2,41.7,28.2,54.9C15.3,68.2,-18.1,69.4,-36.6,54.9C-55.1,40.4,-58.9,10,-50.3,-12C-41.8,-34,-20.9,-47.5,-6,-45.6C8.8,-43.6,17.6,-26.1,25.7,-4.8Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF641F" d="M33.2,-15.6C36.9,0.7,29.6,15.7,14.8,28.4C-0.1,41.1,-22.5,51.5,-34.9,43.6C-47.2,35.6,-49.5,9.4,-42,-12C-34.5,-33.4,-17.3,-50,-1.3,-49.6C14.7,-49.2,29.5,-31.8,33.2,-15.6Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF641F" d="M69.9,-20.4C78.8,4.7,66.1,39.1,44.9,52.2C23.8,65.3,-5.8,57,-23.6,41.9C-41.3,26.8,-47.1,4.8,-41.2,-16.2C-35.3,-37.1,-17.6,-57,6.4,-59.1C30.5,-61.2,61,-45.5,69.9,-20.4Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF641F" d="M72,-22.7C81.3,5.3,68.7,41.2,43.9,58.9C19.1,76.5,-17.9,76,-33.9,60.9C-50,45.9,-45.1,16.4,-36,-11.4C-26.9,-39.2,-13.4,-65.3,8.9,-68.2C31.3,-71.1,62.7,-50.8,72,-22.7Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF641F" d="M52.8,-18.5C60,5.2,51.8,32.6,34.6,44.3C17.4,56,-8.8,52,-24.2,39.4C-39.7,26.7,-44.5,5.3,-38.7,-16.4C-32.8,-38.1,-16.4,-60.2,3.2,-61.3C22.8,-62.3,45.5,-42.2,52.8,-18.5Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF641F" d="M35.4,-7.2C42.9,11.7,44,36.9,29.7,49.3C15.4,61.7,-14.5,61.3,-30.1,48.3C-45.7,35.3,-47.2,9.8,-39.8,-8.9C-32.4,-27.5,-16.2,-39.1,-1.1,-38.8C13.9,-38.4,27.9,-26,35.4,-7.2Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF641F" d="M62.3,-23.6C69.7,2.5,57,31.8,37.2,44.7C17.4,57.6,-9.7,54,-28.9,40C-48.1,26,-59.4,1.5,-53.3,-22.8C-47.2,-47.1,-23.6,-71.3,1.9,-71.9C27.4,-72.5,54.9,-49.6,62.3,-23.6Z" transform="translate(100 100)" />
            </svg>
        </div>

        <div class="users">
            <div class="user-data" v-if="player1Data">
                <div class="avatar" :style="'background-image: url(' + player1Data.avatar + ');'"></div>
                <div class="username">{{ player1Data.username }}</div>
            </div>
            <div class="versus">VS.</div>
            <div class="user-data" v-if="player2Data">
                <div class="avatar" :style="'background-image: url(' + player2Data.avatar + ');'"></div>
                <div class="username">{{ player2Data.username }}</div>
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

                // Bottom Right
                &:nth-child(1) { top: 58vh; left: 85vw; animation-delay: -1s; }
                &:nth-child(2) { top: 65vh; left: 72vw; animation-delay: -2s; }
                &:nth-child(3) { top: 65vh; left: 80vw; animation-delay: -3s; }
                // Bottom Left
                &:nth-child(4) { top: 70vh; left: 20vw; animation-delay: -4s; }
                &:nth-child(5) { top: 85vh; left: 15vw; animation-delay: -5s; }
                &:nth-child(6) { top: 55vh; left: 0vw; animation-delay: -6s; }
                // Top Left
                &:nth-child(7) { top: 16vh; left: 5vw; animation-delay: -7s; }
                &:nth-child(8) { top: 3vh; left: 10vw; animation-delay: -8s; }
                // Top Right
                &:nth-child(9) { top: -5vh; left: 82vw; animation-delay: -9s; }
                &:nth-child(10) { top: -1vh; left: 76vw; animation-delay: -10s; }
            }
        }

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
                }
                & .username {
                    font-size: 2.5vw;
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
