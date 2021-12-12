import "./App.css";
import WelcomeBack from "./WelcomeBack.js";
import Quote from "./Quote.js";

const quote = {
  text: "I am a great believer in luck, and I find the harder I work, the more I have of it.",
  author: "Thomas Jefferson",
};

function App() {
  return (
    <>
      <WelcomeBack name="Joe" />
      <Quote quote={quote} />
    </>
  );
}

export default App;
