let userId=null;

document.getElementById('login-form').addEventListener('submit',(e)=>{
 e.preventDefault();
 const name=document.getElementById('username').value;
    fetch('./api/addUser.php',{
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

document.getElementById('transaction-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    fetch('./api/addTransaction.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, description, amount, type })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Transaction added:', data);
     
    });
});


