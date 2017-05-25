<template>
  <div class="user-summary">
    nom : <router-link v-bind:to="`/users/${usr.id}`">{{usr.name}}</router-link> <br>
    ville: {{usr.address.city}} <br> 
    email: {{usr.email}} <br>
    <button v-on:click="acceptInvitation">accepter l'invitation</button>
  </div>
</template>

<script>
export default {
  name: 'user-summary',
  methods: {
    acceptInvitation: function() {
      this.$emit('accept');
    }
  },
  props: ['usr']
}
</script>

<style>
.user-summary {
  border: 2px solid grey;
  margin: 10px;
  padding: 15px;
  width: 250px;
  float: left;
}
</style>