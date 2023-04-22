import Nav from './components/Nav'
import Footer from './components/Footer'
import "./style/output.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './pages/Home';
import { Route } from 'wouter';




function App() {

  return (
    <div className="App">
        <Nav/>
        <Route path="/" component={Home} />
        <Footer/>


        
    </div>
  )
}

export default App
