import FirstComponent from '../FirstComponent';
import SecondComponent from '../SecondComponent';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <h1>Hello, World!</h1>
      <SecondComponent>Hello, React</SecondComponent>
      <FirstComponent name='Alex' age='32' gender='male'/>
      <FirstComponent name={'Alexandra'} age={'26'} gender={'female'}/>
      </header>
    </div>
  );
}

export default App;
