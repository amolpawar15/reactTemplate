const Fname = "Dr.Amol";
const Lname ="Pawar";
ReactDOM.render(
    <div>
        <h1>my name is {Fname} {Lname} </h1>
        <h1>my name is {Fname + " " + Lname} </h1>
        <p> my luky numbers is { 2001 + 2001 }</p>

        <p> my luky numbers is {Math.random() }</p>
    </div>, document.getElementById("root")
);
