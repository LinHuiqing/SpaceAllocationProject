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
      <!--<template v-if="user.loggedIn">
        <admin/>
      </template> -->
      
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
  import navigationa from './components/navigation'
  //import admin from './components/adminview'

  export default {
    name: 'app',
    computed: {
    // map `this.user` to `this.$store.getters.user`
      user() {
        return this.$store.state.login.user
      }
    },
    components: {
      'app-nav': navigationa,
      //admin
    }
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
