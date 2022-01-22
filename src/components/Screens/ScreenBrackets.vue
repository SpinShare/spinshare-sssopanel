<template>
    <div class="screenBrackets">
        <div class="blobs">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#23B0E2" d="M48.5,-16.2C55.2,4.7,47.5,29.8,30.1,42.7C12.7,55.6,-14.4,56.4,-29.9,44.4C-45.5,32.3,-49.4,7.5,-42.5,-13.7C-35.6,-35,-17.8,-52.6,1.6,-53.1C20.9,-53.6,41.9,-37,48.5,-16.2Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#23B0E2" d="M72,-22.7C81.3,5.3,68.7,41.2,43.9,58.9C19.1,76.5,-17.9,76,-33.9,60.9C-50,45.9,-45.1,16.4,-36,-11.4C-26.9,-39.2,-13.4,-65.3,8.9,-68.2C31.3,-71.1,62.7,-50.8,72,-22.7Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#23B0E2" d="M52.8,-18.5C60,5.2,51.8,32.6,34.6,44.3C17.4,56,-8.8,52,-24.2,39.4C-39.7,26.7,-44.5,5.3,-38.7,-16.4C-32.8,-38.1,-16.4,-60.2,3.2,-61.3C22.8,-62.3,45.5,-42.2,52.8,-18.5Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#23B0E2" d="M35.4,-7.2C42.9,11.7,44,36.9,29.7,49.3C15.4,61.7,-14.5,61.3,-30.1,48.3C-45.7,35.3,-47.2,9.8,-39.8,-8.9C-32.4,-27.5,-16.2,-39.1,-1.1,-38.8C13.9,-38.4,27.9,-26,35.4,-7.2Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#23B0E2" d="M62.3,-23.6C69.7,2.5,57,31.8,37.2,44.7C17.4,57.6,-9.7,54,-28.9,40C-48.1,26,-59.4,1.5,-53.3,-22.8C-47.2,-47.1,-23.6,-71.3,1.9,-71.9C27.4,-72.5,54.9,-49.6,62.3,-23.6Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#23B0E2" d="M54.5,-8.9C62.7,7.5,55.9,37.6,37.1,51.4C18.2,65.2,-12.8,62.7,-31.6,48C-50.3,33.3,-56.9,6.3,-49.6,-8.9C-42.3,-24.1,-21.2,-27.6,1,-27.9C23.1,-28.2,46.3,-25.4,54.5,-8.9Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#23B0E2" d="M36,-3.7C44.9,15.8,49.3,44.8,35.4,56.7C21.6,68.6,-10.4,63.5,-29.1,48C-47.8,32.6,-53.3,6.7,-46.2,-10.2C-39.1,-27.1,-19.6,-35.1,-3,-34.1C13.5,-33.2,27.1,-23.2,36,-3.7Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#23B0E2" d="M25.7,-4.8C33.8,16.6,41.2,41.7,28.2,54.9C15.3,68.2,-18.1,69.4,-36.6,54.9C-55.1,40.4,-58.9,10,-50.3,-12C-41.8,-34,-20.9,-47.5,-6,-45.6C8.8,-43.6,17.6,-26.1,25.7,-4.8Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#23B0E2" d="M33.2,-15.6C36.9,0.7,29.6,15.7,14.8,28.4C-0.1,41.1,-22.5,51.5,-34.9,43.6C-47.2,35.6,-49.5,9.4,-42,-12C-34.5,-33.4,-17.3,-50,-1.3,-49.6C14.7,-49.2,29.5,-31.8,33.2,-15.6Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#23B0E2" d="M69.9,-20.4C78.8,4.7,66.1,39.1,44.9,52.2C23.8,65.3,-5.8,57,-23.6,41.9C-41.3,26.8,-47.1,4.8,-41.2,-16.2C-35.3,-37.1,-17.6,-57,6.4,-59.1C30.5,-61.2,61,-45.5,69.9,-20.4Z" transform="translate(100 100)" />
            </svg>
        </div>

        <div class="music">
            <span class="mdi mdi-music"></span>
            <span><strong>{{ snipAuthor }}</strong>{{ snipTitle }}</span>
        </div>
        <div class="title">{{ topLeftText }}</div>
        <div class="bracketDisplay">       
            <!--<div class="qualiBracketDisplay">
                <div class="qround1">
                    <div id="r1-p1-name" class="Player1-Name">{{ r1p1name }}</div>
                    <div id="r1-p1-score" class="Player1-Score">{{ r1p1score }}</div>
                    <div id="r1-p2-name" class="Player2-Name">{{ r1p2name }}</div>
                    <div id="r1-p2-score" class="Player2-Score">{{ r1p2score }}</div>
                </div>
                <div class="qround2">
                    <div id="r2-p1-name" class="Player1-Name">{{ r2p1name }}</div>
                    <div id="r2-p1-score" class="Player1-Score">{{ r2p1score }}</div>
                    <div id="r2-p2-name" class="Player2-Name">{{ r2p2name }}</div>
                    <div id="r2-p2-score" class="Player2-Score">{{ r2p2score }}</div>                  
                </div>
                <div class="qwin-r2">
                    <div id="win-r2-p1-name" class="Player1-Name">{{ winr2p1name }}</div>
                    <div id="win-r2-p1-score" class="Player1-Score">{{ winr2p1score }}</div>
                    <div id="win-r2-p2-name" class="Player2-Name">{{ winr2p2name }}</div>
                    <div id="win-r2-p2-score" class="Player2-Score">{{ winr2p2score }}</div>                    
                </div>
                <div class="qlose-r1">
                    <div id="lose-r1-p1-name" class="Player1-Name">{{ loser1p1name }}</div>
                    <div id="lose-r1-p1-score" class="Player1-Score">{{ loser1p1score }}</div>
                    <div id="lose-r1-p2-name" class="Player2-Name">{{ loser1p2name }}</div>
                    <div id="lose-r1-p2-score" class="Player2-Score">{{ loser1p2score }}</div>                    
                </div>
                <div class="qlose-r2">
                    <div id="lose-r2-p1-name" class="Player1-Name">{{ loser2p1name }}</div>
                    <div id="lose-r2-p1-score" class="Player1-Score">{{ loser2p1score }}</div>
                    <div id="lose-r2-p2-name" class="Player2-Name">{{ loser2p2name }}</div>
                    <div id="lose-r2-p2-score" class="Player2-Score">{{ loser2p2score }}</div>                    
                </div>     -->   

                <div class="KOBracketDisplay">
                    <div class="WB">
                        <div class="ko-wqf1">
                            <div id="r1-p1-name" class="Player1-Name">{{ r1p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ r1p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ r1p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ r1p2score }}</div>
                        </div>
                        <div class="ko-wqf2">
                            <div id="r1-p1-name" class="Player1-Name">{{ r2p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ r2p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ r2p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ r2p2score }}</div>
                        </div>
                        <div class="ko-wqf3">
                            <div id="r1-p1-name" class="Player1-Name">{{ r3p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ r3p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ r3p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ r3p2score }}</div>
                        </div>
                        <div class="ko-wqf4">
                            <div id="r1-p1-name" class="Player1-Name">{{ r4p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ r4p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ r4p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ r4p2score }}</div>
                        </div>
                        <div class="ko-wsf1">
                            <div id="r1-p1-name" class="Player1-Name">{{ wsf1p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ wsf1p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ wsf1p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ wsf1p2score }}</div>
                        </div>
                        <div class="ko-wsf2">
                            <div id="r1-p1-name" class="Player1-Name">{{ wsf2p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ wsf2p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ wsf2p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ wsf2p2score }}</div>
                        </div>
                        <div class="ko-wf">
                            <div id="r1-p1-name" class="Player1-Name">{{ wfp1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ wfp1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ wfp2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ wfp2score }}</div>
                        </div>
                        <div class="ko-gf">
                            <div id="r1-p1-name" class="Player1-Name">{{ gfp1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ gfp1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ gfp2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ gfp2score }}</div>
                        </div>
                    </div>
                    <div class="LB">
                        <div class="ko-lqf1">
                            <div id="r1-p1-name" class="Player1-Name">{{ lr1p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ lr1p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ lr1p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ lr1p2score }}</div>
                        </div>
                        <div class="ko-lqf2">
                            <div id="r1-p1-name" class="Player1-Name">{{ lr2p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ lr2p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ lr2p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ lr2p2score }}</div>
                        </div>
                        <div class="ko-lqf3">
                            <div id="r1-p1-name" class="Player1-Name">{{ lqf1p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ lqf1p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ lqf1p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ lqf1p2score }}</div>
                        </div>
                        <div class="ko-lqf4">
                            <div id="r1-p1-name" class="Player1-Name">{{ lqf2p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ lqf2p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ lqf2p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ lqf2p2score }}</div>
                        </div>
                        <div class="ko-lr3">
                            <div id="r1-p1-name" class="Player1-Name">{{ lsfp1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ lsfp1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ lsfp2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ lsfp2score }}</div>
                        </div>
                        <div class="ko-lf">
                            <div id="r1-p1-name" class="Player1-Name">{{ lfp1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ lfp1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ lfp2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ lfp2score }}</div>
                        </div>                                                          
                    </div>                                        
            </div>
        </div>
    </div>
</template>


<script>

    import { remote, ipcRenderer } from 'electron';
    export default {
        name: 'ScreenBrackets',
        data: function() {
            return {
                toornamentEventId: 0,
                toornamentStageId: 0,
                snipTitle: "",
                snipAuthor: "",
				topLeftText: "BRACKETS",

                r1p1name: "Kwazi",
                r1p1score: 3,
                r1p2name: "ballinbino",
                r1p2score: 2,

                r2p1name: "oproerling",
                r2p1score: 3,
                r2p2name: "Krauvando",
                r2p2score: 1,

                r3p1name: "Ricki",
                r3p1score: 3,
                r3p2name: "AbysmalCosmos",
                r3p2score: 0,

                r4p1name: "Loosiano",
                r4p1score: 3,
                r4p2name: "metalman20",
                r4p2score: 1,

                wsf1p1name: "Kwazi",
                wsf1p1score: 1,
                wsf1p2name: "oproerling",
                wsf1p2score: 4,

                wsf2p1name: "Ricki",
                wsf2p1score: 4,
                wsf2p2name: "Loosiano",
                wsf2p2score: 0,

                wfp1name: "oproerling",
                wfp1score: 1,
                wfp2name: "Ricki",
                wfp2score: 5,

                gfp1name: "Ricki",
                gfp1score: 0,
                gfp2name: "Winner of LF",
                gfp2score: 0,

                lr2p1name: "ballinbino",
                lr2p1score: 0,
                lr2p2name: "Krauvando",
                lr2p2score: 0,
                
                lr1p1name: "AbysmalCosmos",
                lr1p1score: 0,
                lr1p2name: "metalman20",
                lr1p2score: 0,
                
                lqf2p1name: "Kwazi",
                lqf2p1score: 0,
                lqf2p2name: "Winner of LR 1",
                lqf2p2score: 0,

                lqf1p1name: "Loosiano",
                lqf1p1score: 0,
                lqf1p2name: "Winner of LR 2",
                lqf1p2score: 0,

                lsfp1name: "Winner of LQF 1",
                lsfp1score: 0,
                lsfp2name: "Winner of LQF 2",
                lsfp2score: 0,
                
                lfp1name: "oproerling",
                lfp1score: 0,
                lfp2name: "Winner of LSF",
                lfp2score: 0,                
            }
        },
        mounted: function() {
            ipcRenderer.on('update-bracketsData', (event, newData) => {
                this.$data.r1p1name =   newData.r1p1name;
                this.$data.r1p1score =  newData.r1p1score;
                this.$data.r1p2name =   newData.r1p2name;
                this.$data.r1p2score =  newData.r1p2score;

                this.$data.r2p1name =   newData.r2p1name;
                this.$data.r2p1score =  newData.r2p1score;
                this.$data.r2p2name =   newData.r2p2name;
                this.$data.r2p2score =  newData.r2p2score;

                this.$data.winr2p1name =    newData.winr2p1name;
                this.$data.winr2p1score =   newData.winr2p1score;
                this.$data.winr2p2name =    newData.winr2p2name;
                this.$data.winr2p2score =   newData.winr2p2score;

                this.$data.loser1p1name =   newData.loser1p1name;
                this.$data.loser1p1score =  newData.loser1p1score;
                this.$data.loser1p2name =   newData.loser1p2name;
                this.$data.loser1p2score =  newData.loser1p2score;

                this.$data.loser2p1name =   newData.loser2p1name;
                this.$data.loser2p1score =  newData.loser2p1score;
                this.$data.loser2p2name =   newData.loser2p2name;
                this.$data.loser2p2score =  newData.loser2p2score;

                this.$data.toornamentEventId = newData.toornamentEventId;
                this.$data.toornamentStageId = newData.toornamentStageId;
				this.$data.topLeftText = newData.topLeftText;
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

/*function setText(id,newvalue) {
    var s= document.getElementById(id);
    s.innerHTML = newvalue;
}

setText("lose-r2-p2-score","1");*/

</script>

<style scoped lang="less">
    .screenBrackets {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        display: grid;
        justify-content: center;
        align-items: flex-end;
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
        }
        & .title {
            z-index: 25;
            position: absolute;
            top: 4vh;
            left: 4vw;
            font-size: 1.5vw;
            font-weight: bold;
            letter-spacing: 0.25em;
            background: #fff;
            color: #000;
            padding: 1vh 3vw;
            border-radius: 40vw;
        }
        & .music {
            z-index: 25;
            position: absolute;
            top: 4vh;
            right: 4vw;
            font-size: 1.5vw;
            color: #fff;
            padding: 0.5vh 0vw;
            display: flex;
            align-items: center;
            & .mdi {
                font-size: 2vw;
                margin-right: 0.75vw;
            }
            & span:not(.mdi) {
                transform: translate(0, -0.25vh);
            }
            & strong {
                margin-right: 1vw;
            }
        }
        & .bracketDisplay {
            z-index: 25;
            position: absolute;
            top: 12.5vh;
            left:7.5vw;
            right: 7.5vw;
            bottom:12.5vh;
            font-size: 1.5vw;
                background: rgba(255, 255, 255, 0);
            color: #fff;
            padding: 0.5vh 0vw;
            display: flex;
            align-items: center;
            & .mdi {
                font-size: 2vw;
                margin-right: 0.75vw;
            }

            & .qualiBracketDisplay {
                z-index: 25;
                position: absolute;
                top: 1vh;
                left:0.75vw;
                right: 0.75vw;
                bottom:1vh;
                font-size: 1.5vw;
                background: rgba(255, 50, 238, 0);
                color: #fff;
                padding: 0.5vh 0vw;
                display: flex;
                align-items: center;
                
                & .qround1 {
                    z-index: 25;
                    position: absolute;
                    top: 7vh;
                    left:7.5vw;
                    width:37.5%;
                    font-size: 2vw;
                    background: #f0f0f0;
                    border-radius: 1vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;    
                    display: grid; 
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                             
                }
                
                & .qround2 {
                    z-index: 25;
                    position: absolute;
                    left:7.5vw;
                    top:22vh;
                    width:37.5%;
                    font-size: 2vw;
                    background: #f0f0f0;
                    border-radius: 1vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;    
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr;                     
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }
                & .qwin-r2 {
                    z-index: 25;
                    position: absolute;
                    right:7.5vw;
                    top:15vh;
                    width:37.5%;
                    font-size: 2vw;
                    background: #f0f0f0;
                    border-radius: 1vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;  
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr;                     
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }                
                & .qlose-r1 {
                    z-index: 25;
                    position: absolute;
                    left:7.5vw;
                    bottom:7.5vh;
                    width:37.5%;
                    font-size: 2vw;
                    background: #f0f0f0;
                    border-radius: 1vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;  
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr;                     
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }
                & .qlose-r2 {
                    z-index: 25;
                    position: absolute;
                    right:7.5vw;
                    bottom:15vh;
                    width:37.5%;
                    font-size: 2vw;
                    background: #f0f0f0;
                    border-radius: 1vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }                                           
            }
            & .KOBracketDisplay {
                z-index: 25;
                position: absolute;
                top: 1vh;
                left:0.75vw;
                right: 0.75vw;
                bottom:1vh;
                font-size: 1.2vw;
                background: rgba(255, 50, 238, 0);
                color: #fff;
                padding: 0.5vh 0vw;
                display: flex;
                align-items: center;
                
            & .WB {
                height:66%;
                & .ko-wqf1 {
                    z-index: 25;
                    position: absolute;
                    left:0%;
                    top:0%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }     

                & .ko-wqf2 {
                    z-index: 25;
                    position: absolute;
                    left:0vw;
                    top:16%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }

                & .ko-wqf3 {
                    z-index: 25;
                    position: absolute;
                    left:0vw;
                    top:32%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }

                & .ko-wqf4 {
                    z-index: 25;
                    position: absolute;
                    left:0vw;
                    top:48%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }

                & .ko-wsf1 {
                    z-index: 25;
                    position: absolute;
                    left:26%;
                    top:8%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }
                & .ko-wsf2 {
                    z-index: 25;
                    position: absolute;
                    left:26%;
                    top:40%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }
                & .ko-wf {
                    z-index: 25;
                    position: absolute;
                    left:51.25%;
                    top:24%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }
                & .ko-gf {
                    z-index: 25;
                    position: absolute;
                    left:77.5%;
                    top:24%;
                    width:22.5%;
                    background: #99ceff;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }                                                                
            }
            & .LB{
                & .ko-lqf1 {
                    z-index: 25;
                    position: absolute;
                    left:0vw;
                    bottom:0vh;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }     

                & .ko-lqf2 {
                    z-index: 25;
                    position: absolute;
                    left:0vw;
                    bottom:16%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }

                & .ko-lqf3 {
                    z-index: 25;
                    position: absolute;
                    left:26%;
                    bottom:0%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }

                & .ko-lqf4 {
                    z-index: 25;
                    position: absolute;
                    left:26%;
                    bottom:16%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }

                & .ko-lr3 {
                    z-index: 25;
                    position: absolute;
                    left:51.25%;
                    bottom:8%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }
                & .ko-lf {
                    z-index: 25;
                    position: absolute;
                    left:77.5%;
                    bottom:8%;
                    width:22.5%;
                    background: #f0f0f0;
                    border-radius: 0.75vh;
                    color: #000;
                    padding: 1vh 1vw;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }
            }
                .Player1-Name { grid-area: Player1-Name; border-radius: 0.5vh; border: 0.5vh solid #000; padding-left:15px;}
                .Player1-Score { grid-area: Player1-Score; border-radius: 0.5vh; border: 0.5vh solid #000; text-align: center;}
                .Player2-Name { grid-area: Player2-Name; border-radius: 0.5vh; border: 0.5vh solid #000; padding-left:15px;}
                .Player2-Score { grid-area: Player2-Score; border-radius: 0.5vh; border: 0.5vh solid #000; text-align: center;} 
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
</style>