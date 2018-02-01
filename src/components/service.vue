<template>
<div class="service">
  <code>{{query}}</code>
  <datatable v-bind="$data" />
  <!-- <ul v-if="posts && posts.length">
    <li v-for="(post,index) of posts" :key='index'>
      <p><strong>{{post.id}} - {{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul>
  <ul v-if="errors && errors.length">
    <li v-for="(error,index) of errors" :key='index'>
      {{error.message}}
    </li>
  </ul> -->
</div>
</template>

<script>
import {HTTP} from '../util/http-common';

export default {
  data: () => ({
    columns: [
      { title: 'ID', field: 'id' },
      { title: 'Title', field: 'title' , sortable: true }
    ],
    data: [],
    total: 0,
    query: {}
  }),

  // Fetches posts when the component is created.
  created() {
    HTTP.get(`posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.data = response.data
      this.total = response.data.length
    })
    .catch(e => {
      this.errors.push(e)
    })
    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

<style>
</style>
