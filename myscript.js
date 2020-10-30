
  


/** Create a close button to each item in the list.. */

/*var list = document.getElementsByTagName('li');
var i;
for (i = 0; i < list.length; i++) {
    var span = document.createElement('span');      // <span></span>
    var text = document.createTextNode("\u00D7");   // X
    span.appendChild(text);                         // <span>X</span>
    span.className = "close";
    list[i].appendChild(span);
}
*/
// Click on a close button to hide the current list item.
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'None'
    }
}


function newTodo() {

    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    var li = document.createElement('li');      // <li></li>
    li.appendChild(text);                       //<li>Something Here..</li>
    if (inputValue === '') {
        alert('Add food items for recipes')
    } else {
        document.getElementById('myList').appendChild(li);
        document.getElementById('myInput').value = '';
    }

    var span = document.createElement('span');      // <span></span>
    var text = document.createTextNode("\u00D7");   // X
    span.appendChild(text);                         // <span>X</span>
    span.className = "close";
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'None'
        }
    }

}

function removeAll() {
    //var list = document.getElementById('myList');
    var list = document.getElementsByTagName('ol');
    list[0].innerHTML = "";
}


function validation()
{
var name = document.getElementById("fname").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

if(fname.length<10){
    text="please enter name";
    error_message.innerHTML = text;
    return false;
}

if(email.indexOf("@")== -1 || email.length < 8){
    text="please enter valid email";
    error_message.innerHTML = text;
    return false;
}

if(message.length<=150){
    text="please enter more than 150 words";
    error_message.innerHTML = text;
    return false;
}

alert("submitted successfully!")
return true;
}