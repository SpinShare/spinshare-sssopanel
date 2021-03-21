<template>
  <div class="controlInGame">
    <Fab v-on:click.native="transition()" title="Transition" />

    <div class="score-split">
      <InputGroup title="Player 1 Score">
        <input type="number" v-model="player1Score" placeholder="Score" />
      </InputGroup>

      <InputGroup title="Player 2 Score">
        <input type="number" v-model="player2Score" placeholder="Score" />
      </InputGroup>
    </div>

    <InputGroup title="Current Set">
      <input type="number" v-model="currentSet" />
    </InputGroup>

    <InputGroup title="Song ID">
      <input type="number" v-model="songId" />
    </InputGroup>

    <button v-on:click="updateData()">Update</button>

    <InputGroup title="Music Output" twoInputs="true">
      <button
        :disabled="useFirstPlayerAudio == 1"
        v-on:click="changePlayerAudio(1)"
      >
        Set to Player 1
      </button>
      <button
        :disabled="useFirstPlayerAudio == 2"
        v-on:click="changePlayerAudio(2)"
      >
        Set to Player 2
      </button>
    </InputGroup>

    <InputGroup title="Streams" twoInputs="true">
      <button v-on:click="startStreams()">Start Streams</button>
      <button v-on:click="stopStreams()">Stop Streams</button>
    </InputGroup>
  </div>
</template>

<script>
import { remote, ipcRenderer } from "electron";

import Fab from "@/components/Controls/Fab.vue";
import InputGroup from "@/components/Controls/InputGroup.vue";

export default {
  name: "ControlInGame",
  components: {
    Fab,
    InputGroup,
  },
  data: function () {
    return {
      player1Id: 0,
      player2Id: 0,
      player1Key: "",
      player2Key: "",
      currentSet: 0,
      fullSet: 3,
      player1Score: 0,
      player2Score: 0,
      player1Circles: 0,
      player2Circles: 0,
      score1: "",
      score2: "",
      songId: 0,
      useFirstPlayerAudio: 0,
    };
  },
  mounted: function () {
    ipcRenderer.on("update-playerData", (event, newData) => {
      this.$data.player1Id = newData.player1Id;
      this.$data.player2Id = newData.player2Id;
      this.$data.player1Key = newData.player1Key;
      this.$data.player2Key = newData.player2Key;
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
    ipcRenderer.send("get-playerData", {});
  },
  methods: {
    transition: () => {
      ipcRenderer.send("change-state", "InGame");
    },
    updateData: function () {
      console.log("[Controls] Update PlayerData");
      ipcRenderer.send("update-playerData", {
        player1Id: this.$data.player1Id,
        player2Id: this.$data.player2Id,
        player1Key: this.$data.player1Key,
        player2Key: this.$data.player2Key,
        score1: this.$data.score1,
        score2: this.$data.score2,
        currentSet: this.$data.currentSet,
        fullSet: this.$data.fullSet,
        player1Score: this.$data.player1Score,
        player2Score: this.$data.player2Score,
        player1Circles:
          "○".repeat(
            (parseInt(this.$data.fullSet) + parseInt(1)) / parseInt(2) -
              parseInt(this.$data.player1Score)
          ) + "●".repeat(this.$data.player1Score),
        player2Circles:
          "●".repeat(this.$data.player2Score) +
          "○".repeat(
            (parseInt(this.$data.fullSet) + parseInt(1)) / parseInt(2) -
              parseInt(this.$data.player2Score)
          ),
        songId: this.$data.songId,
      });
    },
    changePlayerAudio: function (newState) {
      console.log("[Controls] ChangePlayerAudio");

      this.$data.useFirstPlayerAudio = newState;

      ipcRenderer.send("change-playerAudio", {
        useFirstPlayerAudio: this.$data.useFirstPlayerAudio,
      });
    },
    startStreams: function () {
      console.log("[Controls] StartStreams");
      ipcRenderer.send("start-streams");
    },
    stopStreams: function () {
      console.log("[Controls] StopStreams");
      ipcRenderer.send("stop-streams");
    },
  },
  beforeDestroy: function () {
    ipcRenderer.removeListener("update-playerData");
    ipcRenderer.removeListener("start-streams");
    ipcRenderer.removeListener("stop-streams");
    ipcRenderer.removeListener("change-playerAudio");
  },
};
</script>

<style scoped lang="less">
.controlInGame {
  padding: 20px;
}
</style>
