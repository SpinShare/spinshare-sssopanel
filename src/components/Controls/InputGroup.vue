<template>
    <div class="inputGroup">
        <div class="title">{{ title }}</div>
        <div :class="'content ' + (twoInputs ? 'twoInputs' : '')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InputGroup',
        props: [
            'title',
            'twoInputs'
        ],
        methods: {
        }
    }
</script>

<style scoped lang="less">
    .inputGroup {
        display: grid;
        grid-template-rows: auto auto;
        grid-gap: 7px;
        margin: 25px 0px;

        & .title {
            font-size: 14px;
            color: #e2e2e2;
            font-weight: bold;
        }
        & .content {
            display: grid;
            grid-gap: 15px;

            &.twoInputs {
                grid-template-columns: 1fr 1fr;
            }

            & input {
                background: rgba(255,255,255,0.1);
                border: 0px;
                outline: 0px;
                font-size: 14px;
                padding: 8px 15px;
                border-radius: 4px;
                color: #fff;
            }
        }
    }
</style>
