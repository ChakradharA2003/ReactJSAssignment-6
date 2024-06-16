import styled from 'styled-components'

export const ListItem = styled.li`
  width: 49%;
`

export const ButtonImage = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const Image = styled.img`
  height: 200px;
  width: 200px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 120px;
    width: 120px;
  }
`
