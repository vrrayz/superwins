import styled from "styled-components";
import { Button } from "./Button";
import { Icon } from "./Icon";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(20, 7, 7, 0.8);
  color: var(--color-light-1);
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Modal = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 1.5rem;
  border-radius: 25px;
  background-color: #1d222e;
  margin: auto;
  animation-name: fadeIn;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
`;
export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 8px 0px;
`;
export const ModalCloseButton = styled(Button)`
  padding: 0px;
  text-transform: uppercase;
  margin: auto 0px;
  border: none;
  border-radius: 50%;
  height: 28px;
  width: 28px;

  ${Icon} {
    margin-left: 1px;
  }
`;
export const ModalBody = styled.div``;
