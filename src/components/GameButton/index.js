import {ListItem, ButtonImage, Image} from './styledComponent'

const GameButton = props => {
  const {id, imageUrl, onUserClickedButtonImage} = props
  const onClickedButton = () => {
    onUserClickedButtonImage(id)
  }
  let ButtonImageView
  if (id === 'ROCK') {
    ButtonImageView = (
      <ButtonImage
        data-testid="rockButton"
        as="button"
        onClick={onClickedButton}
      >
        <Image as="img" src={imageUrl} />
      </ButtonImage>
    )
  }
  if (id === 'SCISSORS') {
    ButtonImageView = (
      <ButtonImage
        data-testid="scissorsButton"
        as="button"
        onClick={onClickedButton}
      >
        <Image as="img" src={imageUrl} />
      </ButtonImage>
    )
  }
  if (id === 'PAPER') {
    ButtonImageView = (
      <ButtonImage
        data-testid="paperButton"
        as="button"
        onClick={onClickedButton}
      >
        <Image as="img" src={imageUrl} />
      </ButtonImage>
    )
  }
  return <ListItem>{ButtonImageView}</ListItem>
}
export default GameButton
