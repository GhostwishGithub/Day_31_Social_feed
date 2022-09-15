import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setDate] = useState('');

    function handleSubmit(event){
        event.preventDefault();
    }

    return (
        <form>
            <label>Name</label>
            <input type='string' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='string' value={post} onChange={(event) => setDate(event.target.value)} />
            <button type='submit'>Create</button>
        </form>
      );
}
 
export default CreatePost;