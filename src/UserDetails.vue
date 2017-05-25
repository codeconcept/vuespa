<template>
  <div>
      <h2>Détails de l'utilisateur {{this.$route.params.id}}</h2>
    	<p><router-link to="/users">retour vers la liste</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'user-details'
}
</script>

<style>

</style>