<template>
  <div>
    <div id="app">
      <user-list v-bind:data="users" v-bind:section-title="title" v-bind:users-coming="usersWhoWillCome"></user-list> 
    </div>

    <div>
      Utilisateurs ayant accepté l'invitation : 
      <pre>{{usersWhoWillCome}}</pre>
    </div>
  </div>
</template>

<script>
import UserList from './UserList.vue';

export default {
  name: 'app',
  components: {
    'user-list': UserList
  },
  data () {
    return {
      users: [],
      postsUrl: 'https://jsonplaceholder.typicode.com/users',
      title: 'Mes 10 premiers utilisateurs',
      usersWhoWillCome: [],
    }
  },
  created: function() {
      axios.get(this.postsUrl)
              .then((response) => {    //!\ arrow function
                  console.log(response);
                  this.users = response.data;   //!\this.users
              });
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
