import logo from './logo.svg';
import './App.css';
import Info from './components/Info.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estudios y Menciones</h1>
        <Info
          title=' Soy Ileana Tapia, me encuentro estudiando en la preparatoria'
          event='"Quimico José Donaciano Morales" (CUI)'
          image='3'
          text='Estoy en mi ultimo año de bachiller y mantengo un promedio de 9.6 actualmente'
          />
        <Info
          title='Primer Lugar'
          event='XXXIV Concurso Intra-CCH de Matemáticas(UNAM)'
          image='1'
          text='Las Matemáticas es una area que me gusta estudiar'/>
        <Info
          title='Tercer lugar'
          event='XXXII Olimpiada Estatal de Biología'
          image= '2'
          text= 'Me gustaria encontrar la forma de juntar la disciplina de labiologia y la informatica'
        />

      </div>
    </div>
  );
}

export default App;
 