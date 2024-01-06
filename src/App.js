import logo from './logo.svg';
import './App.css';
// import MyGreetComponent from "./components/Greet"
import {Greet} from "./components/Greet"
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameListIndex from './components/NameListIndex';
import StyleSheet from './components/StyleSheet';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      <UserGreeting/>
      <Greet name="Bruce Lee" profession="Martial Artist and Actor"><p>This is children props</p> </Greet>
      <Greet name="Taylor Swift" profession="American Singer and writer"><button>Book Musical Evening</button></Greet>
      <Greet name="Ariana Grande" profession="Singer"/>
      {/* <MyGreetComponent /> */}
      <Welcome name="Bruce Lee" profession="Martial Artist and Actor"/>
      <Welcome name="Taylor Swift" profession="American Singer and writer"/>
      <Hello/>
      <Message/>
      <Counter/>  
      <FunctionClick/>
      <ClassClick/> 
      <EventBind/>
      <NameList/>
      <NameListIndex/>
      <StyleSheet/>
    </div>
  );
}

export default App;
