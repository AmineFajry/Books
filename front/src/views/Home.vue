<template>
<div>

  <h2>Cherchez un livre :   <input type="search" id="mySearch" @keyup="search_filter()" placeholder="Recherche..." title="Recherche"></h2>


  <h1>Ajouter votre livre</h1>

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

      <v-row justify="center" id="list_coontainer">

        <homecomponent  v-for="(todo,index) in todos " :key="index" :todo = "todo" @delete="deleteElement(todo.id)" @edit="editElement(todo.id)" />

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
              selectedItem : null ,
              todos:[],
              todos_tmp:[],
              file : null,
              imageUrl : null ,
              image : null,
              fileDescription : null,
              todoInput : null,
              txtdescription:null,
              urlimage : null, 
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
          deleteElement(id)
          {

              
              axios.delete(`http://localhost:3000/books/${id}`,{                 
                  todoInput : this.file ,
                  txtdescription : this.txtdescription,
                  urlimage : this.imageUrl
                  }).then(response => {
                  console.log(response);

                        
              }).catch(err => {
                // Si la requête échoue
                console.log(err.response.data); // => the response payload 
              });


              window.location.reload();
              

          },
          editElement(id)
          {

            let new_name = prompt(`Renseingez le nouveau nom :`, 'nom par defaut');
            let new_description = prompt('Renseingez la nouvelle description :');
           
            let ifConfirm = confirm('Vous voulez confirmer le changement ? ');
            if(ifConfirm){
              axios.patch(`http://localhost:3000/books/${id}`,{   

                  todoInput : new_name ,
                  txtdescription : new_description ,

                    }).then(response => {
                    console.log(response);

                          
                }).catch(err => {
                  // Si la requête échoue
                  console.log(err.response.data); // => the response payload 
                });

                window.location.reload();
            }


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

          },
          search_filter(){



            let myInput = document.getElementById("mySearch")
            let maList = document.getElementById("list_coontainer")
            let counter = 0
            maList.childNodes.forEach(element => {
              if(this.todos[counter].name.toUpperCase().includes(myInput.value.toUpperCase())){
                element.style.display = "";

              }else{
                element.style.display = "none";
              }
              counter+=1
            });
            


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



