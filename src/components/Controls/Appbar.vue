<template>
    <div class="appbar">
        <div class="title">{{ title }}</div>
        <div class="actions">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Appbar',
        props: [
            'title'
        ]
    }
</script>

<style scoped lang="less">
    .appbar {
        width: 100%;
        height: 50px;
        background: rgba(255,255,255,0.075);
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 0px 10px;

        & .title {
            padding: 0px 10px;
            font-size: 16px;
            display: flex;
            align-items: center;
        }

        & .actions {
            display: flex;
            align-items: center;

            & a {
                color: #e2e2e2;
                font-size: 20px;
                width: 32px;
                height: 32px;
                display: block;
                margin-left: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50px;
                transition: 0.15s ease-in-out background;

                &:hover {
                    background: rgba(255,255,255,0.2);
                    cursor: pointer;
                }
            }
        }
    }
</style>
