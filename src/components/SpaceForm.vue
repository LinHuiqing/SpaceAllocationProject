<template>
    <div class="tile is-parent is-vertical">
        <p class="title">Request for space</p>
        <p class="subtitle">Use this form to request for space.</p>

        <div class="row">
          <form @submit.prevent="submitGroup" class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input type="text" v-model="group_no" required>
                <label>Capstone Group Number</label>
              </div>
            </div>
            <SizeSelectionRow></SizeSelectionRow>

           <PowerAVRow></PowerAVRow>
            <button type="submit" class="btn">Submit</button>
            <button><router-link to="/level1" class="btn grey">Cancel</router-link></button>
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
