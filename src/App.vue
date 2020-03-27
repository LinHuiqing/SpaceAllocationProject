<template>
    <div>
      <section class="hero is-dark is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Capstone Space Allocation Project
            </h1>
            <h2 class="subtitle">
              Map
              <!--dbtry /-->
            </h2>
            <!-- <dbtry /> -->
          </div>
        </div>
      </section>
      <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://github.com/LinHuiqing/SpaceAllocationProject">
            <img src="./assets/logo_transparent2.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="80" height="100">
          </a>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="false"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <!-- <router-link to="/level1">Level 1</router-link>
      <router-link to="/level2">Level 2</router-link> -->
      <app-nav></app-nav>
      <router-view></router-view>
      <section>
        <div>
          <b-button @click='decrement'>-</b-button>
          <p>{{count}}</p>
          <b-button @click='increment'>+</b-button>
        </div>
      </section>
      <section>
        <div class="tile is-parent">
          <article class="tile is-child notification is-white">
            <p class="title">Map</p>
            <p class="subtitle">Campus Centre Level 1</p>
            <div ref="map_image" :style="{ position: 'relative'}">
              <figure class="image">
                <img src="./assets/capstone1.jpg">
              </figure>
              <vue-draggable-resizable v-for="cluster in getClusters" :key="cluster.id" :x="cluster.coordX" :y="cluster.coordY" :w="calculateProjWidth(cluster.length)" :h="calculateProjWidth(cluster.breadth)" :resizable.sync="resizable" :style="{ transform: 'rotate('+calculateProjAngle(cluster.angle)+'turn)'}">
                <p>Group {{cluster.serial_no}}</p>
                <!-- <p>Name: {{cluster.theme}}</p> -->
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
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Capstone Space Allocation Project</strong> by <a href="https://github.com/LinHuiqing/SpaceAllocationProject">Cohort 3 Group 11</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    </div>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'
  import './components/vuedraggable.css'
  import navigationa from './components/navigation'

  export default {
    name: 'app',
    components: {
      VueDraggableResizable,
      'app-nav': navigationa
    },
    data() {
      return {
        resizable: false,
        prevX: 20,
        offsetX: 20,
        isActive: true,
        unit: 1,
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
        return this.$store.state.allocation.unallocated.clusterGroup
      },
      getClusters() {
        return this.$store.state.allocation.clusters.clusterGroup
      }
    },
    methods: {
      increment () {
        this.$store.commit('counter/increment')
      },
      decrement () {
        this.$store.commit('counter/decrement')
      },
      calculateWidth() {
        this.$nextTick(function() {
          this.unit = this.$refs.map_image.clientWidth/this.scale;
        })
      },
      calculateProjWidth(width) {
        return width * this.unit;
      },
      calculateProjAngle(angle) {
        return angle/360;
      }
  },
 }
</script>

<style>
  .vdr {
      border: 2px SOLID #CCAAEE;
      background: #CCDDFF;
      border-radius: 1px;
      text-align: center;
      font-size: 50%;
    }
</style>
