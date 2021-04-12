<template>
          <div  class="todo ">

          <v-card  :elevation=" 10 " height="400"  width="200"  class="secondary mx-10 my-16">  

              <v-row class="fill-height white lighten-1"  align="center"  justify="center"  style='overflow:hidden;' >
                  
                  <div class="nametext" id = "id">
                  {{todo.id}} {{todo.name}}
                  </div>


                  <div >
                    <a href="/#/detail" @click="infoImage()" >
                  <v-img
                    v-if="todo.imageUrl" :src="todo.imageUrl"
                
                    max-height="200px"
                    max-width="200px"

                  ></v-img>
                  </a>
                  </div>

                  <v-card-text>

                    <div class = "textdescription ">{{todo.value}}</div>
                    

                  </v-card-text>


                    <v-btn color="primary" @click="editElement()">
                      Modifier
                    </v-btn>

                    <v-btn color="error" @click="deleteElement()">
                    Supprimer 
                    </v-btn>
                  
                  
              </v-row>  
              
          </v-card>
          
      </div>  
</template>


<script>

export class TodoDTO {
    constructor(id = '') {
        this.id = id;
    }
}



export default {
    name:'todo',
    props : {
        todo : Object,
        id : String
    },
    methods : {
        infoImage()
        {
            var idFromChild = this.id ;
            idFromChild = this.todo.id ;
            console.log(idFromChild);
            this.$emit('affiche');

        },
        deleteElement()
        {
           this.$emit('delete');
        },
        editElement()
        {
            this.$emit('edit');
        }
        

    },
    mounted()
    {
    }
}
</script>

<style  scoped>

.textdescription 
{
  font-family:Arial, Helvetica, sans-serif;font-size:20px; text-align: center 
}

.nametext
{
  font-weight:bold;
}


</style>