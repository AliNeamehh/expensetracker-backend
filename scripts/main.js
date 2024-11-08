let userId=null;

document.getElementById('login-form').addEventListener('submit',(e)=>{
 e.preventDefault();
 const name=document.getElementById('username').value;
 console.log(name);
    fetch('/api/addUser.php',{
        method:'Post',
        headers:{'Content-Type': 'application/json'},
        body :JSON.stringify({ name })

    })
    .then(response=>response.json())
    .then(data=>{
        userId=data.id;
        document.getElementById('login-form').style.display='none';
        document.getElementById('transaction-form').style.display='block';

    });
});