//JAVASCRIPT
const users = [
  {name: 'kranti', age: 10},
  {name: 'kumar', age: 20},
  {name: 'reddy', age: 30},
  {name: 'kommidy', age:40}
]

const filteredUser = users.filter(user=> user.age > 20)

const app = document.getElementById('root')

filteredUser.map(({name, age})=>{
  const dataToShow= `${name} : ${age}`
  app.innerHTML = dataToShow
})

//HTML, JAVASCRIPT
<div id="root">
  <ul id="userlist"></ul>	
	<script type="text/javascript">
		const users = [
			{name: 'kranti', age: 10},
			{name: 'kumar', age: 20},
			{name: 'reddy', age: 30},
			{name: 'kommidy', age:40}
		]

		const filteredUsers = users.filter(user=> user.age> 20)
		const userdata = document.getElementById('userlist')
		filteredUsers.forEach(user=> {
			const li = document.createElement('li')
			li.textContent = `${user.name} ${user.age}`
			userdata.appendChild(li)
		})
	</script>
</div>
