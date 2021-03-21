<template>
  <div class="controlBrackets">
    <Fab v-on:click.native="transition()" title="Transition" />

    <InputGroup title="Toornament Event ID">
      <input type="number" v-model="toornamentEventId" />
    </InputGroup>

    <InputGroup title="Toornament Stage ID">
      <input type="number" v-model="toornamentStageId" />
    </InputGroup>
    <InputGroup title="Top Left Text">
      <input type="string" v-model="topLeftText" placeholder="GROUP STAGE" />
    </InputGroup>

    <button v-on:click="updateData()">Update</button>
  </div>
</template>

<script>
import { remote, ipcRenderer } from "electron";

import Fab from "@/components/Controls/Fab.vue";
import InputGroup from "@/components/Controls/InputGroup.vue";

export default {
  name: "ControlBrackets",
  components: {
    Fab,
    InputGroup,
  },
  data: function () {
    return {
      toornamentEventId: 0,
      toornamentStageId: 0,
      topLeftText: "",
    };
  },
  mounted: function () {},
  methods: {
    transition: function () {
      ipcRenderer.send("change-state", "Brackets");
    },
    updateData: function () {
      console.log("[Controls] Update BracketsData");
      ipcRenderer.send("update-bracketsData", {
        toornamentEventId: this.$data.toornamentEventId,
        toornamentStageId: this.$data.toornamentStageId,
        topLeftText: this.$data.topLeftText,
      });
    },
  },
};
</script>

<style scoped lang="less">
.controlBrackets {
  padding: 5px 20px;
}
</style>
