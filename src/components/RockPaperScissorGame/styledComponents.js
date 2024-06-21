import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 100vh;
  }
`
export const ScoreContainer = styled.div`
  background-color: transparent;
  border: 2px solid #ffffff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
  }
`
export const GameNameContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-left: 0px;
`

export const GameName = styled.li`
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  font-family: 'Bree Serif';
`

export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-width: 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1px 15px 1px;
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-family: 'Bree Serif';
`
export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 30px;
  margin-top: 0px;
  font-weight: bold;
`
export const GameViewContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin-top: 50px;
  align-self: center;
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
export const ResultsDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PlayerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`
export const Player = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
`

export const PlayerSelected = styled.img`
  height: 200px;
  width: 200px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 120px;
    width: 120px;
  }
`
export const GameResult = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-bottom: 2px;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border-width: 0px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  color: #233a5f;
  font-family: 'Bree Serif';
  font-size: 12px;
  padding: 8px 20px 8px;
  margin-top: 0px;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    margin-top: 80px;
  }
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  border-width: 0px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  color: #233a5f;
  font-family: 'Bree Serif';
  font-size: 12px;
  padding: 8px 15px 8px;
`
export const PopupView = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 40vh;
    width: 100%;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  align-self: flex-end;
`
export const RulesViewImage = styled.img`
  background-size: cover;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    background-size: cover;
  }
`
