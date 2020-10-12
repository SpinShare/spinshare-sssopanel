<template>
    <div class="screenCurrentlyPlaying">
        <header>HEADER</header>
        <div class="screens">
            <div class="screen"><span>1</span></div>
            <div class="screen"><span>2</span></div>
        </div>
        <footer>FOOTER</footer>
    </div>
</template>

<script>
    export default {
        name: 'ScreenInGame'
    }
</script>

<style scoped lang="less">
    .screenCurrentlyPlaying {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        background: #222222;
        display: grid;
        grid-template-rows: 1fr auto 1fr;

        header {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        & .screens {
            display: grid;
            grid-template-columns: 1fr 1fr;

            & .screen {
                position: relative;
                overflow: hidden;
                background: url('../../assets/img/NoInput.jpg');
                background-size: cover;
                background: limegreen;
                height: 0;
                padding-top: 56.25%;

                & span {
                    position: absolute;
                    left: 0px;
                    right: 0px;
                    top: 0px;
                    bottom: 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 5rem;
                    font-weight: bold;
                    text-shadow: 0px 2px 16px rgba(0,0,0,0.4);
                }
            }
        }

        footer {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
