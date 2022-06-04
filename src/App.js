import Header from './components/Header/Header';
import Main from './components/Main/Main';
import List from './components/List/List';
import './App.css';
import { useSelector } from 'react-redux';
function App() {
    const list=useSelector(state=>state.datereducer.listPage)
    
  return (
      <div className='app'>
        <Header/>
        <Main/>
        {
          list ? <List/>:null
        }
      </div>
  )
}

export default App;
