<template>
    <div class="controlBrackets">
        <Fab v-on:click.native="transition()" title="Transition" />

        <!---<InputGroup title="Toornament Event ID">
      <input type="number" v-model="toornamentEventId" />
    </InputGroup>

    <InputGroup title="Toornament Stage ID">
      <input type="number" v-model="toornamentStageId" />
    </InputGroup>-->
        <InputGroup title="Bracket Selection">
            <select v-model="bracketSel" @change="onChange($event)">
                <option value="2079897">QUALIFIERS │ POOL 1</option>
                <option value="2079898">QUALIFIERS │ POOL 2</option>
                <option value="2079899">QUALIFIERS │ POOL 3</option>
                <option value="2079900">QUALIFIERS │ POOL 4</option>
                <option value="2079901">QUALIFIERS │ POOL 5</option>
                <option value="2079902">QUALIFIERS │ POOL 6</option>
                <option value="2079903">QUALIFIERS │ POOL 7</option>
                <option value="2079904">QUALIFIERS │ POOL 8</option>
                <option value="2079906">CHALLENGER BRACKET</option>
                <option value="2079905">ELITE BRACKET</option>
                <option value="1932030">TEST │ QUALI</option>
                <option value="1932036">TEST │ KNOCKOUT</option>
            </select>
            <button v-on:click="updateData()">Update</button>
        </InputGroup>


        <!--- <InputGroup title="Starting Grand Final in-bracket: Light it up.">
        <button v-on:click="gfTheme = true;">Change Colour</button>
    </InputGroup>-->

    </div>
    </template>

    <script>
    import { remote, ipcRenderer } from "electron";

    import Fab from "@/components/Controls/Fab.vue";
    import InputGroup from "@/components/Controls/InputGroup.vue";

    var obj;
    let groupSel;

    var bracket = [];
    let bracketName;
    var elite = 0;
    var bracketReset = 0;
    var updating = 0;

    async function load() {
      //1581592 - Test group
        let url = 'https://cors-anywhere.herokuapp.com/api.start.gg/phase_group/'+groupSel+'?expand[]=sets&expand[]=seeds';    //MUST GO TO https://cors-anywhere.herokuapp.com AND
        //let url = 'https://cors-anywhere.herokuapp.com/api.start.gg/phase_group/1761349?expand[]=sets&expand[]=seeds';
        let headers = new Headers();                                                                                      //REQUEST TEMP ACCESS - NEED AN ALTERNATIVE IF POSSIBLE
        obj = await (await (await fetch(url))).json();
        console.log(obj);

        const playerLookup = {      //Lookup table for players, currently retrieved manually for the event
            /*Summer 2022
            10327601: "snaphap",
            10334649: "Dragojent",
            10345653: "sodapants",
            10327637: "jif",
            10372604: "Pick",
            10329431: "Aetos",
            10500255: "NickAzn",
            10327917: "metalman20",
            10355616: "Mapy",
            10362779: "Kisshunter",
            10327620: "Edge",
            10332078: "Jammy Dodger",
            10327886: "Ricki",
            10386216: "Rickfernello",
            10344473: "Avri",
            10372160: "Gamer97",
            10351164: "TreXDer",
            10362387: "echeerie",
            10331595: "3Stans",
            10330714: "Theo",
            10378375: "Konomi",
            10342106: "Xandy",
            10347137: "Loosiano",
            10330626: "DFeth",
            10332821: "GaviGuy",
            10337809: "Drogin_dunlane",
            10405507: "TheWay123",
            10448096: "Abysmalcosmos",
            10327607: "Programmatic",
            10348113: "Primis Rulz",
            10403793: "Aexus",
            10364758: "CursedElectric",

          */
            // Winter 2023
            11894502: "Aetos",
            11894191: "Programmatic",
            11894196: "metalman20",
            11894222: "Joy",
            11894333: "TreXDer",
            11894370: "Jammy Dodger",
            11894506: "Ballinbino",
            11894540: "PnO_Mader",
            11895731: "jif",
            11896072: "CarbonCarbon12",
            11896488: "Aexus",
            11896537: "snaphap",
            11900131: "Theo",
            11901857: "Kwazi",
            11903993: "LuminaryCat",
            11904997: "AbysmalCosmos",
            11907681: "DFeth",
            11910634: "GaviGuy",
            11913354: "3Stans",
            11918214: "Kosmos",
            11918932: "LunarMoron",
            11920571: "SR_유민",
            11923070: "axwq",
            11927438: "Lava",
            11929259: "smb",
            //11934439: "Mapy", - Correct on StartGG
            11934439: "Gavi Guy",
            11935781: "Gamer97",
            11935919: "Edge",
            11938698: "Farshan",
            11939465: "Kaszabi",
            11954285: "Vodcat",
            11959292: "sodapants",
            12032065: "Drogin_dunlane",
            12032066: "Loosiano",


            // Summer 2023
            13203278: "snaphap",
            13207211: "TreXDer",
            13221863: "Aexus",
            13244881: "DFeth",
            13270319: "Ricki",
            13204689: "GaviGuy",
            13207148: "LuminaryCat",
            13206077: "Theo",
            13265454: "Loosiano",
            13204049: "LunarMoron",
            13220414: "Kwazi",
            13217645: "Farsan Baloo",
            13244578: "3Stans",
            13269554: "jif",
            13220602: "AllPoland",
            13220968: "Negative",
            13205381: "Minnie",
            13270475: "Edge",
            13276190: "Ballinbino",
            13203236: "metalman20",
            13248466: "SR_유민",
            13216573: "Abysmal Cosmos",
            13203512: "Khromatical",
            13221864: "Joy",
            13203476: "HalloweenBaby",
            13229301: "eyelur",
            13204911: "Velvet-.",
            13239220: "Primis Rulz",
            13248461: "홍토 Hongto",
            13215072: "Axol",
            13217802: "SkaryBoi",
            13237200: "Fulmi",
        };
        //let p1Name,p1Score,p2Name,p2Score
        let a, b, c, d, id, outData;
        const PlayerMap = (entrantID) => playerLookup[entrantID] || "Player not found"; //Quick method to run lookup

        if ((groupSel === "1932036") || (groupSel === "2079906") || (groupSel === "2079905")) {
            elite = 1;
            bracketReset = 0;
            bracket = [];
            for (const element of obj.entities.sets) {     //Populating the output array. x indicates position in the downloaded data (Match identifier), y indicates which element (Player 1 Name / Score, Player 2 Name / Score)
                //if(ggData.entities.sets[x].entrant1Id == null || ggData.entities.sets[x].entrant2Id == null) {continue}
                switch (element.identifier) {
                    case "A":
                        a = PlayerMap(element.entrant1Id);
                        b = element.entrant1Score;
                        c = PlayerMap(element.entrant2Id);
                        d = element.entrant2Score;
                        bracket[0] = [a, b, c, d];
                        break;

                    case "B":
                        a = PlayerMap(element.entrant1Id);
                        b = element.entrant1Score;
                        c = PlayerMap(element.entrant2Id);
                        d = element.entrant2Score;
                        bracket[1] = [a, b, c, d];
                        break;

                    case "C":
                        if (element.entrant1Id == null) { a = "Winner: WB - Round 1"; b = " "; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: WB - Round 2"; d = " "; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[2] = [a, b, c, d];
                        break;

                    case "D":
                        if (element.entrant1Id == null) { a = "Winner: WB - Final"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: LB - Round 2"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[3] = [a, b, c, d];
                        break;

                    case "E":
                        if (element.entrant1Id == null) { a = "Winner: QF 1"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: QF 2"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[4] = [a, b, c, d];
                        break;

                    case "F":
                        if (element.entrant1Id == null) { a = "Winner: QF 3"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: QF 4"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[5] = [a, b, c, d];
                        break;

                    case "G":
                        if (element.entrant1Id == null) { a = "Winner: SF 1"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: SF 2"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[6] = [a, b, c, d];
                        break;

                    case "H":
                        if (element.entrant1Id == null) { a = "Winner: Winners Final"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: Losers Final"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[7] = [a, b, c, d];
                        break;

                    case "I": //Bracket Reset case
                        if (element.entrant1Id == null || element.entrant2Id == null) { bracketReset = 0; continue; }
                        else {
                            bracketReset = 1;
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }
                        bracket[14] = [a, b, c, d];
                        break;

                    case "J":
                        if (element.entrant1Id == null) { a = "Loser: W QF-1"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Loser: W QF-2"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[8] = [a, b, c, d];
                        break;

                    case "K":
                        if (element.entrant1Id == null) { a = "Loser: W QF-3"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Loser: W QF-4"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[9] = [a, b, c, d];
                        break;

                    case "L":
                        if (element.entrant1Id == null) { a = "Loser: W SF-2"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: L R1-1"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[10] = [a, b, c, d];
                        break;

                    case "M":
                        if (element.entrant1Id == null) { a = "Loser: W SF-1"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: L R1-2"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[11] = [a, b, c, d];
                        break;

                    case "N":
                        if (element.entrant1Id == null) { a = "Winner: L QF-1"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: L QF-2"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[12] = [a, b, c, d];
                        break;

                    case "O":
                        if (element.entrant1Id == null) { a = "Loser: W F"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: L SF"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[13] = [a, b, c, d];
                        break;

                    default: break;
                }
            }
        }
        else {
            elite = 0;
            bracket = [];
            for (const element of obj.entities.sets) {     //Populating the output array. x indicates position in the downloaded data (Match identifier), y indicates which element (Player 1 Name / Score, Player 2 Name / Score)
                switch (element.identifier) {
                    case "A":
                        a = PlayerMap(element.entrant1Id);
                        b = element.entrant1Score;
                        c = PlayerMap(element.entrant2Id);
                        d = element.entrant2Score;
                        bracket[0] = [a, b, c, d];
                        break;

                    case "B":
                        a = PlayerMap(element.entrant1Id);
                        b = element.entrant1Score;
                        c = PlayerMap(element.entrant2Id);
                        d = element.entrant2Score;
                        bracket[1] = [a, b, c, d];
                        break;

                    case "C":
                        if (element.entrant1Id == null) { a = "Winner: WB - Round 1"; b = " "; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: WB - Round 2"; d = " "; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[2] = [a, b, c, d];
                        break;

                    case "D":
                        if (element.entrant1Id == null) { a = "Winner: WB - Final"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: LB - Round 2"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[5] = [a, b, c, d];
                        break;

                    case "F":
                        if (element.entrant1Id == null) { a = "Loser: WB - Round 1"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Loser: WB - Round 2"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[3] = [a, b, c, d];
                        break;

                    case "G":
                        if (element.entrant1Id == null) { a = "Loser: WB - Final"; b = null; }
                        else {
                            a = PlayerMap(element.entrant1Id);
                            b = element.entrant1Score
                        }

                        if (element.entrant2Id == null) { c = "Winner: LB - Round 1"; d = null; }
                        else {
                            c = PlayerMap(element.entrant2Id);
                            d = element.entrant2Score
                        }

                        bracket[4] = [a, b, c, d];
                        break;

                    default: break;
                }
            }
        }
        console.log(bracket);
        console.log(elite);
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
          bracketSel: 0,
        };
      },
      mounted: function () {},
      methods: {
        transition: function () {
          ipcRenderer.send("change-state", "Brackets");
        },

        onChange(event) {
            bracketName = event.target.options[event.target.options.selectedIndex].text;
            console.log(bracketName);
        },

        updateData: function () {
          console.log("[Controls] Update BracketsData");
          groupSel = this.$data.bracketSel;
            load();

            setTimeout(function () {
            ipcRenderer.send("update-bracketsData", {
              //toornamentEventId: this.$data.toornamentEventId,
              //toornamentStageId: this.$data.toornamentStageId,
              topLeftText: bracketName, //"BRACKET",
                bracket: bracket,
                elite: elite,
                bracketReset: bracketReset,
                updating: true,
            });
          }, 1500);
        },
      },
    };
    </script>

    <style scoped lang="less">
    .controlBrackets {
      padding: 5px 20px;
    }
    </style>
