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
return keys.map((key,index)=>{
        // A Users Message Passing steps in this app
        // Messages are extracting from here,the variable message and it is passing as props to the MyMessage,TheirMessage component
        // Here is declaring messages in render function and call it in chat
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index-1];
        const isMyMessage = userName === message.sender.username;
        return(
            <div key={`msg_${index}`} style={{width:'100%'}}>
                <div className="messgae-block">
                    {
                        isMyMessage
                        ? <MyMessage message={message}/>
                        :<TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                    }
                </div>
                <div className="read-receipts" style={{marginRight: isMyMessage? '18px': '0px',marginLeft: isMyMessage ? '0px' : '60px',}}>

                </div>
            </div>
        );
    })
    
}
console.log(chat,userName,messages);
if(!chat) return 'Loading...';
// here we are receiving users chat in the chatfeed container
return(
    <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">{chat.title}</div>
            <div className="chat-subtitle">
                {chat.people.map((person)=>`${person.person.username}`)}
            </div>
        </div>
        {renderChatMessages()}
        <div style={{height:'100px'}}/>  
        <div className="message-form-container">
            <MessageForm {...props} chatId={activeChat} />
        </div>
    </div>
);

}

export default ChatFeed;