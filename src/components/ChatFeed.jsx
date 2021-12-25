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
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index-1];
        const isMyMessage = userName === message.sender.username;
        return(
            <div key={`msg_${index}`} style={{width:'100%'}}>
                <div className="messgae-block">
                    {
                        isMyMessage
                        ? <MyMessage/>
                        :<TheirMessage/>
                    }
                </div>
            </div>
        )
    })
    
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