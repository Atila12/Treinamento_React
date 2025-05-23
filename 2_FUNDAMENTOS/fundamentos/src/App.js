//components 
import FirstComponent from './components/FirstComponent'; 
import TemplateExpressions from './components/TemplateExpression';
import MyComponents from './components/MyComponents';
import Events from './components/Events';
import Challenge from './components/Challenge';

// styles / css 
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Fundamentos React </h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponents />
      <Events />
      <Challenge/>
    </div>
  );
}

export default App;
