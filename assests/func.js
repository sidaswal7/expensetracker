
let form = document.querySelector('form');
let ul = document.querySelector('ul');
let addbtn = document.querySelector('.add-btn');

form.addEventListener('submit', function handleSubmit(event){
    event.preventDefault();

    let amount = event.target.amount.value;
    let description = event.target.description.value;
    let category = event.target.category.value;
    let expense = {amount,description,category};

    localStorage.setItem(amount,JSON.stringify(expense));
    displayDetails(expense);
})

function displayDetails(expense){
    let li = document.createElement('li');
    li.innerText = `${expense.amount} - ${expense.description} - ${expense.category}`;
    let deletebtn = document.createElement('button');
    deletebtn.className= 'delete-btn';
    deletebtn.innerText = 'Delete';
    deletebtn.type = 'button';
    deletebtn.onclick = () =>{
        ul.removeChild(li);
        localStorage.removeItem(expense.amount)
    }
    let editbtn = document.createElement('button');
    editbtn.className = 'edit-btn';
    editbtn.innerText = 'Edit';
    editbtn.type = 'button'
    editbtn.onclick = () =>{
        ul.removeChild(li);
        localStorage.removeItem(expense.amount);
        document.getElementById('amount').value = expense.amount;
        document.getElementById('description').value = expense.description;
        document.getElementById('category').value = expense.category;
    }
    li.append(deletebtn, editbtn);
    ul.append(li);

}