<template>
    <b-navbar type="is-light" mobile-burger="true">
        <template slot="brand">

            <router-link to="/" class="navbar-brand"></router-link>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/logo.png"
                >
            </b-navbar-item>
        </template>
        <!-- allows admin to access space allocation -->
        <template slot="start" v-if="user.loggedIn && user.data.displayName=='admin'">
            <router-link class="navbar-item" to="/level1" id="lvl1">Level 1</router-link>
            <router-link class="navbar-item" to="/level2" id="lvl2">Level 2</router-link>
        </template>
        <!-- direct to student form when user does not have admin access -->
        <template slot="start" v-if="user.loggedIn && user.data.displayName!='admin'">
            <router-link to="/form" class="navbar-item">Student Form</router-link>
        </template>


        <template slot="end">

            <b-navbar-item tag="div" v-if="user.loggedIn==false">
                <div class="buttons">
                    <router-link to="register" class="nav-link" >
                        <a class="button is-warning">
                            <strong>Sign Up</strong>
                        </a>
                    </router-link>
                    <router-link to="login" class="nav-link">
                        <a class="button is-light">
                            <strong>Log in</strong>
                        </a>
                    </router-link>
                </div>
            </b-navbar-item>
            <template v-else>
                <a class="nav-link">
                    <a class="button is-warning" @click.prevent="signOut">
                        <strong>Sign Out</strong>
                    </a>
                </a>
            </template>
        </template>
    </b-navbar>
</template>


<script>
// import { mapGetters } from "vuex";
import * as firebase from 'firebase';
import 'firebase/auth';
export default {
  name: 'navigation',
  computed: {
    // map `this.user` to `this.$store.getters.user`
    user() {
      return this.$store.state.login.user
    }
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
