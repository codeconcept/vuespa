<template>
<div>
  <h3>{{sectionTitle}}</h3>
  <ul>
    <li v-for="user in data">
      <user-details v-bind:usr="user" v-on:accept="registerUser(user)"></user-details>
    </li>
  </ul>
</div>
</template>

<script>
import UserDetails from './UserDetails.vue';

export default {
  name: 'user-list',
  components: {
    'user-details': UserDetails
  },
  methods: {
    registerUser: function(user) {
      console.log(user);
      user.hasAccepted = true;
      this.usersComing.push(user);
    }
  },    
  data: function() {
    return {
      usersWhoWillCome: []
    }
  },
  props: ['data', 'sectionTitle', 'usersComing']
  }
</script>