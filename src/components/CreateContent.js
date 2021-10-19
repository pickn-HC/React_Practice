import React, {Component} from 'react';

function CreateContent(obj) {
    return (
      <article>
        <h2>Create</h2>
        <form action="/create-process" method="post"
        onSubmit={(e) => {
          e.preventDefault();
          obj.onSubmit(
            e.target.title.value, e.target.desc.value
          )
          alert('Submit!');
        }}>
            <p><input type="text" name="title" placeholder="title" /></p>
            <p><textarea name="desc" placeholder="description" /></p>
            <p><input type="submit"></input></p>
        </form>
      </article>
    );
}

export default CreateContent;