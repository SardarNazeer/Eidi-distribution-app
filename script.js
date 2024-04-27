let senderName = '';
let recipientName = '';
let selectedNotes = [];

function selectCurrency(noteValue) {
    const index = selectedNotes.indexOf(noteValue);
    if (index === -1) {
        selectedNotes.push(noteValue);
    } else {
        selectedNotes.splice(index, 1);
    }
}

function sendEidi() {
    senderName = document.getElementById('sender').value.trim();
    recipientName = document.getElementById('recipient').value.trim();

    if (senderName === '' || recipientName === '' || selectedNotes.length === 0) {
        alert('Please fill all fields and select at least one currency note.');
        return;
    }

    const totalAmount = selectedNotes.reduce((acc, curr) => acc + curr, 0);

    alert(`Amount: PKR ${totalAmount}\nReciver: ${recipientName}`);
}
