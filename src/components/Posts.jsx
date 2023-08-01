import React from 'react'

const Posts = ({posts , loadingPosts}) => {
    if (loadingPosts){
        return (
            <div>
                <h3 style={{
                    color: "green",
                    padding: "10px",
                    margin: "15px",
                }}>LOADING POSTS...</h3>
            </div>
        )
    }
  return (
    <div className="posts">
        {
            posts.map( (post) => (
                <div className="post" key={post.id}>
                    <h3 className="post-title">{post.title.slice(0 , 15)}</h3>
                    <p className="post-body">{post.body.slice(0 , 70)}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Posts