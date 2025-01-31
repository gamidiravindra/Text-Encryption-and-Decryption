// Encryption function
function encryptText() {
    const inputText = document.getElementById("inputText").value;
    const key = document.getElementById("key").value;

    if (!inputText || !key) {
        alert("Please enter both text and key!");
        return;
    }

    // Combine text and key for encryption
    const combinedText = inputText + key;

    // Base64 encoding
    const encryptedText = btoa(combinedText);
    document.getElementById("outputText").value = encryptedText;
}

// Decryption function
function decryptText() {
    const encryptedText = document.getElementById("inputText").value;
    const key = document.getElementById("key").value;

    if (!encryptedText || !key) {
        alert("Please enter both encrypted text and key!");
        return;
    }

    try {
        // Base64 decoding
        const decryptedCombinedText = atob(encryptedText);

        // Remove the key from the decrypted text
        if (decryptedCombinedText.endsWith(key)) {
            const decryptedText = decryptedCombinedText.slice(0, -key.length);
            document.getElementById("outputText").value = decryptedText;
        } else {
            document.getElementById("outputText").value = "Invalid key!";
        }
    } catch (error) {
        document.getElementById("outputText").value = "Invalid encrypted text!";
    }
}
