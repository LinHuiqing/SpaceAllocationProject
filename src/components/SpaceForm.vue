<template>
    <div class="tile is-parent is-vertical" :class="$style.form">
      <div class="tile is-parent is-vertical">
        <h1 class="title">Request for space</h1>
        <h1 class="subtitle">Use this form to request for space.</h1>
      </div>

        <div class="row">
          <form @submit.prevent="submitGroup" class="col s12">
            <div class="tile is-parent">
              <div class="input-field">
                <b-field label="Capstone Group Number" type="is-info" >
                  <b-input type="number" v-model="group_no" placeholder="Enter Group number" required></b-input>
                </b-field>
              </div>
            </div>
            <div class="tile is-parent">
            <div class="input-field">
          <b-field label="Theme" type="is-info">
             <b-input type="text" v-model="theme" placeholder="Enter project theme" required></b-input>
           </b-field>
            </div>
            </div>
            
            <div class="tile is-parent" name="sizerow">
            <SizeSelectionRow></SizeSelectionRow>
            </div>
            <div class="tile is-parent">
           <PowerAVRow></PowerAVRow>
           </div>
          

           <div class="tile is-parent">
           <div class="buttons">
            <b-button type="is-success" @click="submitGroup">Submit</b-button>
            <b-button type="is-danger"><router-link to="Dashboard" style="all: inherit;">Cancel</router-link></b-button>
          </div>
           </div>
          </form>
        </div>
    </div>
</template>

<script>

import SizeSelectionRow from './space_form/SizeSelectionRow';
import PowerAVRow from './space_form/PowerAVRow.vue';

export default {
  name: "SpaceForm",
  components: {
    SizeSelectionRow, PowerAVRow
  },
  computed: {
    group_no: {
      get () {
        return this.$store.state.form.group_no
      },
      set (value) {
        this.$store.commit('form/setGroupNo', value)
      }
    },
    theme: {
      get() {
        return this.$store.state.form.theme
      },
      set(value) {
        this.$store.commit('form/setTheme', value)
      }
    }
  },
  methods:{
    submitGroup(){
      this.$buefy.dialog.alert('Form submitted!')
      this.$store.dispatch('form/submitGroupFBAsync')
    },
  }
}
</script>

<style module>
.form {
    transform: scale(0.95);
}
</style>