
document.getElementById('registrazione').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const eta = document.getElementById('eta').value;
    const data = document.getElementById('data').value;
    const nazionalita = document.getElementById('nazionalita').value;

    // Create new table row
    const tableBody = document.getElementById('formcreato');
    const newRow = tableBody.insertRow();

    // Insert cells with form values
    newRow.insertCell(0).textContent = nome;
    newRow.insertCell(1).textContent = cognome;
    newRow.insertCell(2).textContent = eta;
    newRow.insertCell(3).textContent = data;
    newRow.insertCell(4).textContent = nazionalita;

    // Reset form
    this.reset();
});
