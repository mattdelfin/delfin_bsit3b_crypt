function encrypt(text, shift) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { 
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) { 
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char;
    }).join('');
}

function decrypt(text, shift) {
    return encrypt(text, 26 - shift); 
}

function encryptText() {
    const encrypted = document.getElementById('encrypted-text');
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);

    if (encrypted.style.display === 'block') {
        encrypted.style.display = 'none';
    } else {
        encrypted.textContent = encrypt(text, shift);
        encrypted.style.display = 'block';
        document.getElementById('decrypted-text').style.display = 'none';
    }
}

function decryptText() {
    const decrypted = document.getElementById('decrypted-text');
    const encryptedText = document.getElementById('encrypted-text').textContent;
    const shift = parseInt(document.getElementById('shift').value);

    if (decrypted.style.display === 'block') {
        decrypted.style.display = 'none';
    } else {
        decrypted.textContent = decrypt(encryptedText, shift);
        decrypted.style.display = 'block';
    }
}

function openTab(evt, tabName) {
    const tabcontents = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");
    Array.from(tabcontents).forEach(content => {
        content.style.display = "none";
    });
    Array.from(tablinks).forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const tabcontents = document.getElementsByClassName("tabcontent");
    Array.from(tabcontents).forEach(content => {
        content.style.display = "none";
    });
    document.querySelector('.tablinks').click();
});