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
            Map
            <!--dbtry /-->
          </h2>
        </div>
      </div>
    </section>
    <!-- <router-link to="/level1">Level 1</router-link>
      <router-link to="/level2">Level 2</router-link> -->

    <SpaceForm />

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Capstone Space Allocation Project</strong> by
          <a href="https://github.com/LinHuiqing/SpaceAllocationProject"
            >Cohort 3 Group 11</a
          >. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import SpaceForm from "./../../../../src/components/SpaceForm";

export default {
  name: "App",
  components: {
    SpaceForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
