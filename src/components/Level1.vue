<template>
    <div>
        <section>
            <div class="tile is-parent">
            <article class="tile is-child notification is-white">
              <div class="tile is-parent">
                <article class="tile is-child">
                  <p class="title">Map</p>
                  <p class="subtitle">Campus Centre Level 2</p>
                </article>
                <article class="tile is-child buttons">
                  <b-button type="is-warning" @click="allocateAll()">Allocate</b-button>
                  <b-button type="is-success" @click="clickME()">Save</b-button>
                  <b-button type="is-danger" @click="clickME()">Reset</b-button>
                </article>
              </div>
                <div ref="map_image" :style="{ position: 'relative'}">
                <figure class="image">
                    <img src="../assets/capstone1.jpg">
                </figure>
                <vue-draggable-resizable v-for="(cluster, index) in getClusters" :key=index :x="cluster.coordX" :y="cluster.coordY" :w="calculateProjWidth(cluster.length)" :h="calculateProjWidth(cluster.breadth)" :resizable.sync="resizable" :style="{ transform: 'rotate('+calculateProjAngle(cluster.angle)+'turn)'}">
                    <p>Group {{cluster.serial_no}}</p>
                    <p>id: {{cluster.id}}</p>
                </vue-draggable-resizable>
                </div>
                <div class="buttons">
                <b-button style="width: 200px; left: 20px top: 20px" type="is-success">Save Layout</b-button>
                </div>
            </article>
            <article class="tile is-child notification is-light is-2">
                <p class="title">Groups to be Allocated</p>
                <p class="subtitle">Drag and Drop on to Map</p>
                <div :style="{ position: 'relative' }">
                <vue-draggable-resizable v-for="(group, index) in getGroups" :key=index :x="group.coordX" :y="group.coordY" :w="calculateProjWidth(group.length)" :h="calculateProjWidth(group.breadth)" :resizable.sync="resizable" :style="{ transform: 'rotate('+calculateProjAngle(group.angle)+'turn)'}">
                    <p>Group {{group.serial_no}}</p>
                    <p>id: {{group.id}}</p>
                </vue-draggable-resizable>
                </div>
            </article>
            </div>
        </section>
    </div>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'
  import './vuedraggable.css'
  //import navigationa from './components/navigation'

  export default {
    name: 'level1',
    components: {
      VueDraggableResizable,
    },
    data() {
      return {
        resizable: false,
        prevX: 20,
        offsetX: 20,
        isActive: true,
        // unit: 1,
        scale: 55,
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
      count() {
        return this.$store.state.counter.count
      },
      getGroups() {
        return this.$store.state.allocation.unallocated
      },
      getClusters() {
        return this.$store.state.allocation.clusters[1]
      },
      getUnit() {
        return this.$store.state.allocation.unit;
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
        return angle/360;
      },
      clickME() {
        console.log("HII")
      },
      allocateAll() {
        this.$store.dispatch("allocation/allocateAll")
      }
  },
 }
</script>

<style>
  .vdr {
      border: 2px SOLID #CCAAEE;
      background: #CCDDFF;
      border-radius: 5px;
      text-align: center;
      font-size: 50%;
    }
</style>
