<template>
  <v-container fluid class="pa-0 ">
    <v-layout row wrap>
      <v-flex md3 class="text-xs-left">
        <v-menu offset-y class="pa-0">
          <template slot="activator">
            <span class="display-2 line-style pa-3">{{ lineActive.name }}</span>
          </template>
          <v-list>
            <v-list-tile
              class="pr-0"
              @click="lineIndex == 0 ? lineIndex++ : lineIndex--"
            >
              <v-layout justify-center>
                <span class="headline">Switch</span>
              </v-layout>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>
      <v-flex md6 class="text-xs-center ">
        <span class="display-2 yellow-text  font-weight-bold">
          PO#1124 | Wafer 100 gr
        </span>
      </v-flex>
      <v-flex md3 class="text-xs-right mt-3">
        <span class="display-2 clock-style pa-3">{{ time }}</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-5">
      <v-flex md12>
        <v-container grid-list-lg>
          <v-layout row wrap>
            <v-flex md6>
              <v-card>
                <v-card-text class="py-0">
                  <v-layout row wrap align-center>
                    <v-flex md6>
                      <span class="display-1">Target</span>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field
                        v-model="target"
                        readonly
                        light
                        solo
                        class="pa-0 display-1"
                      >
                        <template v-slot:append>
                          <span class="orange-text mr-3 display-1">
                            Karton
                          </span>
                        </template>
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md6>
              <v-card>
                <v-card-text class="py-0">
                  <v-layout row wrap align-center>
                    <v-flex md6>
                      <span class="display-1">OEE</span>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field
                        v-model="oee"
                        readonly
                        light
                        solo
                        class="pa-0 display-1 green-text-input"
                      />
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="pt-3">
            <v-flex md6>
              <v-card>
                <v-card-text class="py-0">
                  <v-layout row wrap align-center>
                    <v-flex md6>
                      <span class="display-1">Good</span>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field
                        v-model="good"
                        readonly
                        light
                        solo
                        class="pa-0 display-1"
                      >
                        <template v-slot:append>
                          <span class="orange-text mr-3 display-1">
                            Karton
                          </span>
                        </template>
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md6>
              <v-card>
                <v-card-text class="py-0">
                  <v-layout row wrap align-center>
                    <v-flex md6>
                      <span class="display-1">Avail</span>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field
                        v-model="avail"
                        readonly
                        light
                        solo
                        class="pa-0 display-1 green-text-input"
                      />
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="pt-3">
            <v-flex md6>
              <v-card>
                <v-card-text class="py-0">
                  <v-layout row wrap align-center>
                    <v-flex md6>
                      <span class="display-1">Loss</span>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field
                        v-model="loss"
                        readonly
                        light
                        solo
                        class="pa-0 display-1 brown-text-input"
                      >
                        <template v-slot:append>
                          <span class="orange-text mr-3 display-1">
                            Karton
                          </span>
                        </template>
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md6>
              <v-card>
                <v-card-text class="py-0">
                  <v-layout row wrap align-center>
                    <v-flex md6>
                      <span class="display-1">Perf</span>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field
                        v-model="perf"
                        readonly
                        light
                        solo
                        class="pa-0 display-1 green-text-input"
                      />
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="pt-3">
            <v-flex md6>
              <v-card>
                <v-card-text class="py-0">
                  <v-layout row wrap align-center>
                    <v-flex md6>
                      <span class="display-1">MTTF</span>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field
                        v-model="mttf"
                        readonly
                        light
                        solo
                        class="pa-0 text-xs-center display-1"
                      />
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md6>
              <v-card>
                <v-card-text class="py-0">
                  <v-layout row wrap align-center>
                    <v-flex md6>
                      <span class="display-1">Qual</span>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field
                        v-model="qual"
                        readonly
                        light
                        solo
                        class="pa-0 display-1 green-text-input"
                      />
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="pt-3">
            <v-flex md6>
              <v-card>
                <v-card-text class="py-0">
                  <v-layout row wrap align-center>
                    <v-flex md6>
                      <span class="display-1">MTTR</span>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field
                        v-model="mttr"
                        readonly
                        light
                        solo
                        class="pa-0 display-1"
                      />
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md6>
              <v-card>
                <v-card-text class="py-0">
                  <v-layout row wrap align-center>
                    <v-flex md6>
                      <span class="display-1">MTBF</span>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field
                        v-model="mtbf"
                        readonly
                        light
                        solo
                        class="pa-0 display-1 green--text"
                      />
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="ma-0">
      <v-flex md12 class="text-xs-center downtime py-3">
        <span class="display-2">DOWNTIME (00:20:15)</span>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" light max-width="400" persistent>
      <v-card>
        <v-card-title class="indigo white--text">
          <v-layout justify-center class="title">
            SETUP TV
          </v-layout>
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn flat round class="primary" @click="setTV(1)">TV 1</v-btn>
          <v-btn flat round class="primary" @click="setTV(2)">TV 2</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      lineList: [
        {
          id: 1,
          name: 'Line 13'
        },
        {
          id: 2,
          name: 'Line 14'
        },
        {
          id: 3,
          name: 'Line 15'
        },
        {
          id: 4,
          name: 'Line 16'
        }
      ],
      line: [],
      date: null,
      time: null,
      target: 11500,
      oee: '100,00%',
      good: 1250,
      avail: '100,00%',
      loss: 1370,
      perf: '100,00%',
      mttf: '00:10:00',
      qual: '100,00%',
      mttr: '00:10:00',
      mtbf: '00:10:00',
      dialog: false,
      lineActive: null,
      lineIndex: 0
    }
  },
  computed: {
    tv() {
      return this.$store.getters.tv
    }
  },
  watch: {
    lineActive(value) {
      this.lineActive = this.lineList[value]
    }
  },
  created() {
    if (this.tv == 1) {
      this.line.push(this.lineList[0])
      this.line.push(this.lineList[1])
    } else if (this.tv == 2) {
      this.line.push(this.lineList[2])
      this.line.push(this.lineList[3])
    } else {
      this.dialog = true
    }
    this.lineIndex = 0
  },
  mounted() {
    // timer
    setInterval(() => {
      this.setDateTime()
    }, 1000)
    this.setDateTime()

    // auto switch line every 2 minutes
    setInterval(() => {}, 120000)
  },
  methods: {
    setTV(param) {
      this.$store.dispatch('setTV', param)
      this.dialog = false
    },
    setDateTime() {
      const date = new Date()
      this.date =
        date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
      const hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
      const minute =
        date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
      const second =
        date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
      this.time = hour + ':' + minute + ':' + second
    }
  }
}
</script>
<style>
.downtime {
  width: 100vw;
  bottom: 0px;
  position: absolute;
  background: #ff1744;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  display: none;
}
.v-input input {
  text-align: center;
}
.green-text-input .v-input__control .v-input__slot .v-text-field__slot input {
  color: #00c853 !important;
}
.red-text-input .v-input__control .v-input__slot .v-text-field__slot input {
  color: #ff1744 !important;
}
.brown-text-input .v-input__control .v-input__slot .v-text-field__slot input {
  color: #4e342e !important;
}
.orange-text {
  color: #d84315 !important;
}
.yellow-text {
  color: #ffca28 !important;
}
.line-style {
  color: #00c853 !important;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
}
.clock-style {
  color: #ff1744;
  border-bottom: 3px solid white;
  border-left: 3px solid white;
}
</style>
