<template>
    <div class="screenCommentators">
        <div class="commentators-box">
            <webview :class="isFullscreen ? 'isFullscreen' : ''" src="https://streamkit.discord.com/overlay/voice/747574206904008844/747601413172887552?icon=true&online=true&logo=white&text_color=%23ffffff&text_size=14&text_outline_color=%23000000&text_outline_size=0&text_shadow_color=%23000000&text_shadow_size=0&bg_color=%231e2124&bg_opacity=0.95&bg_shadow_color=%23000000&bg_shadow_size=0&invite_code=&limit_speaking=false&small_avatars=false&hide_names=false&fade_chat=0"></webview>
        </div>
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    export default {
        name: 'ScreenCommentators',
        data: function() {
            return {
                isFullscreen: false,
            }
        },
        mounted: function() {
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
    .screenCommentators {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        display: grid;

        & .commentators-box {
            position: absolute;
            top: 10vw;
            left: 10vw;
            border: 0px;
            width: 35vw;
            height: 55vh;
            padding: 1vw;
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
                left: 7.5vw;
                top: -2.5vh;
            }
            & webview {
                margin-top: 2vh;
                height: 50vh;

                &.isFullscreen {
                    transform-origin: top left;
                    transform: scale(2.0);
                }
            }
        }
    }
</style>
