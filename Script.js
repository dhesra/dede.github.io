function hitungBMI() {
    var berat = parseFloat(document.getElementById('berat').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    var heightInMeters = tinggi / 100;
    var bmi = berat / (heightInMeters * heightInMeters);

    var resultElement = document.getElementById('hasil');
    resultElement.innerText = 'BMI Anda: ' + bmi.toFixed(2);
}

function hitungBMI() {
    var berat = parseFloat(document.getElementById('berat').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    var heightInMeters = tinggi / 100;
    var bmi = berat / (heightInMeters * heightInMeters);
    var bmiStatus = getBMIStatus(bmi);

    var resultElement = document.getElementById('hasil');
    resultElement.innerText = 'BMI Anda: ' + bmi.toFixed(2) + '\n' + 'Status: ' + bmiStatus;
}

function getBMIStatus(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal (Ideal)";
    } else if (bmi >= 25.0 && bmi < 29.9) {
        return "Kelebihan Berat Badan";
    } else {
        return "Kegemukan";
    }
}
