import React, { Component } from "react";
import styled from "styled-components";
import Portal from "../../Portal";
import Close from "../../assets/icons/close.svg";

export default class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;

    const Wrapper = styled.div`
      position: fixed;
      top: 0%;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
    `;

    const Window = styled.div`
      position: relative;
      background: #fff;
      border-radius: 15px;
      padding: 15px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      z-index: 10;
      min-width: 320px;
      transition: all 0.5s ease;
    `;

    const CloseBtn = styled.div`
      position: absolute;
      top: 10px;
      right: 10px;
      width: 25px;
      height: 25px;
      border: none;
      background: lightgray;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        width: 50%;
      }
    `;

    const Background = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
      transition: all 0.5s ease;
    `;

    return (
      <Portal>
        {active && (
          <Wrapper>
            <Window>
              <CloseBtn onClick={toggle}>
                <img src={Close} alt="" />
              </CloseBtn>
              <div>{children}</div>
            </Window>
            <Background onClick={toggle} />
          </Wrapper>
        )}
      </Portal>
    );
  }
}
