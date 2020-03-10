<template>
    <div>
      <!-- <app-nav></app-nav> -->
      <section>
        <!-- <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-vertical"> -->
                <article class="tile is-child notification is-white">
                  <p class="title">Map</p>
                  <p class="subtitle">Campus Centre Level 2</p>
                  <div>
                    <figure class="image">
                      <img src="../assets/capstone2.jpg">
                    </figure>
                  </div>
                  <div class="buttons">
                    <b-button style="width: 200px; left: 20px top: 20px" type="is-success">Save Layout</b-button>
                  </div>
                </article>
                <!-- <article class="tile is-child notification is-light">
                  <p class="title">Groups to be Allocated</p>
                  <p class="subtitle">Drag and Drop on to Map</p>
                  <div :style="{ height: heightOfSpace() + 'px' }">
                    <vue-draggable-resizable v-for="element in unallocated" :key="element.id" :x="element.x" :y="unallocatedY(heightOfSpace(), element)" :w="element.w" :h="element.h" :resizable.sync="resizable">
                      <p>Group {{element.group_no}}</p>
                      <p>Name: {{element.title}}</p>
                    </vue-draggable-resizable>
                  </div>
                </article> -->
              <!-- </div>
            </div>
          </div>
        </div> -->
      </section>
      <!-- <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Capstone Space Allocation Project</strong> by <a href="https://github.com/LinHuiqing/SpaceAllocationProject">Cohort 3 Group 11</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer> -->
    </div>
</template>

<script>
  // import VueDraggableResizable from 'vue-draggable-resizable'
  // import './vuedraggable.css'
  // import navigationa from './navigation'

  export default {
    name: 'level2',
    components: {
      // VueDraggableResizable,
      // 'app-nav': navigationa
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
    }
   
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