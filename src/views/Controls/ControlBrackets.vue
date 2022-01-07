<template>
  <div class="controlBrackets">
    <Fab v-on:click.native="transition()" title="Transition" />

    <!-- <InputGroup title="Toornament Event ID">
      <input type="number" v-model="toornamentEventId" />
    </InputGroup>

    <InputGroup title="Toornament Stage ID">
      <input type="number" v-model="toornamentStageId" />
    </InputGroup>
    <InputGroup title="Top Left Text">
      <input type="string" v-model="topLeftText" placeholder="GROUP STAGE" />
    </InputGroup>
-->
    <InputGroup title="Phase">
      <select id="selectedPhase">
        <option value="1002204">Qualifiers</option>
        <option value="1002220">Challenger Playoffs</option>
        <option value="1002212">Elite Playoffs</option>
      </select>
    </InputGroup>
    
    <InputGroup title="Phase Group (Qualifiers Only)">
      <select id="selectedQualiGroup">
        <option value="0" v-on:click="updateData()">EXAMPLE</option>
        <option value="1581602" v-on:click="updateData()">(7) swagdude, Daquat, Abysmal Cosmos, AngryScootsman</option>
        <option value="1581599" v-on:click="updateData()">(4) Mapy, tetrachris, oproerling, CaliCalicko</option>
        <option value="1581592" v-on:click="updateData()">(1) TreXDer, Kwazi, haomakk, Avri</option>
        <option value="1581601" v-on:click="updateData()">(6) PnO_Mader, metalman20, Halflite, CarbonCarbon12</option>
        <option value="1581597" v-on:click="updateData()">(2) Ricki, GaviGuy, Franco, Drogin_dunlane</option>
        <option value="1581603" v-on:click="updateData()">(8) Konomi, Ballinbino, Cahobo, Nemo</option>
        <option value="1581600" v-on:click="updateData()">(5) Pick, Krauvando, Gamer97, FlyinPoulpus</option>
        <option value="1581598" v-on:click="updateData()">(3) Programmatic, Edge, Loosiano, Aexus</option>
      </select>
    </InputGroup>

    <button v-on:click="updateData()">Update</button>
  </div>
</template>

<script>
import { remote, ipcRenderer } from "electron";

`const fetch = require('node-fetch'); // assuming you install node-fetch`


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
      var e = document.getElementById("selectedPhase");
      var f = document.getElementById("selectedQualiGroup");
      var phaseValue = e.value;
      var GroupValue = f.value;

      console.log("[Controls] Update BracketsData");
      ipcRenderer.send("update-bracketsData", {
        phaseValue,
        GroupValue,
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
