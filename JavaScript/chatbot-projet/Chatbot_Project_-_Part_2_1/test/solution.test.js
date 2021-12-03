const baseURL = process.env.TEST_BASE_URL;

beforeEach(() => {
  // Reset mock function's states before each test.
  jest.clearAllMocks();
});

// Show logs from the page inside labeled container
const onPageConsole = msg => {
  console.log(`<LOG::page console.${msg.type()}>${msg.text().replace(/\n/g, "<:LF:>")}`);
};

describe("chatbot", () => {
  beforeEach(async () => {
    if (!page.listeners('console').includes(onPageConsole)) {
      page.on('console', onPageConsole);
    }
    await page.goto(baseURL, { waitUntil: "load" });
    // set the fade-ins to 0 ms to prevent timeouts in tests
    await page.evaluate(() => {window.animationDelay = 0})
    await page.click("#chat-circle");
  });

//   it("should show the bot greeting when the chat first opens", async () => {
//     await expect(page).toMatch("Hello, I'm the Getaway Bot! I want to help you find your dream destination. You can ask me about our current offers, payment, or contact info. Or type 'help'.");
//   });
  
//   it("should respond with a generic message when it gets a message from the user", async () => {
//     // submit the form with a message, expect to see the response
//     const message = "hi chatbot";
//     await page.evaluate(() => {
//       // get this same const in the page's context
//       const message = "hi chatbot";
//       $("#chat-input").val(message)
//     });
//     await page.click("#chat-submit");
//     await expect(page).toMatch("I'm not sure I understood your message: '" + message + "'. Type 'help' to see more options.");
//   });
  
    
  it("should show contact info when the user enters 'contact'", async () => {
    // submit the form with a message, expect to see the response
    const message = "contact";
    await page.evaluate(() => {
      // get this same const in the page's context
      const message = "contact";
      $("#chat-input").val(message)
    });
    await page.click("#chat-submit");
    await expect(page).toMatch("We have 24 hour phone support. Our phone number is +01 312 555 8432. We look forward to hearing from you!");
  });
  
    it("should show credit card help message when the user enters 'credit card'", async () => {
    // submit the form with a message, expect to see the response
    const message = "credit card";
    await page.evaluate(() => {
      // get this same const in the page's context
      const message = "credit card";
      $("#chat-input").val(message)
    });
    await page.click("#chat-submit");
    await expect(page).toMatch("You can pay with any major credit card. Enter your card details and billing address at checkout.");
  });
  
  it("should show payment help message when the user enters 'payment'", async () => {
    // submit the form with a message, expect to see the response
    const message = "payment";
    await page.evaluate(() => {
      // get this same const in the page's context
      const message = "payment";
      $("#chat-input").val(message)
    });
    await page.click("#chat-submit");
    await expect(page).toMatch("We have three payment options: credit card, paypal, or apple pay. Choose your preferred method at checkout.");
  });
  
   it("should show help options when the users enters 'help'", async () => {
    // submit the form with a message, expect to see the response
    const message = "help";
    await page.evaluate(() => {
      // get this same const in the page's context
      const message = "help";
      $("#chat-input").val(message)
    });
    await page.click("#chat-submit");
    await expect(page).toMatch("Enter a keyword for help with a topic: contact, payment, credit card, destinations.");
  });
});