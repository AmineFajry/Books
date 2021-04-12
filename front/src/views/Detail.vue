<template>

<div>
    

<v-container>
    <v-row justify="center">


    <div  class="todo ">

      <homecomponent  v-for="(todo,index) in todos " :key="index" :todo = "todo" />
        
    </div>  

</v-row>
  </v-container>



</div>
</template>

<script>
    import axios from 'axios';
    import Homecomponent from '../components/Homecomponent.vue';

    export default {
        components: { Homecomponent },
        name:"Todos",
        data:() => {
            return {
              todos:[],
              id :' '
            };
        },
        methods:
        {

        },
        mounted()
        {

          let id = 29;
          axios.get(`http://localhost:3000/books/${id}`).then(response => {
            // Si la requête réussi
            
            for(let i = 0 ; i < response.data.length ; i++)
            {

                const newElement = response.data[i];

                try{

                const obj = JSON.stringify(newElement);

                const json = JSON.parse(obj);



                this.todos.push({ 
                                  id : json.id,
                                  name : json.name,
                                  value : json.description,
                                  imageUrl : json.image,
                                  });


                } catch (e) {
                  console.error("Parsing error:", e);
                }

            }


        
        }).catch(err => {
          // Si la requête échoue
          console.log(err)
        });
      }
        
    };


</script>

