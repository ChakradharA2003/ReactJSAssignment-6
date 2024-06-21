import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import GameButton from '../GameButton/index'

import {
  MainContainer,
  ScoreContainer,
  GameNameContainer,
  GameName,
  ScoreCard,
  ScoreHeading,
  Score,
  GameViewContainer,
  GameResultContainer,
  PlayerDetails,
  ResultsDetails,
  Player,
  PlayerSelected,
  GameResult,
  PlayAgainButton,
  PopUpContainer,
  RulesButton,
  PopupView,
  CloseButton,
  RulesViewImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissorGame extends Component {
  state = {
    score: 0,
    userClicked: 0,
    randomGenerated: 0,
    result: '',
    played: false,
  }

  onUserClickedButtonImage = id => {
    // console.log(id)
    const randomChoice =
      choicesList[Math.floor(Math.random() * (choicesList.length - 0) + 0)].id
    // console.log(randomChoice)
    /*
    const message = this.getMessage(id, randomChoice)
    // console.log(message)
    this.setState({
      result: message,
    })
    */
    this.generateGameResultDetails(id, randomChoice)
    this.setState({
      played: true,
    })
  }

  getMessage = (id, randomChoice) => {
    let message
    if (id === 'PAPER' && randomChoice === 'ROCK') {
      message = 'YOU WON'
    } else if (id === 'SCISSORS' && randomChoice === 'ROCK') {
      message = 'YOU LOSE'
    } else if (id === 'ROCK' && randomChoice === 'PAPER') {
      message = 'YOU LOSE'
    } else if (id === 'SCISSORS' && randomChoice === 'PAPER') {
      message = 'YOU WON'
    } else if (id === 'ROCK' && randomChoice === 'SCISSORS') {
      message = 'YOU WON'
    } else if (id === 'PAPER' && randomChoice === 'SCISSORS') {
      message = 'YOU LOSE'
    } else if (id === randomChoice) {
      message = 'IT IS DRAW'
    } else {
      message = null
    }
    return message
  }

  generateGameResultDetails = (id, randomChoice) => {
    const getImageById = choicesList.findIndex(game => {
      if (game.id === id) {
        return true
      }
      return false
    })
    const getImageByRandomChoice = choicesList.findIndex(game => {
      if (game.id === randomChoice) {
        return true
      }
      return false
    })
    // console.log(getImageById)
    // console.log(getImageByRandomChoice)
    this.setState({
      userClicked: getImageById,
      randomGenerated: getImageByRandomChoice,
    })
    /*
    const {result} = this.state
    console.log(result)
    if (result === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score,
      }))
    }
    */
    if (id === 'PAPER' && randomChoice === 'ROCK') {
      // message = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({result: 'YOU WON'})
    } else if (id === 'SCISSORS' && randomChoice === 'ROCK') {
      // message = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.setState({result: 'YOU LOSE'})
    } else if (id === 'ROCK' && randomChoice === 'PAPER') {
      // message = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.setState({result: 'YOU LOSE'})
    } else if (id === 'SCISSORS' && randomChoice === 'PAPER') {
      // message = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({result: 'YOU WON'})
    } else if (id === 'ROCK' && randomChoice === 'SCISSORS') {
      // message = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({result: 'YOU WON'})
    } else if (id === 'PAPER' && randomChoice === 'SCISSORS') {
      // message = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.setState({result: 'YOU LOSE'})
    } else if (id === randomChoice) {
      // message = 'IT IS DRAW'
      this.setState(prevState => ({
        score: prevState.score,
      }))
      this.setState({result: 'IT IS DRAW'})
    }
    /* 
    else {
      message = null
    }
    */
  }

  gameView = () => (
    <GameViewContainer>
      {choicesList.map(game => (
        <GameButton
          key={game.id}
          id={game.id}
          imageUrl={game.imageUrl}
          onUserClickedButtonImage={this.onUserClickedButtonImage}
        />
      ))}
    </GameViewContainer>
  )

  onClickPlayAgain = () => {
    this.setState({
      played: false,
    })
  }

  resultsView = () => {
    const {result, userClicked, randomGenerated} = this.state
    const userImage = choicesList[userClicked].imageUrl
    const machineImage = choicesList[randomGenerated].imageUrl
    return (
      <GameResultContainer>
        <ResultsDetails>
          <PlayerDetails>
            <Player>YOU</Player>
            <PlayerSelected as="img" src={userImage} alt="your choice" />
          </PlayerDetails>
          <PlayerDetails>
            <Player>OPPONENT</Player>
            <PlayerSelected as="img" src={machineImage} alt="opponent choice" />
          </PlayerDetails>
        </ResultsDetails>
        <GameResult as="p">{result}</GameResult>
        <PlayAgainButton
          as="button"
          type="button"
          onClick={this.onClickPlayAgain}
        >
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultContainer>
    )
  }

  render() {
    const {score, played} = this.state
    console.log(score)
    const view = played ? this.resultsView() : this.gameView()
    return (
      <MainContainer>
       <div>
        <ScoreContainer>
          <GameNameContainer>
            <GameName as="h1">
              Rock
              <br />
              Paper
              <br />
              Scissors
            </GameName>
          </GameNameContainer>
          <ScoreCard>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </ScoreCard>
        </ScoreContainer>
        {view}
    </div>
        <PopUpContainer>
          <Popup modal trigger={<RulesButton as="button">Rules</RulesButton>}>
            {close => (
              <PopupView>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <RulesViewImage
                  as="img"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupView>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}
export default RockPaperScissorGame
