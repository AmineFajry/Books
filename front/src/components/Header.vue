<template>
  <v-app-bar app
            color="primary lighten-1"
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
          <v-btn
            v-for="(link,index) in links"
            :key="index"
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
</template>

<script>
    export default {
    data: () => ({
        links: [
        {title : 'Home' , path:'/'},
        {title : 'About Us' , path : '/about'},
        {title:'Team',path:'/team'},
        {title:'Services',path:'/services'},
        {title:'Forum',path:'/forum'},
        {title:'Contact Us',path:'/contact'},
        {title:'Panier',path:'/panier'},
        ],

        right: null
    })
    }
</script>
