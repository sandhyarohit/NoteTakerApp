function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        username: username,
        password: password
    };

    fetch('http://192.168.29.248:80/app/notetaker/create', {
 //   fetch('http://192.168.29.248:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://192.168.29.253'
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            console.log('Response:', response.json());
            throw new Error('Network response not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}