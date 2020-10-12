<template>
    <div class="screenCommentators">
        <iframe src="https://streamkit.discord.com/overlay/voice/747574206904008844/747601413172887552?icon=true&online=true&logo=white&text_color=%23ffffff&text_size=14&text_outline_color=%23000000&text_outline_size=0&text_shadow_color=%23000000&text_shadow_size=0&bg_color=%231e2124&bg_opacity=0.95&bg_shadow_color=%23000000&bg_shadow_size=0&invite_code=&limit_speaking=false&small_avatars=false&hide_names=false&fade_chat=0"></iframe>
    </div>
</template>

<script>
    export default {
        name: 'ScreenCommentators'
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
        background: darkblue;
        display: grid;
        justify-content: center;
        align-items: center;

        & iframe {
            border: 0px;
            width: 312px;
            height: 600px;
            background: red;
        }
    }
</style>
