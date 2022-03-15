import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header';
import {Sidebar} from './Components/Sidebar';
import {Content} from './Components/Content';

function App() {
  return (
    <>
    <Header title="React Dashboard" />
    <div class="container-fluid">
      <div class="row">
        <Sidebar/>
        <Content/>
      </div>
    </div>
    </>
  );
}

export default App;
