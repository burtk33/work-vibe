const signupHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const first_name = document.querySelector('#first-signup').value.trim();
    const last_name = document.querySelector('#last-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign in');
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupHandler);