<template>
<v-app>
      <v-app-bar app
            color="primary lighten-1"
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
            :to="link.path"
          >
            {{ link.title }}
          </v-btn>

        </v-row>

      </v-app-bar>



  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },


  data: () => ({
    links: [
      {title : 'Home' , path:'/'},
      {title : 'About Us' , path : '/about'},
      {title:'Team',path:'/team'},
      {title:'Services',path:'/services'},
      {title:'Blog',path:'/blog'},
      {title:'Contact Us',path:'/contact'},
      {title:'Panier',path:'/panier'},
    ],

    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' , path : '/dashboard'},
      { title: 'Photos', icon: 'mdi-image', path : '/photos' },
      { title: 'Help', icon: 'mdi-help-box', path : '/help' },
    ],
    right: null
  })


}
</script>
