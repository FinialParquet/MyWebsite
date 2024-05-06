document.getElementById('registerButton').addEventListener('click', async () => {
    try {
        // Obtain parameters for the public key from your server
        const publicKeyCredentialCreationOptions = await fetch('https://yourserver.com/auth/register', {
            method: 'GET', // Or POST, depending on how your server is set up
            credentials: 'include'
        }).then(response => response.json());

        // Create a new credential
        const newCredential = await navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions
        });

        // Send the new credential to the server to register it
        await fetch('https://yourserver.com/auth/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCredential),
            credentials: 'include'
        });

        console.log('Device registered successfully');
    } catch (err) {
        console.error('Registration failed:', err);
    }
});
