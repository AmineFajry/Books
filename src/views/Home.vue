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
      class="mx-2"
      fab
      dark
      color="indigo"
      @click = "addTodo()"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>

    </v-btn>

    <div class="todo" v-for="(todo,index) in todos " :key="index" >
        <input type="checkbox" name="" id="" :checked='todo.checked'>
        <span>{{todo.name}}</span>
    </div>  


    <!-- <div class="todos">
        <h1>Mes taches</h1>
        <input type="text" placeholder="Nouvelle tache" v-model="todoInput"/>
        <button @click = "addTodo()" >Ajouter une tache</button>
        <div class="todo" v-for="(todo,index) in todos " :key="index" >
            <input type="checkbox" name="" id="" :checked='todo.checked'>
            <span>{{todo.name}}</span>
        </div>  
    </div>--> 



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
        
            this.todos.push({name : this.file , checked : false });

        },

            
        fileSelected(){
        

            this.file = document.getElementById('File').files[0].name;
        }
    }

};
</script>

<style lang="scss" scoped>

</style>