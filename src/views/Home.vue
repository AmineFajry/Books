<template>

<div>

    <h1>Ajouter votre livre</h1>
    <v-file-input
    @change="fileSelected"
    :rules="rules"
    accept="image/*"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
    label="Avatar"
    v-model="todoInput"
    id="File"
    name="File"
    ></v-file-input>

  <v-text-field
    @change="filedescription"
    label="Description"
    placeholder="Placeholder"
    outlined
     id="description"
     max-width = "150px"
  ></v-text-field>
      

  

    <v-btn
      class="mx-2 "
      fab
      dark
      color="indigo"
      @click = "addTodo()"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>

    </v-btn>

<v-container>

    <v-row justify="center">

    <div  class="todo " v-for="(todo,index) in todos " :key="index">

        <v-card  :elevation=" 10 " max-height="200"  max-width="200"  class="secondary mx-10 my-16  "  >  

            <v-row class="fill-height white lighten-1"  align="center"  justify="center"  >
                
               
                {{todo.name}}

                 <v-img
                  v-if="imageUrl" :src="imageUrl"

                  max-height="200"
                  max-width="200"

                 ></v-img>

                {{todo.desc}}

                
                
            </v-row>  

        </v-card>
    </div>  

</v-row>
  </v-container>


</div>
</template>

<script>



export default {
    name:"Todos",
    data:() => {
        return {
            todoInput:'',
            todos:[],
            file : null,
            imageUrl : null ,
            image : null,
            fileDescription : null

        };
    },
    methods : {
        addTodo() {
        
            this.todos.push({name : this.file,
                             desc : this.fileDescription});

        },

            
        fileSelected(){
            //name 
             this.file = document.getElementById('File').files[0].name;

            //image
             let fileImage = this.file ; 
             fileImage = document.getElementById('File').files[0]; 
             this.image = fileImage;
             this.imageUrl = URL.createObjectURL(fileImage);

    
           
        },

        filedescription()
        {
            this.fileDescription  = document.getElementById('description').value;

        }
    }


};





</script>

