const text = "Hello, my name is Elisabeth.";
const typingText = document.getElementById('writing');
let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 150); // Adjust the typing speed (milliseconds per character)
    } else {
        // Remove the blinking cursor once text is fully typed
        document.querySelector('.cursor').style.display = 'none';
    }
}

setTimeout(typeText, 1000);