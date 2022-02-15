import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';

// function Post(props) {
// //   useEffect(() => {
// //     fetchData()
// //   }, [])

//   console.log(props)
// //   const [post, setPost] = useState({})//la risposta sarà un oggetto, allora "{}"

// //   const fetchData = async () => {
// //       //const id = props.match.params.id
// //       const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
// //       //converte la risposta in json
// //       const post = await rawData.json()
      
// //       console.log(post)
// //       setPost(post)
// //     }
//   return (
//     <div className="App">
//     </div>
//   );
// }

export default class Post extends Component{
    render(){
        
        console.log(this.props)
        return(
            <div>
                <h2>{this.props.match.params.id}</h2>
            </div>
        )
    }
};