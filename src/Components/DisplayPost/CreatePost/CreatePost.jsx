import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setDate] = useState('')

    return (
        <form>
            <label>Name</label>
            <input type='string' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='string' value={post} />
        </form>
      );
}
 
export default CreatePost;