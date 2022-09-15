
const CreatePost = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index) => {
            return (
              <tr>
                <td>{entry.Name}</td>
                <td>{entry.Post}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
}

export default CreatePost;