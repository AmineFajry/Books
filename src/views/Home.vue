<template>

<div class = "todos">
<h1>Vos livres</h1>

  <v-file-input
    @change="fileSelected"
    accept="image/*"
    label="Mettez votre livre"
    v-model="todoInput"
    id="File"
    name="File"
  >
  </v-file-input>
  

    <v-btn
      class="mx-2 my-3"
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

        <v-card  :elevation=" 10 " height="100"  width="100"  class="secondary mx-5 my-5 "  >  

            <v-row class="fill-height blue lighten-1"  align="center"  justify="center"  >
                
                {{todo.name}}
                
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
            file : null
           
        };
    },
    methods : {
        addTodo() {
        
            this.todos.push({name : this.file });

        },

            
        fileSelected(){
        

            this.file = document.getElementById('File').files[0].name;
        }
    }

};
</script>

