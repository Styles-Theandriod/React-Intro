import Header from './components/Header';
import Nav from './components/Nav';
import Navigation from './components/Navigation'
import Main from './components/Main';
import User from './components/User';
import Status from './components/Status';
import Skills from './Skills';

function App() {
  const welcome = "Welcome to 30 Days Of React"
  let age = 30
  let status = age >= 18
  return (
    <div className="App" style={{margin:0, padding:0}}>
      <Navigation navList={["Home", "About", "Project", "Download Cv"]}/>
      <Header/>
      <Nav  welcome={welcome}/>
      <Main title='hello world'/>
      <User 
      welcome={welcome} 
      title = "Getting Started React" 
      subtitle = "JavaScript Library" 
      firstName= "Asabeneh"
      lastName= "Yetayeh"
      date = "Oct 4, 2020"
      />

      <Status status={status}/>

      <Skills skills={['HTML',  'CSS', 'JavaScript']}/>
    </div>
  )
}

export default App;