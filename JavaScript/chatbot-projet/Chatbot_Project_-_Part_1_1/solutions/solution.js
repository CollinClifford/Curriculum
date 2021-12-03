// v1
// write a function that says hello from the bot, to be called when the chat starts
function botGreeting() {
  return "Hello, I'm the Getaway Bot! I want to help you find your dream destination. You can ask me about our current offers, payment, or contact info. Or type 'help'.";
}

// When the bot doesn't understand, we still want the bot to give a response to the user. Write a function `botResponse` that explains that the bot didn't understand. It should say "I'm not sure I understood your message: '[message]'. Type 'help' to see more options."
function botResponse(message) {
  return (
    "I'm not sure I understood your message: '" +
    message +
    "'. Type 'help' to see more options."
  );
}


function handleInput(userMessage) {
  return botResponse(userMessage);
}




global.botGreeting = botGreeting;
global.botResponse = botResponse;
global.handleInput = handleInput;