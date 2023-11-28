const taskInput = document.querySelector('#taskInput')
const btn1 = document.querySelector('.btn-1');
const lis = document.querySelector('ul.collection')
const li = document.querySelector('li:last-child');
const btn2 = document.querySelector('.btn-2');
const removeBtn = document.querySelector('.fa.fa-remove')
const container = document.querySelector('.container')


btn1.addEventListener('click', clearEvent)
function clearEvent(e) {
    const lie = document.createElement('li')
    lie.className = 'collection-item';
    lie.innerHTML = `
    ${taskInput.value}
   <a href="#">
<i class="fa fa-remove"></i></a>
   `;
   lis.appendChild(lie)
    taskInput.value = "";


    
    // e.preventDefault();
}
///Delete Button 
container.addEventListener('click', delFunction)
function delFunction(e) {
    if (e.target.className === "fa fa-remove"){
    // if (e.target.classList.contains('fa fa-remove')){
        e.target.parentElement.parentElement.remove()
        // console.log(e.target)
        // e.target.parentElement.parentElement.remove()
    }else{
        console.log('not working')
    }

}