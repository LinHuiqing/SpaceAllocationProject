<head>
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
</head>
<template>
    <div>
      <section class="hero is-dark is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Capstone Space Allocation Project
            </h1>
            <h2 class="subtitle">
              Cohort 3 Group 11
            </h2>
          </div>
        </div>
      </section>
      <app-nav></app-nav>
      <router-view></router-view>
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
  //import VueDraggableResizable from 'vue-draggable-resizable'
  //import './components/vuedraggable.css'
  import navigation from './components/navigation'

  export default {
    name: 'app',
    computed: {
    // map `this.user` to `this.$store.getters.user`
      user() {
        return this.$store.state.login.user
      }
    },
    components: {
      'app-nav': navigation
    },
    methods: {
  },
 }
</script>
