function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();

    if (message !== "") {
        var chatMessages = document.getElementById('chat-messages');
        var newMessage = document.createElement('div');
        newMessage.classList.add('chat-message');
        newMessage.textContent = message;

        chatMessages.appendChild(newMessage);
        messageInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
