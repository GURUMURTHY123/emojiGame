/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    isGameCompleted: false,
    isWon: false,
    currentScore: 0,
    topScore: 0,
    clickedEmojisList: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  gamePlaying = id => {
    const {clickedEmojisList} = this.state
    let {topScore, currentScore} = this.state
    if (clickedEmojisList.includes(id)) {
      topScore = currentScore > topScore ? currentScore : topScore
      this.setState({
        isGameCompleted: true,
        topScore,
        isWon: false,
      })
    } else if (clickedEmojisList.length === 11) {
      topScore = 12
      currentScore = 12
      this.setState({
        isGameCompleted: true,
        isWon: true,
        topScore,
        currentScore,
      })
    } else {
      currentScore += 1
      const updatedEmojisList = [...clickedEmojisList, id]
      this.setState({currentScore, clickedEmojisList: updatedEmojisList})
    }
  }

  restartGame = () => {
    this.setState({
      isGameCompleted: false,
      isWon: false,
      currentScore: 0,
      clickedEmojisList: [],
    })
  }

  render() {
    const {isGameCompleted, isWon, currentScore, topScore} = this.state
    const emojisList = this.shuffledEmojisList()
    return (
      <div className="app-container">
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          isGameCompleted={isGameCompleted}
        />
        <div className="emoji-game-container">
          {!isGameCompleted ? (
            <ul className="emoji-list-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  gamePlaying={this.gamePlaying}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              isWon={isWon}
              currentScore={currentScore}
              restartGame={this.restartGame}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
