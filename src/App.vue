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
              <!-- <dbtry /> -->
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
      <section>
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-light">
                  <p class="title">Groups to be Allocated</p>
                  <p class="subtitle">Drag and Drop on to Map</p>
                  <!-- <GroupsDetails /> -->
                  <!-- <div :style="{ height: heightOfSpace() + 'px' }">
                    <vue-draggable-resizable v-for="element in unallocated" :key="element.id" :x="element.x" :y="unallocatedY(heightOfSpace(), element)" :w="element.w" :h="element.h" :resizable.sync="resizable">
                      <p>Group {{element.group_no}}</p>
                      <p>Name: {{element.title}}</p>
                    </vue-draggable-resizable>
                  </div> -->
                  <ul class="collection with-header">
                    <li class="collection-header"><h4>Groups</h4></li>
                    <vue-draggable-resizable v-for="student in students" v-bind:key="student.id"
                    class="collection-item" :resizable.sync="resizable">
                    <p>{{student.group_theme}}</p>
                    <p>Group {{student.student_group}}</p>
                    </vue-draggable-resizable>
                    <!-- <li v-for="student in students" 
                    v-bind:key="student.id"
                    class="collection-item">
                    {{student.group_theme}}
                    </li> -->
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  import VueDraggableResizable from 'vue-draggable-resizable'
  import './components/vuedraggable.css'
  import navigationa from './components/navigation'
  import db from './components/firebaseInit'
  // import dbtry from './components/dbtry'
  // import GroupsDetails from './components/groups'

  export default {
    name: 'app',
    components: {
      VueDraggableResizable,
      // dbtry,
      // GroupsDetails,
      'app-nav': navigationa
    },
    data(){
      return{
        students:[]
      }
    },
    created(){
      db.collection('students').get().then(querySnapshot => {
        querySnapshot.forEach(doc =>{
          const data ={
            'id': doc.id,
            'student_group':doc.data().number,
            'group_theme':doc.data().theme,
            'length': doc.data().length,
            'width':doc.data().width

          }
          this.students.push(data)
        })
      })
    }
  }
</script>

<style>
  .vdr {
      border: 2px SOLID #CCAAEE;
      background: #CCDDFF;
      border-radius: 25px;
      text-align: center;
    }
</style>