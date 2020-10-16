<template>
    <div class="screenCurrentlyPlaying">
        <header>
            <div class="user-data" v-if="player1Data">
                <div class="avatar" :style="'background-image: url(' + player1Data.avatar + ');'"></div>
                <div class="username">{{ player1Data.username }}</div>
            </div>
            <div class="score-data">
                <div class="score">{{ player1Score }} &dash; {{ player2Score }}</div>
                <div class="mode">Set {{ currentSet }}/{{ fullSet }}</div>
            </div>
            <div class="user-data" v-if="player2Data">
                <div class="avatar" :style="'background-image: url(' + player2Data.avatar + ');'"></div>
                <div class="username">{{ player2Data.username }}</div>
            </div>
        </header>
        <div class="screens">
            <div class="screen"><span>1</span></div>
            <div class="screen"><span>2</span></div>
        </div>
        <footer>
            <div class="song-data" v-if="songData">
                <div class="song-cover" v-if="songData.paths" :style="'background-image: url(' + songData.paths.cover + ');'"></div>
                <div class="song-metadata">
                    <div class="song-title">{{ songData.title }}</div>
                    <div class="song-subtitle">{{ songData.subtitle }}</div>
                    <div class="song-artist">{{ songData.artist }} • Charted by {{ songData.charter }}</div>
                </div>
            </div>
            <!-- <div class="difficulties">
                <div :class="songData.hasEasyDifficulty ? 'difficulty active' : 'difficulty'">E</div>
                <div :class="songData.hasNormalDifficulty ? 'difficulty active' : 'difficulty'">N</div>
                <div :class="songData.hasHardDifficulty ? 'difficulty active' : 'difficulty'">H</div>
                <div :class="songData.hasExtremeDifficulty ? 'difficulty active' : 'difficulty'">EX</div>
                <div :class="songData.hasXDDifficulty ? 'difficulty active' : 'difficulty'">XD</div>
            </div> -->
            <div class="get-it">
                <div class="text">Get this song on SpinSha.re!</div>
                <div class="link">spinsha.re/song/{{ songData.id }}</div>
            </div>
        </footer>
    </div>
</template>

<script>
    import {ipcRenderer} from "electron";

    import SSAPI from "../../modules/module.api.js";

    export default {
        name: 'ScreenInGame',
        data: function() {
            return {
                player1Id: 0,
                player2Id: 0,
                currentSet: 0,
                fullSet: 3,
                player1Score: 0,
                player2Score: 0,
                songId: 0,
                player1Data: {},
                player2Data: {},
                songData: {}
            }
        },
        mounted: function() {
            let ssapi = new SSAPI();

            ipcRenderer.on('update-playerData', (event, newData) => {
                if(this.$data.player1Id != newData.player1Id) {
                    ssapi.getUserDetail(newData.player1Id).then((data) => {
                        this.$data.player1Data = data.data;
                    });
                }
                if(this.$data.player2Id != newData.player2Id) {
                    ssapi.getUserDetail(newData.player2Id).then((data) => {
                        this.$data.player2Data = data.data;
                    });
                }
                if(this.$data.songId != newData.songId) {
                    ssapi.getSongDetail(newData.songId).then((data) => {
                        this.$data.songData = data.data;
                        console.log(data.data);
                    });
                }

                this.$data.player1Id = newData.player1Id;
                this.$data.player2Id = newData.player2Id;
                this.$data.currentSet = newData.currentSet;
                this.$data.fullSet = newData.fullSet;
                this.$data.player1Score = newData.player1Score;
                this.$data.player2Score = newData.player2Score;
                this.$data.songId = newData.songId;
            });
        },
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
            display: grid;
            grid-template-columns: 3fr 1fr 3fr;
            justify-items: center;
            align-items: center;

            & .user-data {
                display: grid;
                grid-gap: 2vh;
                justify-items: center;

                & .avatar {
                    width: 6vw;
                    height: 6vw;
                    border-radius: 100%;
                    background-size: cover;
                }
                & .username {
                    font-size: 1.5vw;
                }
            }
            & .score-data {
                text-align: center;

                & .score {
                    font-size: 3vw;
                    font-weight: bold;
                }
                & .mode {
                    font-size: 1.25vw;
                }
            }
        }
        
        & .screens {
            display: grid;
            grid-template-columns: 1fr 1fr;

            & .screen {
                position: relative;
                overflow: hidden;
                background: limegreen;
                height: 0;
                padding-top: 56.25%;
                transition: 2s ease all;

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
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr auto;
            padding: 0vw 4vw;
            margin-bottom: 4vw;

            & .song-data {
                display: grid;
                grid-template-columns: 7vw 1fr;
                grid-gap: 0.5vw;
                align-items: center;

                & .song-cover {
                    width: 6vw;
                    height: 6vw;
                    border-radius: 1.5vh;
                    background-size: cover;
                }
                & .song-metadata {
                    display: grid;
                    grid-gap: 0.25vw;

                    & .song-title {
                        font-size: 2vw;
                        font-weight: bold;
                    }
                    & .song-subtitle {
                        font-size: 1.666vw;
                        opacity: 0.6;
                    }
                    & .song-artist {
                        font-size: 1.3333vw;
                        opacity: 0.6;
                    }
                }
            }
            & .difficulties {
                display: flex;
                align-items: center;
                justify-content: center;

                & .difficulty {
                    background: #fff;
                    color: #000;
                    border-radius: 0.25vw;
                    font-weight: bold;
                    padding: 0.75vw 1.5vw;
                    font-size: 1.5vw;
                    margin-left: 0.5vw;

                    &:not(.active) {
                        opacity: 0.2;
                    }
                }
            }
            & .get-it {
                display: grid;
                text-align: right;
                grid-gap: 0.25vw;

                & .text {
                    font-size: 1.25vw;
                    opacity: 0.6;
                }
                & .link {
                    font-size: 1.85vw;
                }
            }
        }
    }
</style>
