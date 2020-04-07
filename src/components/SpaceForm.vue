<template>
    <div class="tile is-parent is-vertical">
        <p class="title">Request for space</p>
        <p class="subtitle">Use this form to request for space.</p>

        <div class="row">
          <form @submit.prevent="submitGroup" class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <b-field label="Capstone Group Number">
                  <b-input type="number" v-model="group_no" required></b-input>
                </b-field>
              </div>
            </div>
            <SizeSelectionRow></SizeSelectionRow>

           <PowerAVRow></PowerAVRow>

           <b-field label="Theme">
             <b-input v-model="theme" required></b-input>
           </b-field>

           <div class="buttons">
            <b-button type="is-success" @click="submitGroup">Submit</b-button>
            <b-button type="is-danger"><router-link to="home" style="all: inherit;">Cancel</router-link></b-button>
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
      this.$store.dispatch('form/submitGroupFBAsync')
  }
}
}
</script>
