
const Dog = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.animal),
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.breed)
  );
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "A-pet-Dog"),
    React.createElement(Dog, { name: "Luna", animal: "Dog", breed: "Dally" }),
    React.createElement(Dog, { name: "flick", animal: "Cat", breed: "Fitero" }),
    React.createElement(Dog, { name: "Luna", animal: "Dog", breed: "Dally" })
  );
};
ReactDOM.render(React.createElement(App), document.querySelector("#root"));
