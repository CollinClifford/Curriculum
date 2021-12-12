import "./App.css";
import Greeting from "./Greeting";

// function ShoppingCart({ cart }) {
// 	switch (cart) {
// 		case cart.length === 1:
// 			return <p>You have {cart.length} item in your cart: {cart.toString("")}.</p>;
// 		case cart.length > 1:
// 			return <p>You have {cart.length} items in your cart: {cart.toString("")}.</p>;
//     default:
//       return null;
// 	}
// }

function ShoppingCart({ cart }) {
  if (cart.length > 0) {
    return (
      <p>
        You have {cart.length} items in your cart: {cart.toString("")}.
      </p>
    );
  }
  return null;
}

function Notifications({ notifications }) {
  if (notifications.length > 0) {
    return <p>You have {notifications.length} notifications today!</p>;
  }
  return null;
}

function App() {
  const items = ["toothbrush", "comb", "gun"];
  const notifications = ["You received a package", "The weather is sunny"];
  return (
    <>
      <Greeting />
      <ShoppingCart cart={items} />
      <Notifications notifications={notifications} />;
    </>
  );
}

export default App;