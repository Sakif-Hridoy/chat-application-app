import { render } from "@testing-library/react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";


const ChatFeed = (props)=>{
    const{chats,activeChat,userName,messages}= props;

    const chat = chats && chats[activeChat];
const renderChatMessages = ()=>{
    const keys = Object.keys(messages);
    // console.log(keys);
    
}
renderChatMessages();
console.log(chat,userName,messages);

return(
    <div>
        ChatFeed
    </div>
);

}

export default ChatFeed;