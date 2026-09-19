import React from 'react';


//to do: fetch data from api
const blogsData = [
  {
    "id": 1,
    "title": "Getting Started with React",
    "author": "Rakibul Hasan",
    "category": "React",
    "description": "Learn the basics of React and understand how components, props, and state work together.",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    "date": "2026-09-10"
  },
  {
    "id": 2,
    "title": "Why JavaScript Is Important",
    "author": "Sarah Ahmed",
    "category": "JavaScript",
    "description": "Discover why JavaScript is one of the most popular programming languages for web development.",
    "image": "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    "date": "2026-09-11"
  },
  {
    "id": 3,
    "title": "Understanding Tailwind CSS",
    "author": "John Smith",
    "category": "CSS",
    "description": "A beginner-friendly introduction to Tailwind CSS and how utility classes make styling easier.",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    "date": "2026-09-12"
  },
  {
    "id": 4,
    "title": "What Is an API?",
    "author": "Nadia Rahman",
    "category": "Web Development",
    "description": "Learn what APIs are, how they work, and how frontend applications communicate with servers.",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    "date": "2026-09-13"
  },
  {
    "id": 5,
    "title": "Introduction to TypeScript",
    "author": "David Wilson",
    "category": "TypeScript",
    "description": "Understand how TypeScript improves JavaScript development with static typing and better tooling.",
    "image": "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    "date": "2026-09-14"
  }
];


const postDetailPage = async ({params}) => {

    const{postId}= await params;
    //TODO: fetch data from database
    const post= blogsData.find(post => post.id === parseInt(postId));
    // console.log(post,postId);

    return (
        <div>
            <h2>Post Detail Page: {postId} </h2>
            {
                post && <div>
                   <h3>{post.title}</h3>
                   <p>Posted by: {post.author}</p>
                   <p>{post.description}</p>

                </div>
            }
        </div>
    );
};

export default postDetailPage;