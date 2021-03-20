<template>
  <section class="section-controls">
    <Appbar :title="getTitle($route.name)">
      <router-link
        :to="{ name: 'ControlSettings' }"
        v-if="$route.name == 'ControlMenu'"
        v-tooltip.left="'Settings'"
        ><span class="mdi mdi-cog"></span
      ></router-link>
      <router-link
        :to="{ name: 'ControlMenu' }"
        v-if="$route.name != 'ControlMenu'"
        v-tooltip.left="'Menu'"
        ><span class="mdi mdi-view-carousel"></span
      ></router-link>
    </Appbar>

    <router-view />

    <Livebar :state="screenState" />
  </section>
</template>

<script>
import { remote, ipcRenderer } from "electron";

import Appbar from "@/components/Controls/Appbar.vue";
import Livebar from "@/components/Controls/Livebar.vue";

const ScreenState = Object.freeze({
  Testing: "Testing",
  Countdown: "Countdown",
  Brackets: "Brackets",
  BeforeMatch: "BeforeMatch",
  BeforeSong: "BeforeSong",
  InGame: "InGame",
  Commentators2: "Commentators2",
  Commentators4: "Commentators4",
  StreamEnd: "StreamEnd",
  TournamentEnd: "TournamentEnd",
});

export default {
  name: "Controls",
  components: {
    Appbar,
    Livebar,
  },
  data: function () {
    return {
      currentRoute: this.$route.params.id,
      screenState: ScreenState.Testing,
      player1ID: 0,
      player2ID: 0,
      player1Score: 0,
      player2Score: 0,
      player1Circles: 0,
      player2Circles: 0,
      songId: 0,
    };
  },
  mounted: function () {
    console.log("[Controls] Ready.");

    ipcRenderer.on("change-state", (event, newState) => {
      console.log("[Controls] ChangeState -> " + newState);
      this.$data.screenState = ScreenState[newState];
    });
  },
  methods: {
    changeState: function (newState) {
      ipcRenderer.send("change-state", newState);
    },
    changeSong: function () {
      console.log("[Controls] ChangeSong -> " + this.$data.songId);
      ipcRenderer.send("change-song", this.$data.songId);
    },
    getTitle: function (routeName) {
      switch (routeName) {
        case "ControlMenu":
          return "Menu";
          break;
        case "ControlSettings":
          return "Settings";
          break;
        case "ControlTesting":
          return "Testing";
          break;
        case "ControlCountdown":
          return "Countdown";
          break;
        case "ControlBrackets":
          return "Brackets";
          break;
        case "ControlInGame":
          return "InGame";
          break;
        case "ControlCommentators2":
          return "Commentators (Logo)";
          break;
        case "ControlCommentators4":
          return "Commentators (Discord)";
          break;
        case "ControlStreamEnd":
          return "End of Stream";
          break;
        case "ControlTournamentEnd":
          return "End of Tournament";
          break;
        default:
          return routeName;
          break;
      }
    },
  },
  beforeDestroy: function () {
    ipcRenderer.removeListener("change-state");
  },
};
</script>

<style scoped lang="less">
.section-controls {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #121212;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>