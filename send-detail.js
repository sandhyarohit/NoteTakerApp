function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        username: username,
        password: password
    };

    fetch('http://192.168.29.248:80/app/notetaker/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://192.168.29.253'
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorResponse => {
                throw new Error('Network response not ok: ' + JSON.stringify(errorResponse));
            });
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
