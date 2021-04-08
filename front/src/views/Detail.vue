<template>

<div>
    

<v-container>
    <v-row justify="center">


    <div  class="todo " v-for="(todo,index) in todos " :key="index">

        <v-card  :elevation=" 10 " height="400"  width="200"  class="secondary mx-10 my-16  "  >  

            <v-row class="fill-height white lighten-1"  align="center"  justify="center"  style='overflow:hidden;'>
                
                <div>
                {{todo.name}}
                </div>


                <div>
                 <v-img
                  v-if="todo.imageUrl" :src="todo.imageUrl"

                  max-height="200px"
                  max-width="200px"

                 ></v-img>
                 </div>

                <v-card-text>

                  <div>{{todo.value}}</div>
                </v-card-text>

                    <v-btn color="primary">
                      Modifier
                    </v-btn>

                    <v-btn   color="error">
                    Supprimer 
                    </v-btn>
                
            </v-row>  

        </v-card>
    </div>  

</v-row>
  </v-container>



</div>
</template>

<script>

    import axios from 'axios';

    export default {
        name:"Todos",
        data:() => {
            return {
                todos:[],
            };
        },
      mounted()
      {

        axios.get('http://localhost:3000/books/29').then(response => {
          // Si la requête réussi
          
          for(let i = 0 ; i < response.data.length ; i++)
          {

              const newElement = response.data[i];

              try{

              const obj = JSON.stringify(newElement);

              const json = JSON.parse(obj);

              console.log(json.name); //name 
              console.log(json.image); // image
              console.log(json.description); //description

              this.todos.push({    name : json.name,
                                value : json.description,
                                imageUrl : json.image,
                                });


              } catch (e) {
                console.error("Parsing error:", e);
              }

          }

          console.log(this.todos);
        
        }).catch(err => {
          // Si la requête échoue
          console.log(err)
        });
      }
        
    };


</script>

