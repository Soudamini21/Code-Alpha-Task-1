function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) {
        alert('Please enter your birthdate.');
        return;
    }

    const birthDate = new Date(birthdateInput);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    // Adjust if the birthdate has not occurred yet this year
    if (months < 0) {
        years--;
        months += 12;
    } else if (months === 0 && today.getDate() < birthDate.getDate()) {
        years--;
        months = 11;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `You are ${years} years and ${months} months old.`;
    resultElement.classList.add('visible');
}

function resetCalculator() {
    document.getElementById('birthdate').value = '';
    const resultElement = document.getElementById('result');
    resultElement.innerText = '';
    resultElement.classList.remove('visible');
}
