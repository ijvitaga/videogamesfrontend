import React from "react"
import logo from './logo.svg';
import './App.css';

function App() {

  //State to hold our games
  const [games, setGames] = React.useState([])

  //State to hold formData
  const [createForm, setCreateForm] = React.useState({
    title: "",
    release_date: "",
    genre: "",
    esrb: "",
    company: "",
    poster: ""
  })

  //Function to make api call to get games
  const getGames = async () => {
    const response = await fetch("http://localhost:3000/games")
    const data = await response.json()
    setGames(data)
  }

  //This is going to run the getGames function when the component loads. It always takes two params, the function for the api call and an empty array
  React.useEffect(() => {
    getGames()
  }, [])

  const loaded = () => (
    <>
    {games.games.map((game) =>{
      return (
        <div>
          <h1>{game.title}</h1>
          <h2>Release Date: {game.release_date}</h2>
          <h2>Genre: {game.genre}</h2>
          <h2>ESRB: {game.esrb}</h2>
          <h2>Company: {game.company}</h2>
          <img src={game.poster} width="285" height="350" alt =""></img>
          <div>
          <button onClick={async () => {
            //Make delete request
            await fetch("http://localhost:3000/games/" + game.id, {
              method: "delete"
            })
            //Get updated list
            getGames()
          }}>Delete</button>
          </div>
        </div>
      )
    })}
    </>
  )

  //handleChange function for the create form
  const createChange = (event) => {
    setCreateForm({...createForm, [event.target.name]: event.target.value})
  }

  //handle create function, for when this form gets submitted
  const handleCreate = async (event) => {
    event.preventDefault() //prevent page refresh
    //making the post request to create a new game
    await fetch("http://localhost:3000/games", {
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(createForm)
    })
    //fetching an updated list of games
    getGames()
    //reset the form state after adding a new game
    setCreateForm({
      title: "",
      release_date: "",
      genre: "",
      esrb: "",
      company: "",
      poster: ""
    })
  }

  return (
    <div className="App">
      <h1>The Video Game Encyclopedia</h1>
      <h3>Add Game</h3>
      <form onSubmit={handleCreate}>
        <input type="text" placeholder="title" name="title" value={createForm.title} onChange={createChange}/>
        <input type="text" placeholder="release date" name="release_date" value={createForm.release_date} onChange={createChange}/>
        <input type="text" placeholder="genre" name="genre" value={createForm.genre} onChange={createChange}/>
        <input type="text" placeholder="ESRB" name="esrb" value={createForm.esrb} onChange={createChange}/>
        <input type="text" placeholder="company" name="company" value={createForm.company} onChange={createChange}/>
        <input type="text" placeholder="image url" name="poster" value={createForm.poster} onChange={createChange}/>
        <input type="submit" value="Add Game"></input>
      </form>
      {console.log(games.games)}
      {games.games && games.games.length > 1 ? loaded() : <h2>There are no Video Games</h2>}
    </div>
  );
}

export default App;
