<template>
    <div class="ChallEliteEnd">
        <div class="blobs">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#010101" d="M62.3,-23.6C69.7,2.5,57,31.8,37.2,44.7C17.4,57.6,-9.7,54,-28.9,40C-48.1,26,-59.4,1.5,-53.3,-22.8C-47.2,-47.1,-23.6,-71.3,1.9,-71.9C27.4,-72.5,54.9,-49.6,62.3,-23.6Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#010101" d="M72,-22.7C81.3,5.3,68.7,41.2,43.9,58.9C19.1,76.5,-17.9,76,-33.9,60.9C-50,45.9,-45.1,16.4,-36,-11.4C-26.9,-39.2,-13.4,-65.3,8.9,-68.2C31.3,-71.1,62.7,-50.8,72,-22.7Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#010101" d="M52.8,-18.5C60,5.2,51.8,32.6,34.6,44.3C17.4,56,-8.8,52,-24.2,39.4C-39.7,26.7,-44.5,5.3,-38.7,-16.4C-32.8,-38.1,-16.4,-60.2,3.2,-61.3C22.8,-62.3,45.5,-42.2,52.8,-18.5Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#010101" d="M48.5,-16.2C55.2,4.7,47.5,29.8,30.1,42.7C12.7,55.6,-14.4,56.4,-29.9,44.4C-45.5,32.3,-49.4,7.5,-42.5,-13.7C-35.6,-35,-17.8,-52.6,1.6,-53.1C20.9,-53.6,41.9,-37,48.5,-16.2Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#010101" d="M33.2,-15.6C36.9,0.7,29.6,15.7,14.8,28.4C-0.1,41.1,-22.5,51.5,-34.9,43.6C-47.2,35.6,-49.5,9.4,-42,-12C-34.5,-33.4,-17.3,-50,-1.3,-49.6C14.7,-49.2,29.5,-31.8,33.2,-15.6Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#010101" d="M69.9,-20.4C78.8,4.7,66.1,39.1,44.9,52.2C23.8,65.3,-5.8,57,-23.6,41.9C-41.3,26.8,-47.1,4.8,-41.2,-16.2C-35.3,-37.1,-17.6,-57,6.4,-59.1C30.5,-61.2,61,-45.5,69.9,-20.4Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#010101" d="M35.4,-7.2C42.9,11.7,44,36.9,29.7,49.3C15.4,61.7,-14.5,61.3,-30.1,48.3C-45.7,35.3,-47.2,9.8,-39.8,-8.9C-32.4,-27.5,-16.2,-39.1,-1.1,-38.8C13.9,-38.4,27.9,-26,35.4,-7.2Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#010101" d="M36,-3.7C44.9,15.8,49.3,44.8,35.4,56.7C21.6,68.6,-10.4,63.5,-29.1,48C-47.8,32.6,-53.3,6.7,-46.2,-10.2C-39.1,-27.1,-19.6,-35.1,-3,-34.1C13.5,-33.2,27.1,-23.2,36,-3.7Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#010101" d="M25.7,-4.8C33.8,16.6,41.2,41.7,28.2,54.9C15.3,68.2,-18.1,69.4,-36.6,54.9C-55.1,40.4,-58.9,10,-50.3,-12C-41.8,-34,-20.9,-47.5,-6,-45.6C8.8,-43.6,17.6,-26.1,25.7,-4.8Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#010101" d="M54.5,-8.9C62.7,7.5,55.9,37.6,37.1,51.4C18.2,65.2,-12.8,62.7,-31.6,48C-50.3,33.3,-56.9,6.3,-49.6,-8.9C-42.3,-24.1,-21.2,-27.6,1,-27.9C23.1,-28.2,46.3,-25.4,54.5,-8.9Z" transform="translate(100 100)" />
            </svg>

            <div class="satellite">
                <img src="../../assets/img/satellite.svg" alt="Satellite" />
            </div>
            <div ref="snow">
            </div>
        </div>


        <div class="leftSide">
            <div class="text">
                <div class="user-data">
                    <div class="avatar" :style="'background-image: url(' + eliteData.avatar + ');'"></div>
                    <div class="username">{{ eliteData.username }}</div>
                    <div class="title">
                        SpinShare SpeenOpen<br />
                        Winter 2023 Elite Winner
                    </div>
                </div>
            </div>
        </div>

        <div class="music">
            <div class="music-container">
                <span class="mdi mdi-music"></span>
                <span><strong>{{ snipAuthor }}</strong>{{ snipTitle }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { remote, ipcRenderer } from 'electron';
    import SSAPI from "@/modules/module.api";
    //import Snowflakes from 'magic-snowflakes';
export default {
    name: 'ScreenChallEliteEnd',
    data: function() {
        return {
            eliteUserID: 0,
            challUserID: 0,
            eliteData: null,
            challData: null,
            snipTitle: "",
            snipAuthor: ""
        }
    },
        mounted: function () {
            let ssapi = new SSAPI();

            /*const snowflakes = new Snowflakes({
                color: '#ffffff', // Default: "#5ECDEF"
                container: this.$refs.snow, // Default: document.body
                count: 100, // 100 snowflakes. Default: 50
                minOpacity: 0.3, // From 0 to 1. Default: 0.6
                maxOpacity: 0.95, // From 0 to 1. Default: 1
                minSize: 10, // Default: 10
                maxSize: 40, // Default: 25
                rotation: true, // Default: true
                speed: 0.9, // The property affects the speed of falling. Default: 1
                wind: true, // Without wind. Default: true
                width: 3840, // Default: width of container
                height: 2160, // Default: height of container
                zIndex: -1 // Default: 9999
            });*/
        console.log("[SSSOEndScreen] Ready.");
            ipcRenderer.on('update-ssso-end-data', (event, newData) => {
            if (this.$data.eliteUserID != newData.eliteUserID) {
                ssapi.getUserDetail(newData.eliteUserID).then((data) => {
                    console.log(data);
                    this.$data.eliteData = data.data;
                });
                }
                if (this.$data.challUserID != newData.challUserID) {
                    ssapi.getUserDetail(newData.challUserID).then((data) => {
                        console.log(data);
                        this.$data.challData = data.data;
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
    .ChallEliteEnd {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        display: grid;
        justify-content: center;
        align-items: center;
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
            animation: blobAnimSmall 10s infinite alternate ease-in-out;
            transition: 2s ease all;
            &:nth-child(2n) {
                width: 10vw;
                height: 10vw;
                animation: blobAnimMedium 15s infinite alternate ease-in-out;
            }
            &:nth-child(3n) {
                width: 20vw;
                height: 20vw;
                animation: blobAnimBig 20s infinite alternate ease-in-out;
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
            &:nth-child(7) { top: 12vh; left: 2vw; animation-delay: -7s; }
            &:nth-child(8) { top: -2vh; left: 4vw; animation-delay: -8s; }
            // Top Right
            &:nth-child(9) { top: -5vh; left: 82vw; animation-delay: -9s; }
            &:nth-child(10) { top: -1vh; left: 76vw; animation-delay: -10s; }
        }
        & .satellite {
            height: 90vh;
            transform-origin: bottom center;
            position: absolute;
            bottom: 0;
            left: 48vw;
            z-index: 2;
            opacity: 0.3;
            animation: satAnim 30s infinite linear;
            & img {
                height: 4vw;
            }
        }
    }
    & .music {
        z-index: 25;
        position: absolute;
        top: 4vh;
        left: 4vw;
        width: 92vw;
        font-size: 1.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        & strong

    {
        margin-right: 1vw;
    }

    }

    & .music-container {
        margin: auto;
        align-items: center;
        text-align: center;
        background-color: #041d28;
        color: #f0f0f0;
        padding: 0.25em 1em;
        border-radius: 40vw;
        display: flex;
        & .mdi

    {
        font-size: 2vw;
        margin-right: 0.75vw;
    }

    & span:not(.mdi) {
        display: inline-block;
        transform: translate(0, -0.1vh);
    }

    }

    & .leftSide{
        position:absolute;
        display:flex;
        flex-direction:column;
        background-color:#ff0000;
        width:50%;
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
                z-index:25;
            }
            & .username {
                margin-top: 3vh;
                margin-bottom: 1.5vh;
                font-size: 4vw;
                border: solid;
                border-color: #041d28;
                background-color: rgba(7,58,80,0.8);
                color: #f0f0f0;
                padding: 0.1em 0.75em;
                border-radius: 50vw;
                z-index:25;
            }
            & .title {
                background: #fff;
                color: #000;
                font-weight: bold;
                font-size: 1.15vw;
                padding: 1vh 4vw;
                border-radius: 50vw;
                text-align: center;
                z-index:25;
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
@keyframes satAnim {
    0% {
        height: 110vh;
        transform: rotate(-90deg);
    }
    50% {
        height: 90vh;
        transform: rotate(0deg);
    }
    100% {
        height: 95vh;
        transform: rotate(90deg);
    }
}
</style>