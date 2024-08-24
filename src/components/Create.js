import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Create = () => {

  const [title, setTitle] = useState('hello')
  const [body, setBody] = useState('clara')
  const [author,setAuthor] = useState('mario')
  const [isPending, setIsPending] = useState(false)
  const history = useNavigate()

  const handleSubmit = e =>{
    e.preventDefault()
    const blog = {title, body, author }

    setIsPending(true)

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers/*for the content type thats being sent */:  {"Content-Type": "applicaiton/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('new blog added')
      history('/')
    })
  }
  return ( 
    <div className="create">
      <h2>Add a New Blog</h2>
      <form  onSubmit={handleSubmit}>
        <label >Blog Title:</label>
        <input 
        type="text" 
        required
        value = {title}
        onChange ={(e)=> setTitle(e.target.value)}
        />

        <label >Blog Body:</label>
        <textarea 
        required
        value = {body}
        onChange ={e =>setBody(e.target.value)}
        ></textarea>
        <label >Blog Author: </label>

        <select 
        value= {author}
        onChange= {e=> setAuthor(e.target.value) }
        >
          <option value="dauda">dauda</option>
          <option value="clara">clara</option>
        </select>
        {!isPending &&<button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}   
      </form>
    </div>
   );
}
 
export default Create;