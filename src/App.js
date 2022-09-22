import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting={"Bienvenidos a la mejor pizzeria de Flores"} />
      </main>
    </div>

  );
}

export default App;
