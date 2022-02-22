const openModal = document.querySelector ('.open-modal'); /*из дом структуры один элемент*/
const modalWrapper = document. querySelector('.modal-wrapper');
const addtodobutton = document. querySelector ('.add-todo-button');
const modalInput = document. querySelector('.modal-input');
const todo = document. querySelector('.todo');
const buttonсancel= document.querySelector('.btn-cancel')

let openedModal = false; 

let todoList = []; /*Пустой массив*/

if(localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displaytodos();
}

function toggleModal(){
    openedModal=!openedModal
    modalWrapper.style = openedModal ? 'display: block;' : 'display:none;'
}


buttonсancel.addEventListener('click', function(event){
    event.preventDefault();
    toggleModal();
    modalInput.value='';
})

openModal.addEventListener('click', function() {
    toggleModal();
    modalInput.focus()
})

addtodobutton.addEventListener('click', function(event){
    event.preventDefault();

    const newtodo= {
        text: modalInput.value, 
        done: false,
        important: false,
    }

    todoList.push(newtodo);

    toggleModal();
    displaytodos();

    modalInput.value=''
})

function displaytodos() {
    let displaytodo='';

    todoList.forEach(function(item, index) {
        displaytodo += `<li>
        <input type="checkbox" 
        id="item_${index}"
        ${item.done ? 'checked' : ''}>
        <label for= "item_${index}"
        ${item.done ? 'class="done"': ''}
        style="${item.important ? 'color:red' : 'color:black'}"
        >
        ${item.text}
        </label>
        </li>
        `
    })

    localStorage.setItem('todo', JSON.stringify(todoList));

    todo.innerHTML = displaytodo;
}

todo.addEventListener('contextmenu', function(event){ //Отвечает за ПКМ
    event.preventDefault();

    todoList.forEach(function(item,index){
        if(item.text === event.target.innerHTML.trim()){
            if (event.ctrlKey || event.metaKey) {
                todoList.splice(index,1);
            } else {
                item.important = !item.important;
            }
        }
    })
    displaytodos();
})

todo.addEventListener ('change', function(event){

    let idinput = event.target.getAttribute('id');
    let forLabel = todo.querySelector('[for=' + idinput + ']');
    let valueLabel = forLabel.innerHTML.trim();

    todoList.forEach(function(item) {
        if(item.text === valueLabel){
            item.done = !item.done;
        }
    })
    displaytodos();
})

