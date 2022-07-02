<template>
  <div class="controlBrackets">
    <Fab v-on:click.native="transition()" title="Transition" />

    <InputGroup title="Toornament Event ID">
      <input type="number" v-model="toornamentEventId" />
    </InputGroup>

    <InputGroup title="Toornament Stage ID">
      <input type="number" v-model="toornamentStageId" />
    </InputGroup>
    <InputGroup title="Phase Group ID">
      <input type="number" v-model="phaseID" placeholder="PhaseGroupID" />
    </InputGroup>

    <button v-on:click="updateData()">Update</button>
  </div>
</template>

<script>
import { remote, ipcRenderer } from "electron";

import Fab from "@/components/Controls/Fab.vue";
import InputGroup from "@/components/Controls/InputGroup.vue";

async function load() {
    let url = 'https://cors-anywhere.herokuapp.com/https://api.start.gg/phase_group/1581602?expand[]=sets&expand[]=seeds';
    let headers = new Headers();

    let obj = await (await (await fetch(url))).json();
    console.log(obj);
}

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
      phaseID: 0,
    };
  },
  mounted: function () {},
  methods: {
    callStartggAPI: function (pg){
      'use strict';
      var request = require('request');
      var url = 'https://api.start.gg/phase_group/1581602?expand[]=sets&expand[]=seeds';
      
      request.get({
          url: url,
          json: true,
          headers: {'User-Agent': 'request'}
        }, (err, res, data) => {
          if (err) {
            console.log('Error:', err);
          } else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode);
          } else {
            // data is already parsed as JSON:
            console.log(data.html_url);
          }
      });
      
      /*const https = require('https');

      const options = {
        hostname: 'api.start.gg',
        port: 443,
        path: '/phase_group/'& pg &'?expand[]=sets&expand[]=seeds',
        method: 'GET',
      };
      
      const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
        let body = '';

        res.on('data', function(chunk){
          body += chunk;
        });

        res.on('end', function(){
          let jsonResponse = JSON.parse(body);
          console.log("Response:", jsonResponse);
        });
      });

      req.on('error', error => {
        console.error(error);
      });

      req.end();    */  

      /*fetch("https://api.start.gg",{
        "options": {
          "Access-Control-Allow-Origin": "*",
        },
        "headers": {
          "authority":"api.start.gg",
          "method":"GET",
          "path":"/phase_group/"& pg &"?expand[]=sets&expand[]=seeds",
          "scheme":"https",
          "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*//*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-encoding":"gzip, deflate, br",
          "accept-language":"en-GB,en-US;q=0.9,en;q=0.8",
          "cache-control":"no-cache",
          }
      })
      .then(response => { 
          if(response.ok){
            console.log(response);
              //return response
              return response.json()    
          } else{
              alert("Server returned " + response.status + " : " + response.statusText);
          }                
      })
      .then(response => {
          this.result = response.body; 
      })
      .catch(err => {
          console.log(err);
      });*/
    },

    transition: function () {
      ipcRenderer.send("change-state", "Brackets");
    },


    updateData: function () {
      console.log("[Controls] Update BracketsData");
      load();
      /*//phaseID = this.$data.phaseID;
      this.callStartggAPI(this.$data.phaseID)
      console.log("[Controls] Get Bracket Details from Start.GG")

      ipcRenderer.send("update-bracketsData", {
        toornamentEventId: this.$data.toornamentEventId,
        toornamentStageId: this.$data.toornamentStageId,
      });*/
    },
  },
};
</script>

<style scoped lang="less">
.controlBrackets {
  padding: 5px 20px;
}
</style>
