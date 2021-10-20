import React, {useState} from 'react';

function UpdateContent({item, onSubmit}) {
  const[title, setTitle] = useState(item.title);
  const[desc, setDesc] = useState(item.desc);
  
  return (
    <article>
      <h2>Update</h2>
      <form action="/create-process" method="post"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(
          e.target.id.value, e.target.title.value, e.target.desc.value
        );
        alert('Submit!');
      }}>
          <input type="hidden" name="id" value={item.id} />
          <p><input 
                type="text" 
                name="title" 
                placeholder="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                
              ></input></p>
          <p><textarea
                name="desc" 
                placeholder="description"
                value={item.desc}
                onChange={function(e) {
                  item.desc = e.target.value;
                  setDesc(e.target.value);
                }}
              ></textarea></p>
          <p><input type="submit"></input></p>
      </form>
    </article>
  );
}

export default UpdateContent;