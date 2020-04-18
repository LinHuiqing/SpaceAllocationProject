// <head>
//   <script type="text/javascript" src="html2canvas-master/dist/html2canvas.js"></script>
// </head>

<template>
    <div>
        <section>
            <div class="tile is-parent" style="overflow:scroll">
            <article class="tile is-child notification is-white">
              <div class="tile is-parent">
                <article class="tile is-child">
                  <p class="title">Map</p>
                  <p class="subtitle">Campus Centre Level 1</p>
                </article>
              </div>
              <div class="mb-12 v-card v-card--outlined v-sheet theme--light">
                <header class="v-sheet v-sheet--tile theme--light v-toolbar v-toolbar--dense v-toolbar--flat grey lighten-3" style="height: 48px;">
                  <div class="v-toolbar__content" style="height: 48px;">
                    <!---->
                    <div class="spacer"></div>
                  
                    <span class="v-tooltip v-tooltip--bottom"></span>
                    <b-button type="is-primary" @click="allocateAll()">Allocate</b-button>
                    <span class="v-tooltip v-tooltip--bottom"></span>
                    <b-button type="is-light" @click="resetAllocation()">Reset</b-button>
                    <span class="v-tooltip v-tooltip--bottom"></span>
                    <a href="https://github.com/LinHuiqing/SpaceAllocationProject" target="_blank" class="v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default" aria-label="View on Github">
                      <span class="v-btn__content">
                        <i aria-hidden="true" class="v-icon notranslate mdi mdi-code-tags theme--light"></i>
                      </span>
                    </a>
                  </div>
                </header>
                <div ref="map_image" style="position: relative; width: 1200px" id='layout'>
                  <figure class="image">
                      <img src="../assets/floorplan_level1.jpg">
                  </figure>
                  <drr v-for="(group, index) in getAllocatedGroups" :key=index+13 :x="calculateProjCoordX(group.coordX, group.length, group.breadth, group.angle)" :y="calculateProjCoordY(group.coordY, group.length, group.breadth, group.angle)" :w="calculateProjWidth(group.length)" :h="calculateProjWidth(group.breadth)"
                  :angle="group.angle">
                      <p>{{group.serial_no}}</p>
                  </drr>
                  <!-- <drr v-for="(cluster, index) in getClusters" :key=index :x="calculateProjCoordX(cluster.coordX, cluster.length, cluster.breadth, cluster.angle)" :y="calculateProjCoordY(cluster.coordY, cluster.length, cluster.breadth, cluster.angle)" :w="calculateProjWidth(cluster.length)" :h="calculateProjWidth(cluster.breadth)" :resizable.sync="resizable" :moveable.sync="moveable" :angle="cluster.angle" style="background-color:rgba(100, 100, 150, 0.3)">
                    <p>Cluster {{cluster.serial_no}}</p>
                  </drr> -->
                </div>
              </div>
                <div class="tile">
                <b-button style="width: 200px; left: 20px top: 20px" type="is-success" @click='screenshot()'>Save Layout</b-button>
                </div>
            </article>
            <article class="tile is-child notification is-light is-2">
                <p class="title">Groups to be Allocated</p>
                <p class="subtitle">Drag and Drop on to Map</p>
                <div :style="{ position: 'relative' }">
                  <drr v-for="(group, index) in getUnallocatedGroups" :key=index :x=lastXPos :y=lastYPos :w="calculateProjWidth(group.length)" :h="calculateProjWidth(group.breadth)" style="background-color: rgba(50, 50, 50, 0.3); font-size:50%">
                      <p>Group {{group.serial_no}}</p>
                  </drr>
                </div>
            </article>
            </div>
        </section>
    </div>
</template>

<script>
  import drr from '@minogin/vue-drag-resize-rotate'
  import ResizeText from 'vue-resize-text'
  import html2canvas from '../html2canvas'

  export default {
    name: 'level1',
    components: {
      drr
    },
    directives: {
      ResizeText
    },
    data() {
      return {
        resizable: false,
        moveable: false,
        prevX: 20,
        offsetX: 20,
        isActive: true,
        scale: 60,
        lastYPos: 50,
        lastXPos: 50
      }
    },
    created(){
      this.$store.dispatch('allocation/getGroupsFBAsync')
      this.$store.dispatch('allocation/getClustersFBAsync')
    },
    mounted() {
      window.addEventListener("resize", this.calculateWidth);
      this.calculateWidth();
    },
    destroyed() {
      window.addEventListener("resize", this.calculateWidth);
    },
    computed: {
      getUnallocatedGroups() {
        console.log("unallocated", this.$store.state.allocation.unallocated);
        return this.$store.state.allocation.unallocated
      },
      getClusters() {
        return this.$store.state.allocation.clusters[1]
      },
      getUnit() {
        return this.$store.state.allocation.unit;
      },
      getAllocatedGroups() {
        let all_allocated = []
        // console.log("allocated", this.$store.state.allocation.allocated);
        for (let cluster in this.$store.state.allocation.allocated) {
          all_allocated.push(...this.$store.state.allocation.allocated[cluster]);
        }
        return all_allocated;
      }
    },
    methods: {
      setUnit( unit ) {
        this.$store.commit('allocation/setUnit', unit)
      },
      calculateWidth() {
        this.$nextTick(function() {
          this.setUnit(this.$refs.map_image.clientWidth/this.scale)
        })
      },
      calculateProjWidth(width) {
        return width * this.getUnit;
      },
      calculateProjAngle(angle) {
        return angle/180;
      },
      calculateProjCoordY(coordY, length, breadth, angle) {
        return this.calculateProjWidth(coordY + (breadth/2 * Math.cos((angle*Math.PI)/180)) + (length/2 * Math.sin((angle*Math.PI)/180)))
      },
      calculateProjCoordX(coordX, length, breadth, angle) {
        return this.calculateProjWidth(coordX + (length/2 * Math.cos((angle*Math.PI)/180)) + (breadth/2 * Math.sin((angle*Math.PI)/180)))
      },
      allocateAll() {
        this.$store.dispatch("allocation/allocateAll")
      },
      resetAllocation() {
        this.$store.commit("allocation/resetAllocation")
      },
      getClusterGroups(cluster) {
        return this.$store.state.allocation.allocated[cluster.serial_no]
      },
    screenshot() {
    html2canvas(document.getElementById("layout")).then(function(canvas) {
                    document.body.appendChild(canvas);
                });
    
  }
  },
 }
</script>

<style>
  .drr {
    background-color: rgba(50, 50, 50, 0.3);
    font-size:90%;
    border-style: groove;
    border-width: thin;
  }
</style>
