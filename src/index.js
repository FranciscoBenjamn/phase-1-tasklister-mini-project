document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let value = e.target["new-task-description"].value
    let value2 = e.target["due-date"].value
    taskHandler(value, value2)
    document.querySelector('#new-task-description').value = ""
    document.querySelector('#due-date').value = ""
  })
})

function taskHandler(taskName, dueDate){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', (e) => {
    btn.parentElement.remove()
  })

  btn.textContent = ' x '
  btn.style="margin-left:5px"
  li.textContent = `${taskName} is due by ${dueDate}`
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}
