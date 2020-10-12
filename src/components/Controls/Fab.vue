<template>
    <div class="fab">
        <div class="icon"><span class="mdi mdi-transfer-right"></span></div>
        <div class="text">{{ title }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Fab',
        props: [
            'title'
        ],
        methods: {
        }
    }
</script>

<style scoped lang="less">
    .fab {
        background: #474747;
        padding: 10px 15px;
        border-radius: 100px;
        position: absolute;
        bottom: 22px;
        right: 22px;
        display: grid;
        grid-template-columns: 20px 1fr;
        grid-gap: 10px;
        align-items: center;
        transition: 0.15s ease-in-out background;
        box-shadow: 0px 4px 12px rgba(0,0,0,0.4);

        & .icon {
            font-size: 20px;
        }
        & .text {
            font-size: 16px;
            text-transform: uppercase;
            padding-right: 5px;
        }

        &:hover {
            background: #555555;
            cursor: pointer;
        }
    }
</style>
