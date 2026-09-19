import React from 'react';

const CommentsIdPage =  async({params}) => {
    const{commentsId}= await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentsId}`);
    const user= await res.json();
    return (
        <div>
            <h2>here is the comment page</h2>
            <p>Comment Id: {user.id}</p>
            <p>Comment Text: {user.body}</p>
            <p>Comment Post: {user.postId}</p>
            <p>Comment User: {user.userId}</p>
        </div>
    );
};

export default CommentsIdPage;