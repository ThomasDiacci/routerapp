import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Home() {
  //quando la pagina "Home" sarà chiamata verrà lanciata la funzione "fetchData"
  useEffect(() => {
    fetchData()
  }, [])//"[]" per dire che "fetchData" sarà chiamato quando la pagina monterà 

  const [posts, setPosts] = useState([])

  const fetchData = async () => {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/posts/")
    //converte la risposta in json
    const data = await rawData.json()
    //prende i primi 10 elementi
    console.log(data.slice(0, 10))
    const posts = data.slice(0, 10)

    setPosts(posts)
  }
  return (
    <div className="App">
        <h1>Home</h1>
        {/* "map" ciclo tra gli elementi di di una lista/array */}
        {posts.map(post => (
          <Link to={`/${post.id}`}>
            <h4 key={post.id}>{post.title}</h4>
          </Link>
        ))}
    </div>
  );
}

export default Home;