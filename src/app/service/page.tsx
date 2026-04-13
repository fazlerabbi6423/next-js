import React from 'react';
type Post = { 
    id: number ;
    userId: number;
    title: string;
    body: string 
}
const page = async () => {
     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
     const posts: Post [] = await data.json()
     console.log(posts)
     
    
    return (
        <div>
           {posts.map(post  => 
            <div key={post.id}>
                {post.title}
            </div>
           )}
        </div>
    );
};

export default page;