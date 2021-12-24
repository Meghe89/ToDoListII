let taskBox = document.querySelector('.items');
let clearBtn = document.querySelector('#clearBtn');
let input = document.querySelector('#input');

function add() {
    if (!input.value) {
        input.style.border = "1px solid #ff0000";
    } else {
        input.style.border = "1px solid #dbdbdb";
        let task = document.createElement('li');
        taskBox.appendChild(task);
        task.classList.add('item');
        let text = document.createElement('span');
        task.appendChild(text);
        text.classList.add('li-text');
        text.innerText = input.value;
        let removeBtn = document.createElement('span');
        task.appendChild(removeBtn);
        removeBtn.innerHTML = '<i class ="fas fa-trash" onclick="deleTask(this)"></i>';
        input.value = "";
    }
}

function deleTask(a) {
    let deleteLi = a.parentElement.parentElement;
    deleteLi.style.display = 'none';
}