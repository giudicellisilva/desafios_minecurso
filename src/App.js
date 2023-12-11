import logo from './logo.svg';
import './App.css';
import Componente from './Componente';
import Counter from './componentes/Counter';

function App() {
  return (
    <>
      <Componente />
      <Counter valueInitial={10} valueIncrement={5} />
    </>
  );
}

export default App;
