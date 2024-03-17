function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
}

var data = {
    username : username,
    password : password
};

fetch('http://localhost:3000', {
    method : 'POST',
    headers : {
        'Content-Type': 'application/json',
    },
    body : JSON.stringify(data),
})
.then(response => {
    if(!response.ok) {
        throw new Error('Network response not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Response :', data);
})
.catch(error => {
    console.error('Error' : error);
});