require('../chatbot.js');

describe("chatbot functions", () => {
  describe("showHelpOptions", () => {
    it("returns the correct help options for sample options", () => {
      expect(showHelpOptions(["option1", "option2", "option3", "option4"]))
        .toEqual("Enter a keyword for help with a topic: option1, option2, option3, option4.");
    })
      
    it("returns the correct help options for sample options", () => {
      expect(showHelpOptions(["contact","payment","credit card","destinations"]))
        .toEqual("Enter a keyword for help with a topic: contact, payment, credit card, destinations.");
    })
  })
  
  describe("contactInfoHelp", () => {
    it("returns a string with the contact info", () => {
      expect(contactInfoHelp()).toEqual("We have 24 hour phone support. Our phone number is +01 312 555 8432. We look forward to hearing from you!");
    })
  })
  
  describe("paymentHelp", () => {
    it("returns the right message for 'credit card'", () => {
      expect(paymentHelp("credit card")).toEqual("You can pay with any major credit card. Enter your card details and billing address at checkout.");
    });
    
    it("returns the right message for another input", () => {
      expect(paymentHelp("wire transfer")).toEqual("We have three payment options: credit card, paypal, or apple pay. Choose your preferred method at checkout.");
    })
  })
})