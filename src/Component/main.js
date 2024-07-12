import React, { useState, useEffect } from "react";

export default function Main(props) {

  const [allMemes, setAllMems] = useState([]);

  const [mem, setMem] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://api.imgflip.com/1bij.jpg'
  })

  useEffect(function () {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const Data = await res.json()
      setAllMems(Data.data.memes)
    }
    getMemes()
    // memeDataHandler()
  }, [])

  function memeDataHandler(event) {
    const randomNum = Math.trunc(Math.random() * allMemes.length)
    const url = allMemes[randomNum].url
    setMem(prestate => ({
      ...prestate,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      randomImage: url
    }))
  }

  function submitinputsHandler(event) {
    setMem(prestate => ({
      ...prestate,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <main className="main">
      <input type="text" placeholder="Shout Up" className="in1 inputs" name="topText" value={mem.topText} onChange={submitinputsHandler} />
      <input type="text" placeholder="take mem" className="in2 inputs" name="bottomText" value={mem.bottomText} onChange={submitinputsHandler} />
      <button onClick={memeDataHandler}>Click For More Memes</button>
      <div className="imgDiv">
        <img src={mem.randomImage} className="imgMain" alt="my image" />
        <h1 className="hJoke">{mem.topText}</h1>
        <h4 className="pJoke">{mem.bottomText}</h4>
      </div>
    </main>
  )
}
