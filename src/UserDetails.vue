<template>
  <div class="user-details">
    nom : {{usr.name}} <br>
    ville: {{usr.address.city}} <br> 
    email: {{usr.email}} <br>
    <button v-on:click="acceptInvitation">accepter l'invitation</button>
  </div>
</template>

<script>
export default {
  name: 'user-details',
  methods: {
    acceptInvitation: function() {
      this.$emit('accept');
    }
  },
  props: ['usr']
}
</script>

<style>
.user-details {
  border: 2px solid grey;
  margin: 10px;
  padding: 15px;
  width: 250px;
  float: left;
}
</style>