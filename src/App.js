import logo from './logo.svg';
import './App.css';
import Componente from './Componente';
import Counter from './componentes/Counter';
import Form from './componentes/form';
import FormDataDisplay from './componentes/FormDataDisplay';
import { useState } from 'react';

function App() {
  const [submittedData, setSubimittedData] = useState();

  const handleFormSubmit = (formData) =>{
    setSubimittedData(formData)
  }
  return (
    <>
      <Componente />
      <Counter valueInitial={10} valueIncrement={5} />
      <Form onSubimit={handleFormSubmit} />
      // {submittedData && <FormDataDisplay formData={submittedData} /> }
    </>
  );
}

export default App;
