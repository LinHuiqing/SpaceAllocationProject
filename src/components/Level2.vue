<template>
    <div>
        <section>
            <div class="tile is-parent" style="overflow:scroll">
            <article class="tile is-child notification is-white">
                  <p class="title">Map</p>
                  <p class="subtitle">Campus Centre Level 2</p>
                  <div ref="map_image" style="position: relative; width: 1200px">
                    <figure class="image">
                      <img src="../assets/floorplan_level2.jpg">
                    </figure>
                    <vue-draggable-resizable v-for="(cluster, index) in getClusters" :key=index :x="calculateProjWidth(cluster.coordX)" :y="calculateProjWidth(cluster.coordY)" :w="calculateProjWidth(cluster.length)" :h="calculateProjWidth(cluster.breadth)" :resizable.sync="resizable" :style="{ transform: 'rotate('+calculateProjAngle(cluster.angle)+'turn)'}">
                        <p>Cluster {{cluster.serial_no}}</p>
                        <p>id: {{cluster.id}}</p>
                        <!-- <div>
                          <vue-draggable-resizable v-for="(group, index) in getClusterGroups(cluster)" :key=index :x="group.coordX" :y="group.coordY" :w="calculateProjWidth(group.length)" :h="calculateProjWidth(group.breadth)" :resizable.sync="resizable" :style="{ transform: 'rotate('+calculateProjAngle(group.angle)+'turn)'}">
                              <p>Group {{group.serial_no}}</p>
                              <p>id: {{group.id}}</p>
                          </vue-draggable-resizable>
                        </div> -->
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
                <vue-draggable-resizable v-for="group in getGroups" :key="group.id" :x="group.coordX" :y="group.coordY" :w="calculateProjWidth(group.length)" :h="calculateProjWidth(group.breadth)" :resizable.sync="resizable" :style="{ transform: 'rotate('+calculateProjAngle(group.angle)+'turn)'}">
                    <p>Group {{group.serial_no}}</p>
                    <p>id: {{group.id}}</p>
                </vue-draggable-resizable>
                <!-- <vue-draggable-resizable v-for="element in unallocated" :key="element.id" :x="element.x" :y="element.y" :w="calculateProjWidth(element.rawW)" :h="calculateProjWidth(element.rawH)" :resizable.sync="resizable" :style="{ transform: 'rotate('+calculateProjAngle(40)+'turn)'}" @click="this.calculateWidth()">
                    <p>Group {{element.group_no}}</p>
                    <p>Name: {{element.title}}</p>
                </vue-draggable-resizable> -->
                </div>
            </article>
            </div>
        </section>
    </div>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'
  // import './vuedraggable.css'
  //import navigationa from './components/navigation'

  export default {
    name: 'level2',
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
        scale: 60,
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
        return this.$store.state.allocation.clusters[2]
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
      }
  },
 }
</script>
