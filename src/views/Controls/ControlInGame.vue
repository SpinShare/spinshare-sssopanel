<template>
  <div class="controlInGame">
    <Fab
      v-on:click.native="transition(), changePlayerAudio(true)"
      title="Transition"
    />

    <div class="score-split">
      <div>
          <InputGroup title="Player 1 Data" twoInputs="true">
          <!-- I have no clue how or what v-model is, so i just uh, put it there? -Ellie -->
            <input type="number" v-model="player1Score" placeholder="Score" />
            <input type="text" v-model="player1Key" placeholder="Key" />
          </InputGroup>
      </div>

      <InputGroup title="Player 2 Score" twoInputs="true">
        <input type="number" v-model="player2Score" placeholder="Score"/>
        <input type="text" v-model="player2Key" placeholder="Key" />
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
        :disabled="useFirstPlayerAudio"
        v-on:click="changePlayerAudio(true)"
      >
        Set to Player 1
      </button>
      <button
        :disabled="!useFirstPlayerAudio"
        v-on:click="changePlayerAudio(false)"
      >
        Set to Player 2
      </button>
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
      currentSet: 0,
      fullSet: 3,
      player1Score: 0,
      player2Score: 0,
      songId: 0,
      useFirstPlayerAudio: true,
    };
  },
  mounted: function () {
    ipcRenderer.on("update-playerData", (event, newData) => {
      this.$data.player1Id = newData.player1Id;
      this.$data.player2Id = newData.player2Id;
      this.$data.currentSet = newData.currentSet;
      this.$data.fullSet = newData.fullSet;
      this.$data.player1Score = newData.player1Score;
      this.$data.player2Score = newData.player2Score;
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
        currentSet: this.$data.currentSet,
        fullSet: this.$data.fullSet,
        player1Score: this.$data.player1Score,
        player2Score: this.$data.player2Score,
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
  },
};
</script>

<style scoped lang="less">
.controlInGame {
  padding: 20px;
}
</style>
