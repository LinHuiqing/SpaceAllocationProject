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
          </div>
        </div>
      </section>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="false"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <section>
        <div class="tile is-ancestor">
          <div class="tile is-child">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title">Tall tile</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                  <!-- Content -->
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-child is-3">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title">Tall tile</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                  <!-- Content -->
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
        <div class="App">
            <div class="wrapper">
                <div class="workspace" ref="workspace">
                  <div
                      v-for="element in elements"
                      :key="element.id">
                    <FreeTransform
                            :x=element.x
                            :y=element.y
                            :scale-x="element.scaleX"
                            :scale-y="element.scaleY"
                            :width="element.width"
                            :height="element.height"
                            :angle="element.angle"
                            :offset-x="offsetX"
                            :offset-y="offsetY"
                            :disable-scale="element.disableScale === false"
                            :selected="element.id === selectedElement"
                            :selectOn="element.selectOn"
                            @onSelect="setSelected(element.id)"
                            @update="update(element.id,$event)"
                            :styles="{zIndex:element.id === selectedElement?2:1}"
                            :scale-from-center="false"
                    >
                        <div class="element"
                             :style="getElementStyles(element)">
                            {{element.text}}
                        </div>
                    </FreeTransform>
                    </div>
                </div>
                <div>
                  <text>HelloWorld</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // import FreeTransform from './components/FreeTransform.vue'

  export default {
    name: 'app',
    components: {
      // FreeTransform
    },
    data() {
      return {
        message: "hello worlddllgjfdlkgnlkdsmlk",
        field_y: 10,
        elements: [
          {
            id: "el-1",
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 200,
            angle: 0,
            classPrefix: "tr",
            text: "Scale Enabled, Click to activate",
            styles: {
              background: "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)",
            },
            selectOn: 'click',
          },
          {
            id: "el-2",
            x: 225,
            y: 225,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 100,
            angle: 0,
            classPrefix: "tr2",
            text: "Scale Enabled, mousedown to activate",
            selectOn: 'mousedown',
            styles: {
              padding: `5px`,
              background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)",
            },
          },
          {
            id: "el-3",
            x: 100,
            y: 225,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 100,
            angle: 0,
            classPrefix: "tr2",
            text: "Scale Disabled, double click to activate",
            selectOn: 'dblclick',
            styles: {
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)",
            },
            disableScale: true
          },
          {
            id: "el-4",
            x: 100,
            y: 400,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 100,
            angle: 45,
            classPrefix: "tr3",
            styles: {
              background: "linear-gradient(135deg, #b1ea4d 0%,#459522 100%)",
            },
            selectOn: 'mousedown',
          }
        ],
        prevX: 10,
        offsetX: 10,
        offsetY: 10,
        selectedElement: null,
      }
    },
    computed: {

    },
    mounted() {
      this.offsetX = this.$refs.workspace.offsetLeft
      this.offsetY = this.$refs.workspace.offsetTop
      // this.element.y = computeCenterY(this.element)
    },
    methods: {
      update(id, payload) {
        this.elements = this.elements.map(item => {
          if (item.id === id) {
            return {
              ...item,
              ...payload
            }
          }
          return item
        })
      },
      getElementStyles(element) {
        const styles = element.styles ? element.styles : {}
        return {
          width: `${element.width}px`,
          height: `${element.height}px`,
          ...styles
        }
      },
      setSelected(id) {
        this.selectedElement = id
      },
      calculateNextStartX(startX, width) {
        this.prevX = startX + width + this.offsetX;
        return startX;
      },
      computeCenterY(element) {
        let max = 0;
        for (let element in this.elements) {
          if (element.height > max) {
            max = element.height;
          }
        }
        // this.element.y = max/2 + this.offsetY - element.height/2
        return max/2 + this.offsetY - element.height/2
      }
    }
  }
</script>

<style>
    /* #app {
        display: flex;
        background: #F8FAFC;
        width: inherit;
    } */

    .wrapper {
        flex: 1;
        width: inherit;
    }

    .workspace {
        width: inherit;
        height: 300px;
        margin: 25px auto;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.10);
        border: 1px solid rgba(0, 0, 0, 0.10);
        background: #fff;
        overflow:scroll;
    }

    * {
        box-sizing: border-box;
    }

    .tr-transform--active {
        position: absolute;
        z-index: 5;
    }

    .tr-transform__content {
        user-select: none;
    }
    .tr-transform__content .element{
        padding:5px;
    }

    .tr-transform__rotator {
        top: -45px;
        left: calc(50% - 7px);
    }

    .tr-transform__rotator,
    .tr-transform__scale-point {
        background: #fff;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    .tr-transform__rotator:hover,
    .tr-transform__scale-point:hover {
        background: #F1F5F8;
    }

    .tr-transform__rotator:active,
    .tr-transform__scale-point:active {
        background: #DAE1E7;
    }

    .tr-transform__scale-point {

    }

    .tr-transform__scale-point--tl {
        top: -7px;
        left: -7px;
    }

    .tr-transform__scale-point--ml {
        top: calc(50% - 7px);
        left: -7px;
    }

    .tr-transform__scale-point--tr {
        left: calc(100% - 7px);
        top: -7px;
    }

    .tr-transform__scale-point--tm {
        left: calc(50% - 7px);
        top: -7px;
    }

    .tr-transform__scale-point--mr {
        left: calc(100% - 7px);
        top: calc(50% - 7px);
    }

    .tr-transform__scale-point--bl {
        left: -7px;
        top: calc(100% - 7px);
    }

    .tr-transform__scale-point--bm {
        left: calc(50% - 7px);
        top: calc(100% - 7px);
    }

    .tr-transform__scale-point--br {
        left: calc(100% - 7px);
        top: calc(100% - 7px);
    }

</style>
