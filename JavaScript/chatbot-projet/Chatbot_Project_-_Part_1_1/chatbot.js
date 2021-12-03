/////////////////////////////////
// Add the botGreeting and botResponse functions
////////////////////////////////

function botGreeting() {
  return "Hello, I'm the Getaway Bot! I want to help you find your dream destination. You can ask me about our current offers, payment, or contact info. Or type 'help'.";
}

function botResponse(userMessage) {
  let response = "";
  if (userMessage) {
    response =
      "I'm not sure I understood your message: '" +
      userMessage +
      "'. Type 'help' to see more options.";
  }
  return response;
}

////////////////////////////////
// Here's the handleInput function
// No need to modify it
////////////////////////////////
function handleInput(userMessage) {
  return botResponse(userMessage);
}

global.botGreeting = botGreeting;
global.botResponse = botResponse;
global.handleInput = handleInput;
