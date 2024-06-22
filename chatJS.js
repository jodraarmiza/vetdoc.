document.getElementById('sendButton').addEventListener('click', function() {
    var chatContent = document.getElementById('chatContent');
    var chatInput = document.getElementById('chatInput');

    if (chatInput.value.trim() !== "") {
        var messageCard = document.createElement('div');
        messageCard.classList.add('message-card', 'sender');

        var message = document.createElement('div');
        message.classList.add('message');
        message.innerHTML = '<p>' + chatInput.value + '</p>';

        messageCard.appendChild(message);
        chatContent.appendChild(messageCard);

        chatInput.value = '';
        chatContent.scrollTop = chatContent.scrollHeight; // Scroll to the bottom
    }
});

document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('sendButton').click();
    }
});
