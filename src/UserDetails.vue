<template>
  <div>ville: {{usr.address.city}}, email: {{usr.email}} <button v-on:click="acceptInvitation">accepter invit</button></div>
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