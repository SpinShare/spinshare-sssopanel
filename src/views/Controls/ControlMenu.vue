<template>
    <div class="controlMenu">
        <router-link :to="{ name: 'ControlTesting'}" class="menuItem">
            <div class="icon"><span class="mdi mdi-bug"></span></div>
            <div class="text">Testing</div>
        </router-link>
        <router-link :to="{ name: 'ControlCountdown'}" class="menuItem">
            <div class="icon"><span class="mdi mdi-clock-fast"></span></div>
            <div class="text">Countdown</div>
        </router-link>
        <router-link :to="{ name: 'ControlBrackets'}" class="menuItem">
            <div class="icon"><span class="mdi mdi-tournament"></span></div>
            <div class="text">Brackets</div>
        </router-link>
        <router-link :to="{ name: 'ControlBeforeMatch'}" class="menuItem">
            <div class="icon"><span class="mdi mdi-google-controller"></span></div>
            <div class="text">BeforeMatch</div>
        </router-link>
        <router-link :to="{ name: 'ControlInGame'}" class="menuItem">
            <div class="icon"><span class="mdi mdi-google-controller"></span></div>
            <div class="text">InGame</div>
        </router-link>
        <router-link :to="{ name: 'ControlCommentators2'}" class="menuItem">
            <div class="icon"><span class="mdi mdi-microphone"></span></div>
            <div class="text">Commentators (2 People)</div>
        </router-link>
        <router-link :to="{ name: 'ControlCommentators4'}" class="menuItem">
            <div class="icon"><span class="mdi mdi-microphone"></span></div>
            <div class="text">Commentators (4 People)</div>
        </router-link>
        <router-link :to="{ name: 'ControlStreamEnd'}" class="menuItem">
            <div class="icon"><span class="mdi mdi-video-off"></span></div>
            <div class="text">End of Stream</div>
        </router-link>
        <router-link :to="{ name: 'ControlTournamentEnd'}" class="menuItem">
            <div class="icon"><span class="mdi mdi-video-off"></span></div>
            <div class="text">End of Tournament</div>
        </router-link>
        <router-link :to="{ name: 'ControlChallEliteEnd'}" class="menuItem">
            <div class="icon"><span class="mdi mdi-video-off"></span></div>
            <div class="text">SSSO End Screen</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'ControlMenu'
    }
</script>

<style scoped lang="less">
    .controlMenu {
        padding: 20px 10px;

        & .menuItem {
            display: grid;
            grid-template-columns: 20px 1fr;
            grid-gap: 15px;
            margin-bottom: 8px;
            color: #e2e2e2;
            border-radius: 4px;
            padding: 8px 10px;
            transition: 0.15s ease-in-out background;

            & .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
            }
            & .text {
                display: flex;
                align-items: center;
            }
            &:hover {
                background: rgba(255,255,255,0.1);
            }
        }
    }
</style>
