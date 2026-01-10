/*to do app logic
1-take what is typed
2-add to an array
3-save the arrayin local storage
4-read array and show the list 
*/

/*
three steps 
1 get_todos()
2 add()
3 show()
*/

/*
    This function get the tasks from input or local storage.
*/
function get_todos() {
    /*
       create an empty array to store task
    */
   var todos = new Array;

   /*
       Get the saved task list from the browser memory
    */
   var todos_str = localStorage.getItem('todo');

   /*
       if something is saved convert it back to  a js array
    */
   if (todos_str !== null) {
    todos = JSON.parse(todos_str);
   }
   /*
       Return the array of task
    */
   return todos;

}


/*
    This function adds a new task
*/
function add() {
     /*
       Get the value typed in the input box.
    */
   var task = document.getElementById('task').value;

    /*
       Get the existing tasks
    */
   var todos = get_todos();

    /*
       Add the new task to the array.
    */
   todos.push(task);

    /*
       save the updated array backinto local storage.
    */
   localStorage.setItem('todo', JSON.stringify(todos));

    /*
        clear the input box after adding.
    */
   document.getElementById('task').value ="";

    /*
       Refresh the displayed task lisk
    */
   show();

    /*
       prevent page reload.
    */
   return false;
   

}


/*
    This function displays tasks on the screen.
*/
function show() {

    /*
       Get the saved tasks
    */
   var todos = get_todos();

    /*
       start building the html list
    */
   var html = '<ul>';

    /*
       Loop through each task.
    */
   for (var i= 0; i < todos.length; i++) {
        /*
            add each task  as  a list item with a remove button.
        */
       html += '<li>'
             + todos[i]
             + '<button class="remove" id="' + i + '">X</button>'
             + '</li>';
   }

    /*
       close the list
    */
    html += '</ul>';

    /*
       Displaythe list inside the todos div
    */
   document.getElementById('todos').innerHTML = html;

    /*
       Get all the remove buttons
    */
   var buttons = document.getElementsByClassName('remove');

    /*
       attach click event to each remove button
    */
   for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',remove);
   }
   

}

/*
    Run add() when add button is clicked
*/

document.getElementById('add').addEventListener('click', add);

/*
    show saved tasks when page loads.
*/
show();


 /*
       This function crafted to remove the task frrom the list
 */
function remove() {
    /*
       Get the index number from the button id
    */
   var id = this.getAttribute('id');

    /*
       Get the existing todo list
    */
   var todos = get_todos();

    /*
       Remove one item at position = id
    */
   todos.splice(id,1);

    /*
       save the updated array back to local storage.
    */
   localStorage.setItem('todo', JSON.stringify(todos));

    /*
       Refresh the list on the screen
    */
   show();

    /*
       preventing unecessary page reload
    */
   return false;
}