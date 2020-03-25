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
      <app-nav></app-nav>
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
              <vue-draggable-resizable v-for="element in unallocated" :key="element.id" :x="element.x" :y="element.y" :w="calculateProjWidth(element.rawW)" :h="calculateProjWidth(element.rawH)" :resizable.sync="resizable" :style="{ transform: 'rotate('+calculateProjAngle(element.angle)+'turn)'}">
                <p>Group {{element.group_no}}</p>
                <p>Name: {{element.title}}</p>
              </vue-draggable-resizable>
            </div>
            <div class="buttons">
              <b-button style="width: 200px; left: 20px top: 20px" type="is-success">Save Layout</b-button>
            </div>
          </article>
          <article class="tile is-child notification is-light is-2">
            <p class="title">Groups to be Allocated</p>
            <p class="subtitle">Drag and Drop on to Map</p>
            <div :style="{ height: heightOfSpace() + 'px', position: 'relative' }">
              <vue-draggable-resizable v-for="element in unallocated" :key="element.id" :x="element.x" :y="element.y" :w="calculateProjWidth(element.rawW)" :h="calculateProjWidth(element.rawH)" :resizable.sync="resizable">
                <p>Group {{element.group_no}}</p>
                <p>Name: {{element.title}}</p>
              </vue-draggable-resizable>
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
  // import dbtry from './components/dbtry'
  import VueDraggableResizable from 'vue-draggable-resizable'
  import './components/vuedraggable.css'
  // import store from './store'
  // import { mapState } from 'vuex'
  // import navigationa from './components/navigation'
  // import Moveable from "vue-moveable";

  export default {
    name: 'app',
    components: {
      VueDraggableResizable,
      // Moveable,
      // dbtry,
      // 'app-nav': navigationa
    },
    data() {
      return {
        unallocated: [
          {
            x: 20,
            y: 0,
            rawW: 2,
            rawH: 2,
            angle: 30,
            group_no:7,
            title: "drones"
          }, {
            x: 20,
            y: 140,
            rawW: 2,
            rawH: 2,
            angle: 45,
            group_no:3,
            title: "healthcare"
          }, {
            x: 20,
            y: 260,
            rawW: 2,
            rawH: 2,
            angle: 0,
            group_no: 12,
            title: "software"
          }
        ],
        resizable: false,
        prevX: 20,
        offsetX: 20,
        isActive: true,
        unit: 1,
        scale: 43,
        containers: [

        ]
      }
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
        return this.$store.state.allocation.count
      }
    },
    methods: {
      increment () {
        // console.log("increment");
        this.$store.commit('allocation/increment')
      },
      decrement () {
        // console.log("decrement");
        this.$store.commit('allocation/decrement')
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
      },
      heightOfSpace() {
        let max = 0;
        // console.log(this.unallocated)
        for (const element of this.unallocated) {
          // console.log(element.h)
          if (element.h > max) {
            max = element.h
          }
        }
        // console.log(max)
        return max
      },
      // unallocatedY(max, element) {
      //   return (max-element.h)/2 + 100
      // },
      // unallocatedX() {
      //   // let start = JSON.parse(JSON.stringify(this.prevX))
      //   this.prevX += 20
      //   // element
      //   // return this.prevX
      // }
    // },
  },

    // computed: {
    //
    // },
    // mounted() {
    //   this.offsetX = this.$refs.workspace.offsetLeft
    //   this.offsetY = this.$refs.workspace.offsetTop
    //   // this.element.y = computeCenterY(this.element)
    // },
    // methods: {
    //   update(id, payload) {
    //     this.elements = this.elements.map(item => {
    //       if (item.id === id) {
    //         return {
    //           ...item,
    //           ...payload
    //         }
    //       }
    //       return item
    //     })
    //   },
    //   getElementStyles(element) {
    //     const styles = element.styles ? element.styles : {}
    //     return {
    //       width: `${element.width}px`,
    //       height: `${element.height}px`,
    //       ...styles
    //     }
    //   },
    //   setSelected(id) {
    //     this.selectedElement = id
    //   },
    //   calculateNextStartX(startX, width) {
    //     this.prevX = startX + width + this.offsetX;
    //     return startX;
    //   },
    //   computeCenterY(element) {
    //     let max = 0;
    //     for (let element in this.elements) {
    //       if (element.height > max) {
    //         max = element.height;
    //       }
    //     }
    //     // this.element.y = max/2 + this.offsetY - element.height/2
    //     return max/2 + this.offsetY - element.height/2
    //   }
    // }
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
