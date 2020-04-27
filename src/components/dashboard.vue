<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>

          <div class="card-body">
            <div class="alert alert-success" role="alert">You are logged in as <strong>{{user.data.displayName}}</strong>!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    user(){
      return this.$store.state.login.user
    }
    // map `this.user` to `this.$store.getters.user`
    
  }
};
</script>