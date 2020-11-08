import React, {useState} from 'react'

export default function Twitter() {
    const [tweet, setTweet] = useState(0);

    const handleTweetChange = event => {
        const newTweet = event.target.value;
        setTweet(newTweet);
    };

    const getMessage = () => {
        if (tweet.trim() === ""){
            return 0;
        }
        return tweet 
            console.log('olá');
        
    }
    return (
        <div>
            <h1>Exemplo Tweet</h1>
           <textarea placeholder="Escreva um Tweet" value={tweet} onChange={handleTweetChange} >
               Escreva o Tweet
            </textarea> 
            
        </div>
    )
}
