<template>
    <div class="livebar">
        <div class="status">
            <div class="icon"><span class="mdi mdi-video"></span></div>
            <div class="screenState">{{ state }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Livebar',
        props: [
            'state'
        ]
    }
</script>

<style scoped lang="less">
    .livebar {
        width: 100%;
        height: 40px;
        background: rgba(255,255,255,0.075);
        display: grid;
        padding: 0px 20px;

        & .status {
            display: grid;
            align-items: center;
            grid-template-columns: auto 1fr;
            grid-gap: 10px;

            & .icon {
                font-size: 20px;
                color: #ef5350;
            }
            & .screenState {
                font-size: 14px;
                margin-bottom: 3px;
            }
        }
    }
</style>
