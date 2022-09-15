import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/DisplayPost/CreatePost/CreatePost';

function App() {

  const [entries, setEntries] = useState([{Name: 'name test', Post: 'post test'}])

  return (
    <div>
      <DisplayPost parentEntries={entries} />
      <CreatePost />
    </div>
  );
}

export default App;