// const heading = document.createElement("h1");
// heading.innerHTML = "Wohoo, Namaste React Course Started!!!, With Javascript"
// const root =  document.getElementById("root");
// root.appendChild(heading)

const heading = React.createElement("h1", {
    id: "title"
}, "Wohoo, Namaste React Course Started!!!, With React");

const heading2 = React.createElement("h2", {
    id: "heading2"
}, "First day class assignment")

const container = React.createElement("div", {
    id: "container"
}, [heading, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);