const url = 'http://localhost:3000/users';
fetch(url).then((respone) => {
  console.log(respone);
  return respone.json();
})
.then((jsonData) => {
  console.log(jsonData)
  return jsonData;
})
.then((users) => {
  const display = document.getElementById('display');
  
  const ul = document.createElement('ul');
  ul.classList.add('grid', 'gap-4', 'grid-cols-2', 'p-5', 'bg-green-300');
  display.insertAdjacentElement('beforeend', ul);

  users.forEach((user) => {
    const li = document.createElement('li');
    li.classList.add('rounded-xl');
    li.style.backgroundColor = user.color;
    li.innerText = 'Name: ' + user.firstName + '\n ' + 'Lastname: ' + user.lastName + '\n' + 'Username: ' + user.username;
    ul.insertAdjacentElement('beforeend', li)

  });
  
});
