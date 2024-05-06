function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic example using btoa() for encoding (not secure for real applications)
    const encoded = btoa(username + ':' + password);
    localStorage.setItem('credentials', encoded);
    alert('Registration Complete. Your data is saved locally.');
}
