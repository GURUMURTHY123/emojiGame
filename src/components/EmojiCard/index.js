// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, gamePlaying} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    gamePlaying(id)
  }

  return (
    <li className="emoji-card" onClick={onClickEmoji}>
      <button type="button" className="emoji-card-button">
        <img src={emojiUrl} alt={emojiName} className="emoji-card-image" />
      </button>
    </li>
  )
}

export default EmojiCard
