import React,{useState,useEffect} from 'react';
import axios from 'axios'

function DataFetching() { 
    // this use state is for getting all posts
    // state variable is an array 
    const [posts,setPosts] = useState([])
    // usestate for getting individual post 
    //state variable is an object
    const [post,setPost] = useState({})
    //this state variable will change based on a button click
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    const [id,setId] = useState(1)

    const handleClick = () => {
        console.log("button clicked")
        setIdFromButtonClick(id)
    }

    // this use state is for getting all posts 
    // useState(() => {
    //     // use axios to pull data from api endpoint
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //          .then(res => {
    //              console.log(res)
    //              setPosts(res.data)
    //          })
    //          .catch(err => {
    //              console.log(err)
    //          })

    // },[])

     // this use state is for getting single post 
    useState(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
             .then(res => {
                 console.log(res)
                 setPost(res.data)
             })
             .catch(err => {
                 console.log(err)
             })

    },[idFromButtonClick])


    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />

            <button type="button" onClick={handleClick}>Fetch Post</button>

            {/* render single post  */}
            <div>
                {post.title}
            </div>

            {/* render all post data */}
            {/* <ul>
                {posts.map(post => (
                <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching
