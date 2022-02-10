import './App.css';
import Header from "./components/header"
import Card from "./components/card"
import React from 'react';
import Score from "./components/scoreboard"

function App() {

  const [cards, setCards] = React.useState([
    {src: "Lanfear.jpg", key: "1", clicked:"false"},
    {src: "Gareth.jpg", key: "2", clicked:"false"},
    {src: "Rand.jpg", key: "3", clicked:"false"},
    {src: "Loial.jpg", key: "4", clicked:"false"},
    {src: "Aviendha.jpg", key: "5", clicked:"false"},
    {src: "Elayne.jpg", key: "6", clicked:"false"},
    {src: "Nynaeve.jpg", key: "7", clicked:"false"},
    {src: "Lan.jpg", key: "8", clicked:"false"},
    {src: "Perrin.jpg", key: "9", clicked:"false"},
    {src: "Logain.jpg", key: "10", clicked:"false"},
    {src: "Mat.jpg", key: "11", clicked:"false"},
    {src: "Moghedian.jpg", key: "12", clicked:"false"},
    {src: "Thom.jpg", key: "13", clicked:"false"},
    {src: "Siuan.jpg", key: "14", clicked:"false"},
    {src: "Birgitte.jpg", key: "15", clicked:"false"},
    {src: "Galad.jpg", key: "16", clicked:"false"},
    {src: "Domon.jpg", key: "17", clicked:"false"},
    {src: "Moiraine.jpg", key: "18", clicked:"false"},
  ])

  const [score, setScore] = React.useState({currentScore: 0, bestScore:0})



  function shuffle (event){
    console.log(event.target.getAttribute("clicked"))
      setCards(prevCards=>{
        let updated = prevCards.map(elem=>{
            return elem.key=== event.target.id ? {...elem, clicked: "true"} : {...elem}
        })

          return [...yates(updated)]
      })

      setScore(prevScore=>{
        return  event.target.getAttribute("clicked") === "true" ? {...prevScore, currentScore: 0} : {...prevScore, currentScore: prevScore.currentScore+1}
      })

      setScore(prevScore=>{
        return prevScore.bestScore < prevScore.currentScore ? {...prevScore, bestScore: prevScore.currentScore} : {...prevScore}
      })

      setCards(prevCards=>{
        let updated = prevCards.map(elem=>{
          return event.target.getAttribute("clicked") === "true" ? {...elem, clicked:"false"} : {...elem}
        })
        return updated

      })

  }

  const yates = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  let renderCards = cards.map(elem=>{
    return <Card 
        id={elem.key}
        key = {elem.key}
        src = {elem.src}
        clicked={elem.clicked}
        handleClick={shuffle}
    />
  })

  React.useEffect(function(){
    
  })



  return (
    <div className="App">
        <Header />
        <div className='container'>
            <Score 
                current = {score.currentScore}
                best = {score.bestScore}
            />
            <div className='cardHolder'>
                {renderCards}
            </div>
        </div>
    </div>
  );
}

export default App;
