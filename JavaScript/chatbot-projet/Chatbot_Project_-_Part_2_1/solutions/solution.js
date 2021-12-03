// v1
// write a function that says hello from the bot, to be called when the chat starts
function botGreeting() {
  return "Hello, I'm the Getaway Bot! I want to help you find your dream destination. You can ask me about our current offers, payment, or contact info. Or type 'help'.";
}

// v2
// When the bot doesn't understand, we still want the bot to give a response to the user. Write a function `botResponse` that explains that the bot didn't understand. It should say "I'm not sure I understood your message: '[message]'. Type 'help' to see more options."
function botResponse(message) {
  return (
    "I'm not sure I understood your message: '" +
    message +
    "'. Type 'help' to see more options."
  );
}

// v2
function showHelpOptions(options) {
  let response = "Enter a keyword for help with a topic: ";
  response += options.join(", ") + ".";
  return response;
}

// v2
// contactInfoHelp: return a string with some info about a phone number to call / email address / location
// (curriculum dev fyi - https://softwareengineering.stackexchange.com/questions/376535/whats-the-phone-number-equivalent-of-example-org)
function contactInfoHelp() {
  return "We have 24 hour phone support. Our phone number is +01 312 555 8432. We look forward to hearing from you!";
}

// v2
// paymentHelp: describe the payment options
function paymentHelp(paymentType) {
  if (paymentType == "credit card") {
    return "You can pay with any major credit card. Enter your card details and billing address at checkout.";
  } else {
    return "We have three payment options: credit card, paypal, or apple pay. Choose your preferred method at checkout.";
  }
}

const helpOptions = [
  "contact",
  "payment",
  "credit card",
  "destinations", // only in v3
];

function handleInput(userMessage) {
  if (userMessage == 'help') {
    return showHelpOptions(helpOptions);
  } else if (userMessage == 'contact') {
    return contactInfoHelp();
  } else if (userMessage == 'payment' || userMessage == 'credit card') {
    return paymentHelp(userMessage);
  } else {
    return botResponse(userMessage);
  }
}


global.showHelpOptions = showHelpOptions;
global.contactInfoHelp = contactInfoHelp;
global.paymentHelp = paymentHelp;

global.botGreeting = botGreeting;
global.handleInput = handleInput;