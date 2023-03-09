

const textvalue = document.querySelector('.textbox')
const item_lists = document.querySelector('.all-items')
const error_message = document.querySelector('.error-message')

const star_button = document.querySelector('.important')
let numcount = 0
let button_count = 0


document.querySelector('.important').addEventListener
('click', function() {

    star_button.style.backgroundColor = (numcount % 2 == 0) ? 'gold' : 'white';
    numcount += 1

})

document.querySelector('.btn').addEventListener
('click', function () {

    if (!textvalue.value){
        error_message.innerText = "Please don't leave it blank";
        return
    }

    error_message.innerText = ''
    const item_create = document.createElement('li')
    const button_create = document.createElement('button')


    item_create.innerText = textvalue.value
    item_create.style.cssText = (numcount % 2 != 0) ? 'color:white; background-color: gold;' : 'color:black; background-color:white';
    item_create.setAttribute('class','item')
    //item_create.setAttribute('id',`button${button_count}`)



    button_create.innerText = '❌'
    button_create.setAttribute('class', 'delete')

    item_create.appendChild(button_create)
    item_lists.prepend(item_create)

    button_count += 1

    textvalue.value = ''
    textvalue.focus()


})


const items_container = document.querySelector('.all-items');

items_container.addEventListener('click', function(e) {

    if (e.target && e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }
});

