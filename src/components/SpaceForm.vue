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
              <b-select placeholder="Select a theme">
                  <option value="1">Data Analytics</option>
                  <option value="2">Artificial Intelligence</option>
                  <option value="3">Healthcare</option>
                  <option value="4">Drones</option>
                  <option value="5">Others</option>
              </b-select>
          </b-field>

           <div class="buttons">
            <b-button type="is-success" @click="submitGroup">Submit</b-button>
            <b-button type="is-danger"><router-link to="/" style="all: inherit;">Cancel</router-link></b-button>
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
  },
  methods:{
    submitGroup(){
      this.$store.dispatch('form/submitGroupFBAsync')
  }
}
}
</script>
