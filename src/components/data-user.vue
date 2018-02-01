<template lang="html">

  <div id="tabledemo">
    <h3>Vue Datatable example</h3>
      Filter by anything: <input v-model="search">
    <hr>
      <data-table :users="filteredUsers"></data-table>
  </div>

</template>

<script lang="js">
  export default  {
  data() {
    return {
    users: [],
    search: ''
    }
  },
  computed: {
    filteredUsers: function () {
      let self = this
      let search = self.search.toLowerCase()
      return self.users.filter(function (user) {
        return 	user.username.toLowerCase().indexOf(search) !== -1 ||
          user.name.toLowerCase().indexOf(search) !== -1 ||
          user.phone.indexOf(search) !== -1 ||
          user.email.toLowerCase().indexOf(search) !== -1 ||
          user.website.toLowerCase().indexOf(search) !== -1
      })
    }
  },
  mounted() {
    let vm = this
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      success(res) {
        console.log(res)
        vm.users = res
      }
    })
  }
}
</script>
