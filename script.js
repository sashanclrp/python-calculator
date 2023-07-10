function calculateSum() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'num1': num1, 'num2': num2 }),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').value = data.result;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}