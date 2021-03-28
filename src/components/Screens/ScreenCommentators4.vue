<template>
    <div class="screenCommentators4">
        <div class="chat-box">
            <webview v-if="!isFullscreen" src="https://streamkit.discord.com/overlay/chat/747574206904008844/747599065058902078?icon=true&online=true&logo=white&text_color=%23ffffff&text_size=16&text_outline_color=%23000000&text_outline_size=0&text_shadow_color=%23000000&text_shadow_size=0&bg_color=%23000000&bg_opacity=0&bg_shadow_color=%23000000&bg_shadow_size=0&invite_code=&limit_speaking=false&small_avatars=false&hide_names=false&fade_chat=0"></webview>
            <webview class="isFullscreen" v-if="isFullscreen" src="https://streamkit.discord.com/overlay/chat/747574206904008844/747599065058902078?icon=true&online=true&logo=white&text_color=%23ffffff&text_size=18&text_outline_color=%23000000&text_outline_size=0&text_shadow_color=%23000000&text_shadow_size=0&bg_color=%23000000&bg_opacity=0&bg_shadow_color=%23000000&bg_shadow_size=0&invite_code=&limit_speaking=false&small_avatars=false&hide_names=false&fade_chat=0"></webview>
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
        

        <div class="blobs">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.5,-16.2C55.2,4.7,47.5,29.8,30.1,42.7C12.7,55.6,-14.4,56.4,-29.9,44.4C-45.5,32.3,-49.4,7.5,-42.5,-13.7C-35.6,-35,-17.8,-52.6,1.6,-53.1C20.9,-53.6,41.9,-37,48.5,-16.2Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M72,-22.7C81.3,5.3,68.7,41.2,43.9,58.9C19.1,76.5,-17.9,76,-33.9,60.9C-50,45.9,-45.1,16.4,-36,-11.4C-26.9,-39.2,-13.4,-65.3,8.9,-68.2C31.3,-71.1,62.7,-50.8,72,-22.7Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.8,-18.5C60,5.2,51.8,32.6,34.6,44.3C17.4,56,-8.8,52,-24.2,39.4C-39.7,26.7,-44.5,5.3,-38.7,-16.4C-32.8,-38.1,-16.4,-60.2,3.2,-61.3C22.8,-62.3,45.5,-42.2,52.8,-18.5Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.4,-7.2C42.9,11.7,44,36.9,29.7,49.3C15.4,61.7,-14.5,61.3,-30.1,48.3C-45.7,35.3,-47.2,9.8,-39.8,-8.9C-32.4,-27.5,-16.2,-39.1,-1.1,-38.8C13.9,-38.4,27.9,-26,35.4,-7.2Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.3,-23.6C69.7,2.5,57,31.8,37.2,44.7C17.4,57.6,-9.7,54,-28.9,40C-48.1,26,-59.4,1.5,-53.3,-22.8C-47.2,-47.1,-23.6,-71.3,1.9,-71.9C27.4,-72.5,54.9,-49.6,62.3,-23.6Z" transform="translate(100 100)" />
            </svg>
        </div>

        <div class="music">
            <span class="mdi mdi-music"></span>
            <span><strong>{{ snipAuthor }}</strong>{{ snipTitle }}</span>
        </div>
        <iframe id="cams" class="cams" src="https://obs.ninja/?scene&room=spin2&sl&mono&style=2&hideheader&cc&transparent" frameborder="0"></iframe>
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
        
        & .blobs {
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;

            & svg {
                position: absolute;
                width: 2vw;
                height: 2vw;
                animation: blobAnimSmall 10s infinite alternate linear;
                transition: 2s ease all;

                &:nth-child(2n) {
                    width: 4vw;
                    height: 4vw;
                    animation: blobAnimMedium 15s infinite alternate linear;
                }
                &:nth-child(3n) {
                    width: 6vw;
                    height: 6vw;
                    animation: blobAnimBig 20s infinite alternate linear;
                }

                // Top Left
                &:nth-child(1) { top: 2vh; left: 5vw; animation-delay: -1s; }

                // Bottom left
                &:nth-child(2) { top: 70vh; left: 2vw; animation-delay: -2s; }
                &:nth-child(3) { top: 70vh; left: 85vw; animation-delay: -3s; }
                // Bottom Left
                &:nth-child(4) { top: 75vh; left: 10vw; animation-delay: -4s; }
                &:nth-child(5) { top: 88vh; left: 4vw; animation-delay: -5s; }
            }
        }

        & .chat-box {
            background: #000;
            border-top-left-radius: 1vw;
            border-top-right-radius: 1vw;
            z-index: 30;
            position: absolute;
            top: 8vw;
            right: 5vw;
            border: 0px;
            width: 35vw;
            height: 35vh;
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
        & .cams {
            margin-left: 3vh;
            margin-top: 5vh;
            width: 57vw;
            height: 85vh;
            z-index: 999;
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
