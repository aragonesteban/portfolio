import styled from 'styled-components'

export const SwitchContainer = styled.div`
  width: 52px;
  height: 28px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.switch.backgroundColor};
  padding: 3px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  border:  1px solid #424654;
  position: absolute;
  right: 5%;
`

export const SwitchOption = styled.span`
  font-size: 1.4em;
  transition: transform 500ms;
  transform: ${({ theme }) => theme.switch.trasnform};
`