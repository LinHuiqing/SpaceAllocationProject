<template>
    <b-navbar>
        <template slot="brand">
            
            <router-link to="/" class="navbar-brand"></router-link>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <!-- <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item router-link to="/level1">trial</b-navbar-item>
            <b-navbar-dropdown label="Map">
                <b-navbar-item router-link to="/level2">Level 1</b-navbar-item>
                <b-navbar-item href="#">
                    Level 1
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'level2' }">
                    Level 2
                </b-navbar-item>
            </b-navbar-dropdown> -->
            <!--router-link to="/login">Level 1</router-link>
            <router-link to="/register">Level 2</router-link>
            <router-link to="/dashboard">Level 1</router-link-->
            <router-link to="/level1">Level 1</router-link>
            <router-link to="/level2">Level 2</router-link>
            
        </template>

        <template slot="end">
            <template v-if="user.loggedIn">
                <div class="nav-item">{{user.data.displayName}}</div>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="signOut">Sign out</a>
                </li>
            </template>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link to="register" class="nav-link" >
                        <a class="button is-warning">
                            <strong>Sign Up</strong>
                        </a>
                    </router-link>
                    <router-link to="login" class="nav-link">
                        <a class="button is-light">
                            Log in
                        </a>
                    </router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>


<script>
import { mapGetters } from "vuex";
import * as firebase from 'firebase';
import 'firebase/auth';
export default {
  name: 'navigation',
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

