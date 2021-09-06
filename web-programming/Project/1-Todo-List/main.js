const addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function () {
    const value = document.querySelector('#txt').value;

    if (value) {
        addListTodo(value);
        document.querySelector('#txt').value = '';
    }
});

function addListTodo(text) {
    const list = document.querySelector('#todo');
    const item = document.createElement('li');
    item.textContent = text;

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.addEventListener('click', removeList);

    const complete = document.createElement('button');
    complete.classList.add('complete');
    complete.addEventListener('click', completeList);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    // 항상 최신순으로 업데이트
    list.insertBefore(item, list.childNodes[0]);
}

function removeList() {
    const item = this.parentNode.parentNode; // li
    const parent = item.parentNode; // ul

    parent.removeChild(item);
}

function completeList() {
    const item = this.parentNode.parentNode;
    const parent = item.parentNode;
    const id = parent.id;

    const target = id === 'todo' ? document.querySelector('#completed') : document.querySelector('#todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}
