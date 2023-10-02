import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  // const person = { name: 'Batman', age: 30}
  const link = "http://www.finenordicsolutions.dk"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
