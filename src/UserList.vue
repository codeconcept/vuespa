<template>
<div>
  <h3>{{sectionTitle}}</h3>
  <ul>
    <li v-for="user in data">
      <user-summary v-bind:usr="user" v-on:accept="registerUser(user)"></user-summary>
    </li>
  </ul>

      <div>
      Utilisateurs ayant accepté l'invitation : 
      <pre>{{usersWhoWillCome}}</pre>
    </div>
</div>
</template>

<script>
import UserSummary from './UserSummary.vue';

export default {
  name: 'user-list',
  components: {
    'user-summary': UserSummary
  },
  methods: {
    registerUser: function(user) {
      user.hasAccepted = true;
      this.usersWhoWillCome.push(user);
      console.log('usersWhoWillCome ', this.usersWhoWillCome)
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