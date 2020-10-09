<template>
    <div :class="'screenTransition ' + (transitionActive == true ? 'transitionActive' : '')">
        <img src="@/assets/img/logoOnDark.svg" class="logo" />
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    export default {
        name: 'ScreenTransition',
        data: function() {
            return {
                transitionActive: false,
            }
        },
        mounted: function() {
            ipcRenderer.on('change-state', (event, newState) => {
                this.startTransition();
            });
        },
        methods: {
            startTransition: function() {
                this.$data.transitionActive = true;

                setTimeout(() => {
                    this.$data.transitionActive = false;
                }, 2500);
            }
        }
    }
</script>

<style scoped lang="less">
    .screenTransition {
        position: absolute;
        left: 0vw;
        right: 0vw;
        top: 0px;
        bottom: 0px;
        z-index: 50;
        background: #0F1213;
        transform: translateX(-110vw) skewX(5deg);
        display:flex;
        justify-content:center;
        align-items:center;

        & .logo {
            height: 10vh;
            transform: skewX(-5deg);
        }

        &.transitionActive {
            animation: transitionAnimation 2s;
            animation-fill-mode: forwards;
        }
    }

    @keyframes transitionAnimation {
        0% {
            transform: translateX(-110vw) skewX(5deg);
        }
        47% {
            transform: translateX(0vw) skewX(5deg) scaleX(1.1);
        }
        53% {
            transform: translateX(0vw) skewX(5deg) scaleX(1.1);
        }
        100% {
            transform: translateX(110vw) skewX(5deg);
        }
    }
</style>
