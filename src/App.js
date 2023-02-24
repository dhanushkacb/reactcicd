import logo from './logo.svg';
import './App.css';


let data =[{"id":1,"name":"Dhanushka","age":36},{"id":3,"name":"Chaturanga","age":34},{"id":4,"name":"Bandara","age":35},{"id":6,"name":"Arnold","age":34},{"id":7,"name":"Tom","age":34},{"id":8,"name":"Anne","age":32},{"id":9,"name":"Wasim","age":56},{"id":10,"name":"Camila","age":40},{"id":16,"name":"Jhon","age":35}];

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
      <button onclick="sortByName()">Sort By Name</button>
      <button onclick="reset()">Reset</button>
        <ol>{data.map((item, index) => {
              return <li key={index}>{item.id} - {item.name} - {item.age}</li>;
            })}
        </ol>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with me new commit!
        </a>
      </header>
      
    </div>
  );
}


function sortByName() {
  let age = 34;
  if (age === undefined || age === '')
      age = 0;
  let users = data.filter(u => u.age > age).sort((a, b) => {
      const n1 = a.name.toUpperCase();
      const n2 = b.name.toUpperCase();
      if (n1 < n2) { return -1; }
      if (n1 > n2) { return 1; }
      return 0;
  });
 // setData(users);
}

function reset() {
  //setData(data);
}

export default App;
