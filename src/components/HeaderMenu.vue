<template lang="html">

    <div class="menu-links">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/service">Service</router-link>
      <router-link to="/user">User</router-link>
    </div>

</template>

<script lang="js">
  export default  {
    name: 'headerMenu',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style>
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: #555;
  margin-right: 30px;
}
</style>
