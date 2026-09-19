import React from 'react';

const PostLa = ({children}) => {
    return (
        <div>
          <h2>Fixed portion of blog layout</h2>
          {children}
        </div>
    );
};

export default PostLa;