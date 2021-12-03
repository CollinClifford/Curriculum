require('../chatbot.js');

describe("chatbot functions", () => {
  describe("botGreeting", () => {
    it("returns the correct greeting", () => {
      expect(botGreeting()).toEqual("Hello, I'm the Getaway Bot! I want to help you find your dream destination. You can ask me about our current offers, payment, or contact info. Or type 'help'.");
    })
  })
  
  describe("botResponse", () => {
    it("returns a string with the user's message", () => {
      expect(botResponse("hi, I'm looking for travel help")).toEqual("I'm not sure I understood your message: 'hi, I'm looking for travel help'. Type 'help' to see more options.");
    })
  })
})