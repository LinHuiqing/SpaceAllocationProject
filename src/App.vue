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
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-light">
                  <p class="title">Groups to be Allocated</p>
                  <p class="subtitle">Drag and Drop on to Map</p>
                  <div :style="{ height: heightOfSpace() + 'px' }">
                    <vue-draggable-resizable v-for="element in unallocated" :key="element.id" :x="element.x" :y="unallocatedY(heightOfSpace(), element)" :w="element.w" :h="element.h" :resizable.sync="resizable">
                      <p>Group {{element.group_no}}</p>
                      <p>Name: {{element.title}}</p>
                    </vue-draggable-resizable>
                  </div>
                </article>
              </div>
            </div>
          </div>
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

  //import dbtry from './components/dbtry'
  //import navbar from './components//NavBar'

  export default {
    name: 'app',
    components: {
      VueDraggableResizable,
      //dbtry,
      'app-nav': navigationa
    },
    data() {
      return {
        unallocated: [
          {
            x: 20,
            y: 0,
            w: 100,
            h: 100, 
            group_no:7,
            title: "drones"
          }, {
            x: 140,
            y: 0,
            w: 100,
            h: 100, 
            group_no:3,
            title: "healthcare"
          }, {
            x: 260,
            y: 0,
            w: 100,
            h: 100, 
            group_no: 12,
            title: "software"
          }, {
            x: 380,
            y: 0,
            w: 100,
            h: 100,
            group_no:10,
            title: "hello"
          }, {
            x: 500,
            y: 0,
            w: 100,
            h: 100,
            group_no:7,
            title: "hello"
          }, {
            x: 620,
            y: 0,
            w: 100,
            h: 100,
            group_no:7,
            title: "hello"
          }, {
            x: 740,
            y: 0,
            w: 200,
            h: 100,
            group_no:7,
            title: "hello"
          }, {
            x: 960,
            y: 0,
            w: 200,
            h: 200,
            group_no:7,
            title: "hello"
          }, {
            x: 1180,
            y: 0,
            w: 200,
            h: 200,
            group_no:7,
            title: "hello"
          }
        ],
        resizable: false,
        prevX: 20,
        offsetX: 20,
        isActive: true,
        // unallocatedY: 0
      }
    },
    methods: {
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
      unallocatedY(max, element) {
        return (max-element.h)/2 + 100
      },
      // unallocatedX() {
      //   // let start = JSON.parse(JSON.stringify(this.prevX))
      //   this.prevX += 20
      //   // element
      //   // return this.prevX
      // }
    }
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
      border-radius: 25px;
      text-align: center;
    }
</style>