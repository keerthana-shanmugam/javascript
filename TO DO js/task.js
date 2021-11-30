let List = [];

function submitHandler() {
    event.preventDefault();


    const task = document.getElementById("todoTask").value;

    //push the value inside the array
    List.push(task);
    console.log(List);

     const todo = List.length;
     console.log(todo);

     let main = "";
     for (i=0; i < todo; i++){
         const list = List[i];
         let task = "<li>" +list[i]+ "</li>";

         main = main + task;

         const ul = document.getElementById(todoList);
         ul.innerHTML = main;
     }

}