<template>
	<div class="database">
    <form>
      <input type='text' v-model="newReptile" placeholder="Reptile Name">
      <button type="submit" @click.prevent="addReptile()">Add Reptile</button>
    </form>
		<ul class="reptileList">
			<li v-for="reptile in reptiles" :key="reptile">
				{{ reptile.name }} -
				<button @click="deleteReptile(reptile)">Remove</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { db } from "../main";

export default {
  name: "dbtry",
  data() {
    return {
      reptiles: [],
      newReptile: ''
    };
  },
  firestore() {
    return {
      reptiles: db.collection('reptiles')
    };
  },
  methods: {
    addReptile() {
      db.collection('reptiles').add({
        name: this.newReptile,
        timestamp: new Date()
      });
      this.newReptile = "";
    },
      deleteReptile(reptile) {
      db.collection('reptiles').doc(reptile['.key']).delete();
    } 
  }
};
</script>


<style>
#database {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.reptileList {
  list-style: none;
}
</style>