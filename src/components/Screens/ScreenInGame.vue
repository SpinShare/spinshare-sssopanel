<template>
  <div class="screenCurrentlyPlaying">
    <div class="blobs">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M48.5,-16.2C55.2,4.7,47.5,29.8,30.1,42.7C12.7,55.6,-14.4,56.4,-29.9,44.4C-45.5,32.3,-49.4,7.5,-42.5,-13.7C-35.6,-35,-17.8,-52.6,1.6,-53.1C20.9,-53.6,41.9,-37,48.5,-16.2Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M54.5,-8.9C62.7,7.5,55.9,37.6,37.1,51.4C18.2,65.2,-12.8,62.7,-31.6,48C-50.3,33.3,-56.9,6.3,-49.6,-8.9C-42.3,-24.1,-21.2,-27.6,1,-27.9C23.1,-28.2,46.3,-25.4,54.5,-8.9Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M36,-3.7C44.9,15.8,49.3,44.8,35.4,56.7C21.6,68.6,-10.4,63.5,-29.1,48C-47.8,32.6,-53.3,6.7,-46.2,-10.2C-39.1,-27.1,-19.6,-35.1,-3,-34.1C13.5,-33.2,27.1,-23.2,36,-3.7Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.7,-4.8C33.8,16.6,41.2,41.7,28.2,54.9C15.3,68.2,-18.1,69.4,-36.6,54.9C-55.1,40.4,-58.9,10,-50.3,-12C-41.8,-34,-20.9,-47.5,-6,-45.6C8.8,-43.6,17.6,-26.1,25.7,-4.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M33.2,-15.6C36.9,0.7,29.6,15.7,14.8,28.4C-0.1,41.1,-22.5,51.5,-34.9,43.6C-47.2,35.6,-49.5,9.4,-42,-12C-34.5,-33.4,-17.3,-50,-1.3,-49.6C14.7,-49.2,29.5,-31.8,33.2,-15.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M69.9,-20.4C78.8,4.7,66.1,39.1,44.9,52.2C23.8,65.3,-5.8,57,-23.6,41.9C-41.3,26.8,-47.1,4.8,-41.2,-16.2C-35.3,-37.1,-17.6,-57,6.4,-59.1C30.5,-61.2,61,-45.5,69.9,-20.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M72,-22.7C81.3,5.3,68.7,41.2,43.9,58.9C19.1,76.5,-17.9,76,-33.9,60.9C-50,45.9,-45.1,16.4,-36,-11.4C-26.9,-39.2,-13.4,-65.3,8.9,-68.2C31.3,-71.1,62.7,-50.8,72,-22.7Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M52.8,-18.5C60,5.2,51.8,32.6,34.6,44.3C17.4,56,-8.8,52,-24.2,39.4C-39.7,26.7,-44.5,5.3,-38.7,-16.4C-32.8,-38.1,-16.4,-60.2,3.2,-61.3C22.8,-62.3,45.5,-42.2,52.8,-18.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M35.4,-7.2C42.9,11.7,44,36.9,29.7,49.3C15.4,61.7,-14.5,61.3,-30.1,48.3C-45.7,35.3,-47.2,9.8,-39.8,-8.9C-32.4,-27.5,-16.2,-39.1,-1.1,-38.8C13.9,-38.4,27.9,-26,35.4,-7.2Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M62.3,-23.6C69.7,2.5,57,31.8,37.2,44.7C17.4,57.6,-9.7,54,-28.9,40C-48.1,26,-59.4,1.5,-53.3,-22.8C-47.2,-47.1,-23.6,-71.3,1.9,-71.9C27.4,-72.5,54.9,-49.6,62.3,-23.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
    <header>
      <div class="user-data" v-if="player1Data">
        <div class="avatar" :style="'background-image: url(' + player1Data.avatar + ');'"></div>
        <div class="username">{{ player1Data.username }}</div>
        <div class="pronouns" v-if="player1Data.pronouns != '' && player1Data.pronouns != null">
          {{ player1Data.pronouns }}
        </div>
      </div>
      <div class="score-data">
        <div class="score">{{ player1Score }} &dash; {{ player2Score }}</div>
        <div class="mode">Set {{ currentSet }}/{{ fullSet }}</div>
        <div class="circles">{{ player1Circles }} / {{ player2Circles }}</div>
      </div>
      <div class="user-data" v-if="player2Data">
        <div class="avatar" :style="'background-image: url(' + player2Data.avatar + ');'"></div>
        <div class="username">{{ player2Data.username }}</div>
        <div class="pronouns" v-if="player2Data.pronouns != '' && player2Data.pronouns != null">
          {{ player2Data.pronouns }}
        </div>
      </div>
    </header>
    <div class="screens">
      <div class="screen">
        <div :class="useFirstPlayerAudio == 1 ? 'audio-output active' : 'audio-output'">
          <span class="mdi mdi-volume-high"></span>
        </div>
        <iframe class="score1" v-if="this.$data.score1 != ''" :src="'http://questboard.xyz/SpinShare/api/players/singleformatright.php/' + this.$data.score1" frameborder="0" height="200%" width="100%" scrolling="no"></iframe>
        <div class="video">
          <div id="player1Screen"></div>
        </div>
      </div>
      <div class="screen">
        <div :class="useFirstPlayerAudio == 2 ? 'audio-output active' : 'audio-output'">
          <span class="mdi mdi-volume-high"></span>
        </div>
        <iframe class="score2" v-if="this.$data.score2 != ''" :src="'http://questboard.xyz/SpinShare/api/players/singleformatleft.php/' + this.$data.score2" frameborder="0" height="200%" width="100%" scrolling="no"></iframe>
        <div class="video">
          <div id="player2Screen"></div>
        </div>
      </div>
    </div>
    <footer>
      <div class="song-data" v-if="songData">
        <div class="song-cover" v-if="songData.paths" :style="'background-image: url(' + songData.paths.cover + ');'"></div>
        <div class="song-metadata">
          <div class="song-title">{{ songData.title }}</div>
          <div class="song-subtitle">{{ songData.subtitle }}</div>
          <div class="song-artist">
            {{ songData.artist }} • Charted by {{ songData.charter }}
          </div>
        </div>
      </div>
      <div class="get-it">
        <div class="text">Get this song on SpinSha.re!</div>
        <div class="link">spinsha.re/song/{{ songData.id }}</div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

import SSAPI from "../../modules/module.api.js";

export default {
  name: "ScreenInGame",
  data: function () {
    return {
      player1Stream: null,
      player2Stream: null,
      player1Id: 0,
      player2Id: 0,
      player1Key: "",
      player2Key: "",
      player1Region: "",
      player2Region: "",
      currentSet: 0,
      fullSet: 3,
      player1Score: 0,
      player2Score: 0,
      player1Circles: 0,
      player2Circles: 0,
      songId: 0,
      player1Data: {},
      player2Data: {},
      songData: {},
      useFirstPlayerAudio: 0,
      score1: "",
      score2: "",
    };
  },
  mounted: function () {
    let ssapi = new SSAPI();

    ipcRenderer.on("update-playerData", (event, newData) => {
      if (this.$data.player1Id != newData.player1Id) {
        ssapi.getUserDetail(newData.player1Id).then((data) => {
          this.$data.player1Data = data.data;
        });
      }
      if (this.$data.player2Id != newData.player2Id) {
        ssapi.getUserDetail(newData.player2Id).then((data) => {
          this.$data.player2Data = data.data;
        });
      }
      if (this.$data.songId != newData.songId) {
        ssapi.getSongDetail(newData.songId).then((data) => {
          this.$data.songData = data.data;
          console.log(data.data);
        });
      }

      this.$data.player1Id = newData.player1Id;
      this.$data.player2Id = newData.player2Id;
      this.$data.player1Key = newData.player1Key;
      this.$data.player2Key = newData.player2Key;
      this.$data.player1Region = newData.player1Region;
      this.$data.player2Region = newData.player2Region;
      this.$data.score1 = newData.score1;
      this.$data.score2 = newData.score2;
      this.$data.currentSet = newData.currentSet;
      this.$data.fullSet = newData.fullSet;
      this.$data.player1Score = newData.player1Score;
      this.$data.player2Score = newData.player2Score;
      this.$data.player1Circles = newData.player1Circles;
      this.$data.player2Circles = newData.player2Circles;
      this.$data.songId = newData.songId;
    });
    
    ipcRenderer.on("start-streams", () => {
      console.log("[Screen] StartStreams");

      // Load streams
      let player1Url = "wss://" + this.$data.player1Region + ".srtmp.tk:3334/app/" + this.$data.player1Key;
      this.$data.player1Stream = window.OvenPlayer.create("player1Screen", {
          autoStart: true,
          controls: false,
          showBigPlayButton: false,
          volume: 0,
          sources: [
              {
                  type: "webrtc",
                  file: player1Url,
                  label: "MAIN STREAM",
              },
          ]
      });
      let player2Url = "wss://" + this.$data.player2Region + ".srtmp.tk:3334/app/" + this.$data.player2Key;
      this.$data.player2Stream = window.OvenPlayer.create("player2Screen", {
          autoStart: true,
          controls: false,
          showBigPlayButton: false,
          volume: 0,
          sources: [
              {
                  type: "webrtc",
                  file: player2Url,
                  label: "MAIN STREAM",
              },
          ]
      });
      
      // Load stream2
      let stream2 = "https://rtmp.ellite.dev/hls/" + this.$data.player2Key + ".m3u8";
      // let stream2 = "ACTUAL STREAM URL" + this.$data.player2Key;
    });

    ipcRenderer.on("stop-streams", () => {
      console.log("[Screen] StopStreams");
      // Pause Streams
      this.$data.player1Stream.remove();
      this.$data.player2Stream.remove();
    });

    ipcRenderer.on("change-playerAudio", (event, newState) => {
      this.$data.useFirstPlayerAudio = newState.useFirstPlayerAudio;

      if(newState.useFirstPlayerAudio == 0) {
        // Mute Both
        this.$data.player1Stream.setVolume(0);
        this.$data.player2Stream.setVolume(0);
      } else if(newState.useFirstPlayerAudio == 1) {
        // Mute 2
        this.$data.player1Stream.setVolume(100);
        this.$data.player2Stream.setVolume(0);
      } else {
        // Mute 1
        this.$data.player1Stream.setVolume(0);
        this.$data.player2Stream.setVolume(100);
      }
    });
  },
  beforeDestroy: function() {
      ipcRenderer.send("stop-streams");
      ipcRenderer.removeListener('update-playerData');
      ipcRenderer.removeListener('start-streams');
      ipcRenderer.removeListener('stop-streams');
      ipcRenderer.removeListener('change-playerAudio');
  },
};
</script>

<style scoped lang="less">
.screenCurrentlyPlaying {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 10;
  display: grid;
  grid-template-rows: 1fr auto 1fr;

  header {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    justify-items: center;
    align-items: center;
    z-index: 10;

    & .user-data {
      display: grid;
      grid-gap: 2vh;
      justify-items: center;

      & .avatar {
        width: 6vw;
        height: 6vw;
        border-radius: 100%;
        background-size: cover;
        background-position: center;
      }
      & .username {
        font-size: 1.5vw;
        line-height: 1em;
      }
      & .pronouns {
        margin-top: -0.5vw;
        font-size: 0.75vw;
        font-weight: bold;
        background: #fff;
        color: #000;
        padding: 0.25vw 1vw;
        border-radius: 50vw;
      }
    }
    & .score-data {
      text-align: center;
      
      & .circles {
        font-size: 2vw;
        font-weight: bold;
      }
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
    z-index: 10;

    & .screen {
      position: relative;
      overflow: hidden;
      height: 0;
      padding-top: 56.25%;
      transition: 2s ease all;

      & .audio-output {
        position: absolute;
        background: #fff;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5vw;
        width: 3vw;
        height: 4vh;
        top: 0vh;
        left: 0vw;
        transform: translateX(-3.75vw);
        transition: 0.4s ease-in-out transform;
        z-index: 1337;

        & span {
          margin-left: 0.25vw;
        }

        &:after {
          content: "";
          background: #fff;
          display: block;
          position: absolute;
          right: -0.5vw;
          width: 1vw;
          height: 4vh;
          transform: skewX(-10deg);
        }

        &.active {
          transform: translateX(0vw);
        }
      }

      & .video {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
      }

      & .score1 {
        z-index: 1336;
        position: absolute;
        top: -66.5%;
        bottom: 0px;
        left: 36%;
        transform: scale(0.26);
      }
      & .score2 {
        z-index: 1336;
        position: absolute;
        top: -66.5%;
        bottom: 0px;
        left: -36%;
        transform: scale(0.26);
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
    z-index: 10;

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

  & .blobs {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    z-index: 0;

    & svg {
      position: absolute;
      width: 3vw;
      height: 3vw;
      animation: blobAnimSmall 10s infinite alternate linear;
      transition: 2s ease all;

      &:nth-child(2n) {
        width: 6vw;
        height: 6vw;
        animation: blobAnimMedium 15s infinite alternate linear;
      }
      &:nth-child(3n) {
        width: 12vw;
        height: 12vw;
        animation: blobAnimBig 20s infinite alternate linear;
      }

      // Bottom Center
      &:nth-child(1) {
        top: 78vh;
        left: 58vw;
        animation-delay: -1s;
      }
      &:nth-child(2) {
        top: 78vh;
        left: 45vw;
        animation-delay: -2s;
      }
      &:nth-child(3) {
        top: 80vh;
        left: 50vw;
        animation-delay: -3s;
      }
      // Top Center
      &:nth-child(4) {
        top: 3vh;
        left: 37vw;
        animation-delay: -4s;
      }
      &:nth-child(5) {
        top: 14vh;
        left: 32vw;
        animation-delay: -5s;
      }
      &:nth-child(6) {
        top: 10vh;
        left: 55vw;
        animation-delay: -6s;
      }
      // Top Left
      &:nth-child(7) {
        top: 4vh;
        left: 3vw;
        animation-delay: -7s;
      }
      &:nth-child(8) {
        top: 13vh;
        left: 6vw;
        animation-delay: -8s;
      }
      // Top Right
      &:nth-child(9) {
        top: 4vh;
        left: 88vw;
        animation-delay: -9s;
      }
      &:nth-child(10) {
        top: 2vh;
        left: 85vw;
        animation-delay: -10s;
      }
    }
  }
}

@keyframes blobAnimSmall {
  0% {
    transform: translate(0.5vw, 0vh);
  }
  25% {
    transform: translate(0.5vw, -0.5vh) rotate(25deg);
  }
  50% {
    transform: translate(-0.5vw, 0vh) rotate(50deg);
  }
  75% {
    transform: translate(0.5vw, 0.5vh) rotate(75deg);
  }
  100% {
    transform: translate(0.5vw, 0vh) rotate(100deg);
  }
}

@keyframes blobAnimMedium {
  0% {
    transform: translate(0.5vw, 0vh);
  }
  25% {
    transform: translate(0.5vw, -0.5vh) rotate(-25deg);
  }
  50% {
    transform: translate(-0.5vw, 0vh) rotate(-50deg);
  }
  75% {
    transform: translate(0.5vw, 0.5vh) rotate(-75deg);
  }
  100% {
    transform: translate(0.5vw, 0vh) rotate(-100deg);
  }
}

@keyframes blobAnimBig {
  0% {
    transform: translate(0.5vw, -0.5vh);
  }
  25% {
    transform: translate(-0.5vw, 0vh) rotate(25deg);
  }
  50% {
    transform: translate(0.5vw, 0.5vh) rotate(50deg);
  }
  75% {
    transform: translate(0.5vw, 0vh rotate(75deg));
  }
  100% {
    transform: translate(0.5vw, -0.5vh) rotate(100deg);
  }
}
</style>
