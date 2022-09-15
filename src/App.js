import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

  const [entries, setEntries] = useState([{Name: 'name test', Post: 'post test'}])

  return (
    <div>
      <CreatePost parentEntries={entries} />
    </div>
  );
}

export default App;