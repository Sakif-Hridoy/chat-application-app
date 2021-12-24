import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return (<ChatEngine 
  
    height="100vh"
    projectID="76f18c9f-080e-46de-b226-98949ce00eb1"
    userName="Sakif"
    userSecret="123123"
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}

  />
  )
}

export default App;
