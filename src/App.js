import './App.css';
import parse from 'html-react-parser';
import tpl from './app.html'

function App() {
  return parse(tpl)
}

export default App;
