document.getElementById('loginButton').addEventListener('click', async () => {
    try {
        // Get the assertion request options from your server
        const publicKeyCredentialRequestOptions = await fetch('https://yourserver.com/auth/challenge', {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.json());

        // Requesting an assertion
        const assertion = await navigator.credentials.get({
            publicKey: publicKeyCredentialRequestOptions
        });

        // Verify the assertion with your server
        const response = await fetch('https://yourserver.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(assertion),
            credentials: 'include'
        });

        if (response.ok) {
            console.log('Login successful!');
            // Redirect or update UI accordingly
        } else {
            console.error('Login failed');
        }
    } catch (err) {
        console.error('Error:', err);
    }
});
