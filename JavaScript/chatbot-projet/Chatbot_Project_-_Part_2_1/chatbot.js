function botGreeting() {
  return "Hello, I'm the Getaway Bot! I want to help you find your dream destination. You can ask me about our current offers, payment, or contact info. Or type 'help'.";
}

function botResponse(message) {
  return (
    "I'm not sure I understood your message: '" +
    message +
    "'. Type 'help' to see more options."
  );
}

/////////////////////////////////
// Add the new help functions here
////////////////////////////////
function showHelpOptions(helpOptions) {
  return (
    "Enter a keyword for help with a topic: " + helpOptions.join(", ") + "."
  );
}

function contactInfoHelp(userMessage) {
  return "We have 24 hour phone support. Our phone number is +01 312 555 8432. We look forward to hearing from you!";
}

function paymentHelp(payment) {
  if (payment === "credit card") {
    return "You can pay with any major credit card. Enter your card details and billing address at checkout.";
  } else {
    return "We have three payment options: credit card, paypal, or apple pay. Choose your preferred method at checkout.";
  }
}

////////////////////////////////
// See the updated handleInput function below
////////////////////////////////
function handleInput(userMessage) {
  // show the options when the user asks for help
  if (userMessage == "help") {
    const helpOptions = ["contact", "payment", "credit card", "destinations"];
    return showHelpOptions(helpOptions);

    // show the contact info help when the user types 'contact'
  } else if (userMessage == "contact") {
    return contactInfoHelp();

    // show the payment or credit card help
  } else if (userMessage == "payment" || userMessage == "credit card") {
    return paymentHelp(userMessage);

    // the botResponse is now here
  } else {
    return botResponse(userMessage);
  }
}

global.showHelpOptions = showHelpOptions;
global.contactInfoHelp = contactInfoHelp;
global.paymentHelp = paymentHelp;

global.botGreeting = botGreeting;
global.handleInput = handleInput;
