// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, currentScore, restartGame} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultText = isWon ? 'Won' : 'Lose'
  const displayText = isWon ? 'Best Score' : 'Score'
  const onClickPlayAgain = () => {
    restartGame()
  }
  return (
    <div className="result-card-container">
      <img src={imageUrl} alt="win or lose" className="result-image" />
      <div className="score-results-container">
        <h1 className="result-text">You {resultText}</h1>
        <p className="result-score-text">{displayText}</p>
        <p className="result-score">{currentScore}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
