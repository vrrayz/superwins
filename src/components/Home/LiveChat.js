import React from "react";
import styled from "styled-components";
import avatarImg from "../../assets/img/avatars/default.png";

export const LiveChat = ({ isChatToggled }) => {
  return (
    <LiveChatContainer isChatToggled={isChatToggled}>
      <ChatsSection>
        <ChatInfo>
          <img src={avatarImg} alt="user" className="mt-1" />
          <div>
            <User className="mb-1">noobsage</User>
            <Message>This is my message to everyone on this platform</Message>
          </div>
        </ChatInfo>
        <ChatInfo>
          <img src={avatarImg} alt="user" className="mt-1" />
          <div>
            <User className="mb-1">noobsage</User>
            <Message>This is my message to everyone on this platform</Message>
          </div>
        </ChatInfo>
        <ChatInfo>
          <img src={avatarImg} alt="user" className="mt-1" />
          <div>
            <User className="mb-1">noobsage</User>
            <Message>This is my message to everyone on this platform</Message>
          </div>
        </ChatInfo>
        <ChatInfo>
          <img src={avatarImg} alt="user" className="mt-1" />
          <div>
            <User className="mb-1">noobsage</User>
            <Message>This is my message to everyone on this platform</Message>
          </div>
        </ChatInfo>
        <ChatInfo>
          <img src={avatarImg} alt="user" className="mt-1" />
          <div>
            <User className="mb-1">noobsage</User>
            <Message>This is my message to everyone on this platform</Message>
          </div>
        </ChatInfo>
      </ChatsSection>
      <InputSection>
        <ChatInput placeholder="Send a message" />
        <SendMessageButton>
          <i className="fa-regular fa-paper-plane"></i>
        </SendMessageButton>
      </InputSection>
      <PlayersCountSection>
        <i className="fa-solid fa-circle text-success"></i> 108 players online
      </PlayersCountSection>
    </LiveChatContainer>
  );
};
const LiveChatContainer = styled.aside`
  display: ${({isChatToggled}) => isChatToggled ? `grid`:`none` };
  grid-template-rows: 1fr 50px 50px;
  row-gap: 12px;
  background-color: var(--color-transparent-dark);
  backdrop-filter:blur(10px);
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  transition: 300ms;
  transition-timing-function: ease-in-out;
  @media (min-width: 768px){
    max-width: 320px;
  }
  @media (min-width: 1200px) {
    display: grid;
    background-color: var(--color-dark-3);
    position: fixed;
    right: 0;
    top: 0;
  }
`;
const ChatsSection = styled.section`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const InputSection = styled.section`
  padding: 0px 16px;
  display: flex;
  justify-content: center;
`;
const ChatInfo = styled.div`
  display: flex;
  column-gap: 8px;
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;
const Message = styled.p`
  font-size: 0.85rem;
  line-height: 1.2;
  color: var(--color-light-1);
`;
const User = styled.h5`
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-primary-red);
`;
const ChatInput = styled.input`
  margin-right: 0px;
  width: 100%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border: none;
  background-color: var(--color-grey-1);
  color: var(--color-light-1);
  padding: 4px;
  padding-left: 16px;
  font-size: 14px;

  &:focus-visible {
    border: none;
    outline: none;
  }
`;
const SendMessageButton = styled.button`
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border: none;
  background-color: var(--color-grey-1);
  padding-right: 16px;
  color: var(--color-light-1);
`;
const PlayersCountSection = styled.p`
  color: var(--color-light-1);
  font-size: 14px;
  margin: 0px 16px;
`;
