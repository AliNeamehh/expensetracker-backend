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
         loadTransaction();
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

function loadTransaction(){
    fetch(`./api/getTransactions.php?user_id=${userId}`)
    .then(response=>response.json())
    .then(transactions=>{
        document.getElementById('transaction-list').innerHTML='';
        let total=0;
        transactions.forEach(transaction=>{
            const li=document.createElement('li');
            li.textContent=`${transaction.description}: $${transaction.amount}(${transaction.type})`;
            document.getElementById('transaction-list').appendChild(li);

            total +=transaction.type==='income'? transaction.amount: -transaction.amount;

        });
        document.getElementById('budget').textContent=total;
    });
}



