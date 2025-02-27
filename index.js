

function submitData(name,email){
    let body = document.querySelector('body')
    return fetch("http://localhost:3000/users", {method:"POST", 
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })})
    .then(res => res.json())
    .then(data => {
      let p = document.createElement('p')
      p.textContent = data.id
      body.appendChild(p)
    }).catch(error => {
      let p = document.createElement('p')
      p.textContent = error.message
      body.appendChild(p)
    });
}
