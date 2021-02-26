import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
        width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        input { 
            background-color: rgba(0, 0, 0, 0.1); 
            width: 70%;
            height: 40px;
            border: 0;
            padding: 0 10px;
            border-radius: 5px;
        }

        button { 
            width: 20%;
            height: 40px;
            border: 0;
            background-color: #001a4d; 
            border-radius: 5px;
            color: white;
        }
    }
`;

export const Messages = styled.div`
        width: 400px;
        height: 500px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        border: 1px solid gray;
        margin-bottom: 25px;
        padding: 10px;
        overflow-y: auto;
        overflow-x: hidden;

        .message {
            width: 70%;
            min-height: 50px;
            padding: 10px;
            border-radius: 10px;
            margin-top: 20px;

            strong {
                display: block;
            }

            &.me {
                background-color: rgba(0, 0, 0, 0.1);    
                align-self: flex-end;
            }   

            &.he {
                border: 1px solid gray;
            }     
        }
`;