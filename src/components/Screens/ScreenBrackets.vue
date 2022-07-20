<template>
    <div class="screenBrackets">
        <div class="blobs">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#27E277" d="M48.5,-16.2C55.2,4.7,47.5,29.8,30.1,42.7C12.7,55.6,-14.4,56.4,-29.9,44.4C-45.5,32.3,-49.4,7.5,-42.5,-13.7C-35.6,-35,-17.8,-52.6,1.6,-53.1C20.9,-53.6,41.9,-37,48.5,-16.2Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#27E277" d="M72,-22.7C81.3,5.3,68.7,41.2,43.9,58.9C19.1,76.5,-17.9,76,-33.9,60.9C-50,45.9,-45.1,16.4,-36,-11.4C-26.9,-39.2,-13.4,-65.3,8.9,-68.2C31.3,-71.1,62.7,-50.8,72,-22.7Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#27E277" d="M52.8,-18.5C60,5.2,51.8,32.6,34.6,44.3C17.4,56,-8.8,52,-24.2,39.4C-39.7,26.7,-44.5,5.3,-38.7,-16.4C-32.8,-38.1,-16.4,-60.2,3.2,-61.3C22.8,-62.3,45.5,-42.2,52.8,-18.5Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#27E277" d="M35.4,-7.2C42.9,11.7,44,36.9,29.7,49.3C15.4,61.7,-14.5,61.3,-30.1,48.3C-45.7,35.3,-47.2,9.8,-39.8,-8.9C-32.4,-27.5,-16.2,-39.1,-1.1,-38.8C13.9,-38.4,27.9,-26,35.4,-7.2Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#27E277" d="M62.3,-23.6C69.7,2.5,57,31.8,37.2,44.7C17.4,57.6,-9.7,54,-28.9,40C-48.1,26,-59.4,1.5,-53.3,-22.8C-47.2,-47.1,-23.6,-71.3,1.9,-71.9C27.4,-72.5,54.9,-49.6,62.3,-23.6Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#27E277" d="M54.5,-8.9C62.7,7.5,55.9,37.6,37.1,51.4C18.2,65.2,-12.8,62.7,-31.6,48C-50.3,33.3,-56.9,6.3,-49.6,-8.9C-42.3,-24.1,-21.2,-27.6,1,-27.9C23.1,-28.2,46.3,-25.4,54.5,-8.9Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#27E277" d="M36,-3.7C44.9,15.8,49.3,44.8,35.4,56.7C21.6,68.6,-10.4,63.5,-29.1,48C-47.8,32.6,-53.3,6.7,-46.2,-10.2C-39.1,-27.1,-19.6,-35.1,-3,-34.1C13.5,-33.2,27.1,-23.2,36,-3.7Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#27E277" d="M25.7,-4.8C33.8,16.6,41.2,41.7,28.2,54.9C15.3,68.2,-18.1,69.4,-36.6,54.9C-55.1,40.4,-58.9,10,-50.3,-12C-41.8,-34,-20.9,-47.5,-6,-45.6C8.8,-43.6,17.6,-26.1,25.7,-4.8Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#27E277" d="M33.2,-15.6C36.9,0.7,29.6,15.7,14.8,28.4C-0.1,41.1,-22.5,51.5,-34.9,43.6C-47.2,35.6,-49.5,9.4,-42,-12C-34.5,-33.4,-17.3,-50,-1.3,-49.6C14.7,-49.2,29.5,-31.8,33.2,-15.6Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#27E277" d="M69.9,-20.4C78.8,4.7,66.1,39.1,44.9,52.2C23.8,65.3,-5.8,57,-23.6,41.9C-41.3,26.8,-47.1,4.8,-41.2,-16.2C-35.3,-37.1,-17.6,-57,6.4,-59.1C30.5,-61.2,61,-45.5,69.9,-20.4Z" transform="translate(100 100)" />
            </svg>
        </div>

        <div class="music">
            <span class="mdi mdi-music"></span>
            <span><strong>{{ snipAuthor }}</strong>{{ snipTitle }}</span>
        </div>
        <div class="title">{{ topLeftText }}</div>
        <div class="bracketDisplay">       
            <!--<div class="qualiBracketDisplay">
                <div class="qualiLeftCol">   
                    <div class="match1-header"> WB - Round 1 </div>
                    <div class="qround1">                   
                        <div class="Player1-Name">{{ r1p1name }}</div>
                        <div class="Player1-Score">{{ r1p1score }}</div>
                        <div class="Player2-Name">{{ r1p2name }}</div>
                        <div class="Player2-Score">{{ r1p2score }}</div>
                    </div> 
                    <div class="match2-header"> WB - Round 2 </div>
                    <div class="qround2">
                        <div class="Player1-Name">{{ r2p1name }}</div>
                        <div class="Player1-Score">{{ r2p1score }}</div>
                        <div class="Player2-Name">{{ r2p2name }}</div>
                        <div class="Player2-Score">{{ r2p2score }}</div>                  
                    </div>
                    <div class="match4-header"> LB - Round 1 </div>
                    <div class="qlose-r1">
                        <div id="r4-p1-name" class="Player1-Name">{{ r4p1name }}</div>
                        <div id="r4-p1-score" class="Player1-Score">{{ r4p1score }}</div>
                        <div id="r4-p2-name" class="Player2-Name">{{ r4p2name }}</div>
                        <div id="r4-p2-score" class="Player2-Score">{{ r4p2score }}</div>                    
                    </div>
                </div>

                <div class="qualiMidCol">  
                    <div class="match3-header"> WB - Final </div>
                    <div class="qwin-r2">
                        <div id="r3-p1-name" class="Player1-Name">{{ r3p1name }}</div>
                        <div id="r3-p1-score" class="Player1-Score">{{ r3p1score }}</div>
                        <div id="r3-p2-name" class="Player2-Name">{{ r3p2name }}</div>
                        <div id="r3-p2-score" class="Player2-Score">{{ r3p2score }}</div>                    
                    </div>
                    <div class="match5-header"> LB - Round 2 </div>
                    <div class="qlose-r2">
                        <div id="r5-p1-name" class="Player1-Name">{{ r5p1name }}</div>
                        <div id="r5-p1-score" class="Player1-Score">{{ r5p1score }}</div>
                        <div id="r5-p2-name" class="Player2-Name">{{ r5p2name }}</div>
                        <div id="r5-p2-score" class="Player2-Score">{{ r5p2score }}</div>                    
                    </div>
                </div>
                <div class="qualiRightCol">
                    <div class="match6-header"> Grand Final </div>
                    <div class="qGF">
                        <div id="r6-p1-name" class="Player1-Name">{{ r6p1name }}</div>
                        <div id="r6-p1-score" class="Player1-Score">{{ r6p1score }}</div>
                        <div id="r6-p2-name" class="Player2-Name">{{ r6p2name }}</div>
                        <div id="r6-p2-score" class="Player2-Score">{{ r6p2score }}</div>                    
                    </div> 
                </div>  
            </div>--->
         
            <div class="KOBracketDisplay">
                <div class="WB">
                <div class="WB-header">Winners Bracket</div>
                    <div class="WB-QF">
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
                        <div class="WB-QF-footer">Quarter Finals</div>
                    </div>

                    <div class="WB-SF">
                        <div class="ko-wsf1">
                            <div id="r1-p1-name" class="Player1-Name">{{ r5p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ r5p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ r5p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ r5p2score }}</div>
                        </div>
                        <div class="ko-wsf2">
                            <div id="r1-p1-name" class="Player1-Name">{{ r6p1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ r6p1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ r6p2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ r6p2score }}</div>
                        </div>
                        <div class="WB-SF-footer">Semi Finals</div>                
                    </div>

                    <div class="WB-F">
                        <div class="ko-wf">
                            <div id="r1-p1-name" class="Player1-Name">{{ wfp1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ wfp1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ wfp2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ wfp2score }}</div>
                        </div>
                        <div class="WB-SF-footer">Final</div>                 
                    </div>

                    <div class="WB-GF">
                        <div class="ko-gf">
                            <div id="r1-p1-name" class="Player1-Name">{{ gfp1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ gfp1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ gfp2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ gfp2score }}</div>
                        </div>
                        <div class="WB-SF-footer">Grand Final</div>                                        
                    </div>
                </div>

                <div class="LB">
                <div class="LB-header">Losers Bracket</div>                
                    <div class="LB-R1">
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
                        <div class="WB-SF-footer">Round 1</div>                
                    </div>
                    <div class="LB-R2">
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
                        <div class="WB-SF-footer">Quarter Finals</div>                
                    </div>
                    <div class="LB-SF">
                        <div class="ko-lr3">
                            <div id="r1-p1-name" class="Player1-Name">{{ lsfp1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ lsfp1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ lsfp2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ lsfp2score }}</div>
                        </div>
                        <div class="WB-SF-footer">Semi Final</div>                
                    </div>
                    <div class="LB-F">
                        <div class="ko-lf">
                            <div id="r1-p1-name" class="Player1-Name">{{ lfp1name }}</div>
                            <div id="r1-p1-score" class="Player1-Score">{{ lfp1score }}</div>
                            <div id="r1-p2-name" class="Player2-Name">{{ lfp2name }}</div>
                            <div id="r1-p2-score" class="Player2-Score">{{ lfp2score }}</div>
                        </div>
                        <div class="WB-SF-footer">Final</div>                
                    </div>                
                </div>

            </div>                                                                                             
        </div>
    </div>
</template>


<script>
    var bracket;
    import { remote, ipcRenderer } from 'electron';
    export default {
        name: 'ScreenBrackets',
        data: function() {
            return {
                toornamentEventId: 0,
                toornamentStageId: 0,
                snipTitle: "",
                snipAuthor: "",
				topLeftText: "QUALIFIERS",

                r1p1name: "",
                r1p1score: "",
                r1p2name: "",
                r1p2score: "",

                r2p1name: "",
                r2p1score: "",
                r2p2name: "",
                r2p2score: "",

                r3p1name: "",
                r3p1score: "",
                r3p2name: "",
                r3p2score: "",

                r4p1name: "",
                r4p1score: "",
                r4p2name: "",
                r4p2score: "",

                r5p1name: "",
                r5p1score: "",
                r5p2name: "",
                r5p2score: "",

                r6p1name: "",
                r6p1score: "",
                r6p2name: "",
                r6p2score: "",

                wfp1name: "",
                wfp1score: "",
                wfp2name: "",
                wfp2score: "",

                gfp1name: "",
                gfp1score: "",
                gfp2name: "",
                gfp2score: "",

                lr2p1name: "",
                lr2p1score: "",
                lr2p2name: "",
                lr2p2score: "",
                
                lr1p1name: "",
                lr1p1score: "",
                lr1p2name: "",
                lr1p2score: "",
                
                lqf2p1name: "",
                lqf2p1score: "",
                lqf2p2name: "",
                lqf2p2score: "",

                lqf1p1name: "",
                lqf1p1score: "",
                lqf1p2name: "",
                lqf1p2score: "",

                lsfp1name: "",
                lsfp1score: "",
                lsfp2name: "",
                lsfp2score: "",
                
                lfp1name: "",
                lfp1score: "",
                lfp2name: "",
                lfp2score: "",              
            }
        },
        mounted: function() {
            ipcRenderer.on('update-bracketsData', (event, newData) => {
                bracket = newData.bracket;
                console.log(bracket);

                this.$data.r1p1name =   bracket[0][0];
                this.$data.r1p1score =  bracket[0][1];
                this.$data.r1p2name =   bracket[0][2];
                this.$data.r1p2score =  bracket[0][3];

                this.$data.r2p1name =   bracket[1][0];
                this.$data.r2p1score =  bracket[1][1];
                this.$data.r2p2name =   bracket[1][2];
                this.$data.r2p2score =  bracket[1][3];

                this.$data.r3p1name =    bracket[2][0];
                this.$data.r3p1score =   bracket[2][1];
                this.$data.r3p2name =    bracket[2][2];
                this.$data.r3p2score =   bracket[2][3];

                this.$data.r4p1name =    bracket[3][0];
                this.$data.r4p1score =   bracket[3][1];
                this.$data.r4p2name =    bracket[3][2];
                this.$data.r4p2score =   bracket[3][3];               

                this.$data.r5p1name =   bracket[4][0];
                this.$data.r5p1score =  bracket[4][1];
                this.$data.r5p2name =   bracket[4][2];
                this.$data.r5p2score =  bracket[4][3];

                this.$data.r6p1name =   bracket[5][0];
                this.$data.r6p1score =  bracket[5][1];
                this.$data.r6p2name =   bracket[5][2];
                this.$data.r6p2score =  bracket[5][3];
                
                this.$data.wfp1name =   bracket[6][0];
                this.$data.wfp1score =   bracket[6][1];
                this.$data.wfp2name =   bracket[6][2];
                this.$data.wfp2score =   bracket[6][3];

                this.$data.gfp1name =   bracket[7][0];
                this.$data.gfp1score =   bracket[7][1];
                this.$data.gfp2name =   bracket[7][2];
                this.$data.gfp2score =   bracket[7][3];

                this.$data.lr2p1name =   bracket[9][0];
                this.$data.lr2p1score =   bracket[9][1];
                this.$data.lr2p2name =   bracket[9][2];
                this.$data.lr2p2score =   bracket[9][3];
                
                this.$data.lr1p1name =   bracket[8][0];
                this.$data.lr1p1score =   bracket[8][1];
                this.$data.lr1p2name =   bracket[8][2];
                this.$data.lr1p2score =   bracket[8][3];
                
                this.$data.lqf2p1name =   bracket[11][0];
                this.$data.lqf2p1score =   bracket[11][1];
                this.$data.lqf2p2name =   bracket[11][2];
                this.$data.lqf2p2score =   bracket[11][3];

                this.$data.lqf1p1name =   bracket[10][0];
                this.$data.lqf1p1score =   bracket[10][1];
                this.$data.lqf1p2name =   bracket[10][2];
                this.$data.lqf1p2score =   bracket[10][3];

                this.$data.lsfp1name =   bracket[12][0];
                this.$data.lsfp1score =   bracket[12][1];
                this.$data.lsfp2name =   bracket[12][2];
                this.$data.lsfp2score =   bracket[12][3];
                
                this.$data.lfp1name =   bracket[13][0];
                this.$data.lfp1score =   bracket[13][1];
                this.$data.lfp2name =   bracket[13][2];
                this.$data.lfp2score =   bracket[13][3];

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
            top: 11vh;
            left:5vw;
            right: 5vw;
            bottom:10vh;
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
                width:100%;
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
                display: grid; 
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr;  
                gap: 1.2vh 1.5vw; 
                grid-template-areas: 
                    "qualiLeftCol qualiMidCol qualiRightCol";

                & .match1-header { 
                    background-color:#9bff99;text-align: center;color:#000;
                    z-index: 30;
                    width:100%;
                    position: relative;
                    font-size: 1.25vw;
                    border-radius: 1vh 1vh 0vh 0vh;                   
                    font-weight:800;                
                }
                & .match2-header { 
                    background-color:#9bff99;text-align: center;color:#000;
                    z-index: 30;
                    width:100%;
                    position: relative;
                    top: 7.5%;
                    font-size: 1.25vw;
                    border-radius: 1vh 1vh 0vh 0vh;                   
                    font-weight:800;                
                }
                & .match3-header { 
                    background-color:#9bff99;text-align: center;color:#000;
                    z-index: 30;
                    position: relative;
                    font-size: 1.25vw;
                    border-radius: 1vh 1vh 0vh 0vh;                   
                    font-weight:800;                
                }
                & .match4-header { 
                    background-color:#9bff99;text-align: center;color:#000;
                    z-index: 30;
                    width:100%;
                    position: relative;
                    top: 36%;
                    font-size: 1.25vw;
                    border-radius: 1vh 1vh 0vh 0vh;                   
                    font-weight:800;                
                }
                & .match5-header { 
                    background-color:#9bff99;text-align: center;color:#000;
                    z-index: 30;
                    position: relative;
                    top: 46%;
                    font-size: 1.25vw;
                    border-radius: 1vh 1vh 0vh 0vh;                   
                    font-weight:800;                
                }
                & .match6-header { 
                    background-color:#f0f0f0;text-align: center;color:#000;
                    z-index: 30;
                    position: relative;
                    font-size: 1.25vw;
                    border-radius: 1vh 1vh 0vh 0vh;                   
                    font-weight:800;                
                }

                & .qround1 {
                    z-index: 25;
                    position: relative;
                    left:0%;
                    top:0%;
                    width:100%;
                    font-size: 1.5vw;
                    background: #f0f0f0;
                    border-radius: 0vh 0vw 1vh 1vw;
                    color: #000;
                    padding: 1vh;
                    align-items: center;  
                    display: grid;
                    grid-template-columns: 0.85fr 0.15fr; 
                    grid-template-rows: 1fr 1fr;                     
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                          
                }
                
                & .qround2 {
                    z-index: 25;
                    position: relative;
                    left:0%;
                    top:7.5%;
                    width:100%;
                    font-size: 1.5vw;
                    background: #f0f0f0;
                    border-radius: 0vh 0vw 1vh 1vw;
                    color: #000;
                    padding: 1vh;
                    align-items: center;  
                    display: grid;
                    grid-template-columns: 0.85fr 0.15fr; 
                    grid-template-rows: 1fr 1fr;                     
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                   
                }
                & .qwin-r2 {
                    z-index: 25;
                    position: relative;
                    left:0%;
                    top:0%;
                    width:100%;
                    font-size: 1.5vw;
                    background: #f0f0f0;
                    border-radius: 0vh 0vw 1vh 1vw;
                    color: #000;
                    padding: 1vh;
                    align-items: center;  
                    display: grid;
                    grid-template-columns: 0.85fr 0.15fr; 
                    grid-template-rows: 1fr 1fr;                     
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }                
                & .qlose-r1 {
                    z-index: 25;
                    position: relative;
                    left:0%;
                    top:36%;
                    width:100%;
                    font-size: 1.5vw;
                    background: #f0f0f0;
                    border-radius: 0vh 0vw 1vh 1vw;
                    color: #000;
                    padding: 1vh;
                    align-items: center;  
                    display: grid;
                    grid-template-columns: 0.85fr 0.15fr; 
                    grid-template-rows: 1fr 1fr;                     
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                    
                }
                & .qlose-r2 {
                    z-index: 25;
                    position: relative;
                    left:0%;
                    top:46%;
                    width:100%;
                    font-size: 1.5vw;
                    background: #f0f0f0;
                    border-radius: 0vh 0vw 1vh 1vw;
                    color: #000;
                    padding: 1vh;
                    align-items: center;                       
                    display: grid;
                    grid-template-columns: 1.7fr 0.3fr; 
                    grid-template-rows: 1fr 1fr; 
                    gap: 1.2vh 1.5vw; 
                    grid-template-areas: 
                        "Player1-Name Player1-Score"
                        "Player2-Name Player2-Score";                                                      
                }
                & .qGF {
                    z-index: 25;
                    position: relative;
                    right:0%;
                    top:0%;
                    width:100%;
                    background: #9bff99;
                    border-radius: 0vh 0vw 1vh 1vw;
                    font-size:1.5vw;
                    color: #000;
                    padding: 1vh;
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
                width:100%;
                height:100%;
                font-size: 1.1vw;
                background: rgba(255, 50, 238, 0);
                color: #fff;
                padding: 0.5vh 0.5vw;
                align-items: center;
                display: relative;
                } 
                 
                .WB { background-color:#010010;border:solid; border-color:#9bff99; width:100%; height:62.5%; top:0vh;position: absolute;border-radius: 1vh 1vh 1vh 1vh;margin: auto;}
                .WB-header{ background-color:#9bff99;text-align: center;color:#000;z-index: 30;width:100%;font-size: 1vw;font-weight:800;margin: auto;}
                .LB { background-color:#010010;border:solid; border-color:#9bff99; width:100%; height:34%; bottom:0vh;position: absolute;border-radius: 1vh 1vh 1vh 1vh;margin: auto;}
                .LB-header{ background-color:#9bff99;text-align: center;color:#000;z-index: 30;width:100%;font-size: 1vw;font-weight:800;margin: auto;}
                .WB-QF { border-color:f0f0f0; width:24%;height:96%;left:0.5%;position:absolute;border-radius: 1vh 1vh 1vh 1vh;margin: auto;}
                .WB-QF-footer{ background-color:#9bff99;text-align: center;color:#000;z-index: 30;width:60%;font-size: 0.8vw;font-weight:800;margin: auto;position:absolute; left:20%;bottom:0vh;border-radius: 1vh 1vh 0vh 0vh;}
                .WB-SF { border-color:f0f0f0; width:24%;height:96%;left:25.5%;position:absolute;border-radius: 1vh 1vh 1vh 1vh;margin: auto;}
                .WB-SF-footer{ background-color:#9bff99;text-align: center;color:#000;z-index: 30;width:60%;font-size: 0.8vw;font-weight:800;margin: auto;position:absolute; left:20%;bottom:0vh;border-radius: 1vh 1vh 0vh 0vh;}
                .WB-F { border-color:f0f0f0; width:24%;left:50.5%;height:96%;position:absolute;border-radius: 1vh 1vh 1vh 1vh;margin: auto;}
                .WB-F-footer{ background-color:#9bff99;text-align: center;color:#000;z-index: 30;width:100%;font-size: 1vw;font-weight:800;margin: auto;position:absolute; bottom:0vh;border-radius: 1vh 1vh 0vh 0vh;}
                .WB-GF { border-color:f0f0f0; width:24%;left:75.5%;height:96%;position:absolute;border-radius: 1vh 1vh 1vh 1vh;margin: auto;}
                .WB-GF-footer{ background-color:#9bff99;text-align: center;color:#000;z-index: 30;width:100%;font-size: 1vw;font-weight:800;margin: auto;position:absolute; bottom:0vh;border-radius: 1vh 1vh 0vh 0vh;}     
                .LB-R1 { border-color:f0f0f0;width:24%;height:92%;left:0.5%;position:absolute;border-radius: 1vh 1vh 1vh 1vh;margin: auto;}
                .LB-R2 {  border-color:f0f0f0;width:24%;height:92%;left:25.5%;position:absolute;border-radius: 1vh 1vh 1vh 1vh;margin: auto;}
                .LB-SF { border-color:f0f0f0;width:24%;left:50.5%;height:92%;position:absolute;border-radius: 1vh 1vh 1vh 1vh;margin: auto;}
                .LB-F {border-color:f0f0f0;width:24%;left:75.5%;height:92%;position:absolute;border-radius: 1vh 1vh 1vh 1vh;margin: auto;}
          

                        & .ko-wqf1 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 1.25vh auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                      
                        }     

                        & .ko-wqf2 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 1.25vh auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                   
                        }

                        & .ko-wqf3 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 1.25vh auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                   
                        }

                        & .ko-wqf4 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 1.25vh auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                   
                        }
                    }
                    & .ko-wsf1 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 6.75vh auto 12.25vh auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                     
                    }
                    & .ko-wsf2 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                    
                    }
                    & .ko-wf {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 46% auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                     
                    }
                    & .ko-gf {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 46% auto;
                            background: #9bff99;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                    
                    }                                                                
                }
                    & .ko-lqf1 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 1vh auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                   
                    }     

                    & .ko-lqf2 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 1vh auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                     
                    }

                    & .ko-lqf3 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 1vh auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                     
                    }

                    & .ko-lqf4 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 1vh auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                 
                    }

                    & .ko-lr3 {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 16.5% auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                    
                    }
                    & .ko-lf {
                            z-index: 25;                            
                            width:87.5%;
                            margin: 16.5% auto;
                            background: #f0f0f0;
                            border-radius: 0.75vh;
                            color: #000;
                            padding: 1vh 1vw;
                            align-items: center;                       
                            display: grid;
                            border:5.25vh;
                            border-color:#000;
                            grid-template-columns: 1.7fr 0.3fr; 
                            grid-template-rows: 1fr 1fr; 
                            gap: 1.2vh 1.5vw; 
                            grid-template-areas: 
                                "Player1-Name Player1-Score"
                                "Player2-Name Player2-Score";                                                     
                        }
            .Player1-Name { grid-area: Player1-Name; border-radius: 0.5vh; border: 0.4vh solid #000; padding-left:15px; background:#f0f0f0;height:3.25vh;}
            .Player1-Score { grid-area: Player1-Score; border-radius: 0.5vh; border: 0.4vh solid #000; text-align: center;background:#f0f0f0;height:100%;}
            .Player2-Name { grid-area: Player2-Name; border-radius: 0.5vh; border: 0.4vh solid #000; padding-left:15px;background:#f0f0f0;height:100%;}
            .Player2-Score { grid-area: Player2-Score; border-radius: 0.5vh; border: 0.4vh solid #000; text-align: center;background:#f0f0f0;height:100%;}
            .qualiLeftCol{grid-area: qualiLeftCol;border-radius: 0.5vh; border: 0 solid #fff;padding:1vw;height:100%;}
            .qualiMidCol{grid-area: qualiMidCol;border-radius: 0.5vh; border: 0 solid #fff;padding:1vw;height:77.5%;}
            .qualiRightCol{grid-area: qualiRightCol;border-radius: 0.5vh; border: 0 solid #fff;padding:1vw;height:25%;}                                

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