document.addEventListener( 'DOMContentLoaded',function () {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');

    generateBtn.addEventListener('click', function () {
        const passwordLength = document.getElementById('passwordLength').value;
        const includeUppercase = document.getElementById('uppercase').checked;
        const includeLowercase = document.getElementById('lowercase').checked;
        const includeNumbers = document.getElementById('numbers').checked;
        const includeSymbols = document.getElementById('symbols').checked;

        const generatedPassword = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

        document.getElementById('generatedPassword').value = generatedPassword;
    });

    copyBtn.addEventListener('click', function () {
        const generatedPassword = document.getElementById('generatedPassword').value;
        
        if (generatedPassword) {
            navigator.clipboard.writeText(generatedPassword);
            alert('Password copied to clipboard!');
        }
    });

    function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
        let characters = '';
        if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) characters += '0123456789';
        if (includeSymbols) characters += '!@#$%^&*()-=_+[]{}|;:,.<>?';

        if (!characters) {
            alert('Error: You must include at least one character set.');
            return null;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return password;
    }
});
