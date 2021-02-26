import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import socket from '../../services/socket';

import { Container, Messages } from './styles';

function Chat() {
    const [flagUsername, setFlagUsername] = useState(false);
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        addListennerNovaMensagem();

        return () => socket.off("nova_mensagem");
    }, [messages]);

    const addListennerNovaMensagem = () => {
        socket.on("nova_mensagem", new_message => {
            setMessages([...messages, new_message]);
        });
    }

    const enviarMensagem = async e => {
        e.preventDefault();

        const new_message = {
            username,
            content
        };

        await api.post('/messages', new_message);
    };

    return (
        <Container>
            {flagUsername ? (
                <>
                    <Messages>
                        {messages.map(message => (
                            <div key={message.content + message.id_autor}>
                                <strong>{message.username}: </strong>
                                <span>{message.content}</span>
                            </div>
                        ))}
                    </Messages>
                    <form onSubmit={enviarMensagem}>
                        <input type="text" value={content} onChange={e => setContent(e.target.value)} placeholder="Digite sua mensagem aqui..." />
                        <button type="submit">Enviar</button>
                    </form>
                </>
            ) : (
                    <form onSubmit={e => { e.preventDefault(); setFlagUsername(true); }}>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu nickname..." />
                        <button type="submit">Entrar</button>
                    </form>
                )
            }
        </Container>
    );
}

export default Chat;