<template>

<div>


  <h1 >Ajouter votre livre</h1>

  <form  @submit.prevent = "postData" method="post">

    <v-file-input
    @change="fileSelected"
    accept="image/*"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
    label="Avatar"
    v-model= todoInput
    id="File"
    ></v-file-input>


  <v-text-field
    @change="filedescription"
    label="Description"
    placeholder="Placeholder"
    id="description"
    max-width = "150px"
    v-model = txtdescription
  ></v-text-field>

    <v-btn
      class="mx-2 "
      fab
      dark
      color="indigo"
      @click = "addTodo()"
      type="submit"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

  </form>

<v-container>

    <v-row justify="center">

    <div  class="todo " v-for="(todo,index) in todos " :key="index">

        <v-card  :elevation=" 10 " height="300"  width="200"  class="secondary mx-10 my-16">  

            <v-row class="fill-height white lighten-1"  align="center"  justify="center"  style='overflow:hidden;' >
                
                <div>
                {{todo.name}}
                </div>


                <div  >
                  <a href="/#/detail" @click="infoImage($event)" >
                 <v-img
                  v-if="todo.imageUrl" :src="todo.imageUrl"
              
                  max-height="200px"
                  max-width="200px"

                 ></v-img>
                 </a>
                 </div>

                <v-card-text>

                  <div>{{todo.value}}</div>
                </v-card-text>
                
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
              selectedItem : null ,
              todos:[],
              file : null,
              imageUrl : null ,
              image : null,
              fileDescription : null,
              todoInput : null,
              txtdescription:null,
              urlimage : null, 
              itemId : [{id : "tata"},{id : "toto"}]

          };
      },
      methods : {
          addTodo() {
          
              this.todos.push({
                              name : this.file,
                              value : this.fileDescription,
                              imageUrl : this.imageUrl,
                              image : this.image});

              
          },
          infoImage(event)
          {
            console.log(event.target);
          },
          postData()
          {
              axios.post('http://localhost:3000/books',{                 
                  todoInput : this.file ,
                  txtdescription : this.txtdescription,
                  urlimage : this.imageUrl
                  }).then(response => {
                  console.log(response);
              }).catch(err => {
                // Si la requête échoue
                console.log(err.response.data); // => the response payload 
              });
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
            //description
              this.fileDescription  = document.getElementById('description').value;

          }
          
      },
      mounted()
      {

        axios.get('http://localhost:3000/books').then(response => {
          // Si la requête réussi
          
          for(let i = 0 ; i < response.data.length ; i++)
          {

              const newElement = response.data[i];

              try{

              const obj = JSON.stringify(newElement);

              const json = JSON.parse(obj);
 
              this.todos.push({ id : json.id,
                                name : json.name,
                                value : json.description,
                                imageUrl : "https://the-watch-book.com/142-large_default/-francais-millennium-watch-book.jpg",
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

