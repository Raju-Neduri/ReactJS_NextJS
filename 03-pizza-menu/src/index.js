import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza.co</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h1>Our Menu is</h1>
      <Pizza />
    </main>
  );
};

const Footer = () => {
  const currentHour = new Date().getHours(); // gives 0–23
  const isOpen = currentHour >= 10 && currentHour < 22;
  return (
    <footer className="footer">
      <p>
        {new Date().toLocaleTimeString()} — We are currently{" "}
        <strong>{isOpen ? "open" : "closed"} </strong>
        today.
      </p>
    </footer>
  );
};

function Pizza() {
  return (
    <div className="pizzas">
      {pizzaData.map((item, index) => (
        <div key={index} className="pizza">
          <img src={item.photoName} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.ingredients}</p>
            <span>Price: {item.price}</span>
            <p className="sold-out">
              {item.soldOut ? "Available" : "Sold Out"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
