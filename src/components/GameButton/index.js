import {ListItem, ButtonImage, ImageChoice} from './styledComponent'

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
        type="button"
        onClick={onClickedButton}
      >
        <ImageChoice as="img" src={imageUrl} alt={id} />
      </ButtonImage>
    )
  }
  if (id === 'SCISSORS') {
    ButtonImageView = (
      <ButtonImage
        data-testid="scissorsButton"
        as="button"
        type="button"
        onClick={onClickedButton}
      >
        <ImageChoice as="img" src={imageUrl} alt={id} />
      </ButtonImage>
    )
  }
  if (id === 'PAPER') {
    ButtonImageView = (
      <ButtonImage
        data-testid="paperButton"
        as="button"
        type="button"
        onClick={onClickedButton}
      >
        <ImageChoice as="img" src={imageUrl} alt={id} />
      </ButtonImage>
    )
  }
  return <ListItem>{ButtonImageView}</ListItem>
}
export default GameButton
