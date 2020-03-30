<template>
    <div class="tile is-parent is-vertical">
        <p class="title">Request for space</p>
        <p class="subtitle">Use this form to request for space.</p>

        <div class="row">
          <form @submit.prevent="submitGroup" class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input type="text" v-model="group_no" @input="setGroupNo(group_no)" required>
                <label>Capstone Group Number</label>
              </div>
            </div>
            <SizeSelectionRow></SizeSelectionRow>

           <PowerAVRow v-model="power_outlets"></PowerAVRow>
            <button type="submit" class="btn">Submit</button>
            <button><router-link to="/" class="btn grey">Cancel</router-link></button>
          </form>
        </div>

        <!-- <SizeSelectionRow></SizeSelectionRow>

        <PowerAVRow></PowerAVRow> -->
        <button type="submit" class="btn">Submit</button>
        <button><router-link to="/" class="btn grey">Cancel</router-link></button>
    </div>
</template>

<script>
// import db from './../api/firebase/firebaseInit'
import SizeSelectionRow from './space_form/SizeSelectionRow';
import PowerAVRow from './space_form/PowerAVRow.vue';

export default {
  name: "SpaceForm",
  components: {
    SizeSelectionRow, PowerAVRow
  },
  data(){
    return{
      // group_no: null,
      // length: null,
      // breadth: null,
      // power_outlets:null

    }
  },
  computed: {
    // groupNo() {
    //   return this.$store.state.login.group_no
    // },
  },
  methods:{
    setGroupNo (group_no) {
      this.$store.commit('form/setGroupNo', group_no)
    },
    submitGroup(){
      this.$store.dispatch('form/submitGroupFBAsync')
    //   db.collection('students').add({
    //     group_no: this.group_no,
    //     length: this.length,
    //     breadth:this.breadth,
    //     power_outlets:this.power_outlets
    //   })
    //   .then(docRef =>{
    //     console.log('Form submitted: ', docRef.id)
    //     this.$router.push('/')
    //   })
    //   .catch(error => {
    //     console.error('Error adding student: ', error)
    // })
  }
}
}
</script>
