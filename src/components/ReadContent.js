import React from 'react';

function ReadContent(obj) {
    return (
      <article>
        <h2>{obj.title}</h2>
        {obj.desc}
      </article>
    );
}

export default ReadContent;