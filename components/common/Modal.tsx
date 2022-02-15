import React, { Fragment } from 'react';
import styled from 'styled-components';

interface ModalTypeProps {
    isShowing: boolean;
    hide: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalTypeProps> = ({ isShowing, hide }: ModalTypeProps) => {
    if(isShowing) {
        document.body.style.setProperty('overflow', 'hidden');
        return (
            <Fragment>
                <BodyBlackoutStyle onClick={() => hide(!isShowing)}/>
            </Fragment>   
        )
    } else return null;
}

const BodyBlackoutStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  z-index: 900;
`;

export default Modal;