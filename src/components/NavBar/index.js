// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameCompleted} = props
  return (
    <div className="nav-container">
      <h1 className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        Emoji Game
      </h1>
      {!isGameCompleted && (
        <div className="score-container">
          <p className="score">Score: {currentScore}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
