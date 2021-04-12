fetch('http://localhost:3000/animals')
.then(res => res.json())
.then(data => console.table(data))