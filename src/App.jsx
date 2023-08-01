import { useEffect, useState } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';

//https://jsonplaceholder.typicode.com/posts

function App() {

  const [posts , setPosts] = useState([]);
  const [loadingPosts , setLoadingPosts] = useState(false);

  const [ currentPage , setCurrentPage] = useState(1);
  const [postPerPage ] = useState(6)

  useEffect( () => {
    const fetchPosts = async () => {
      console.log("Start Loading");
      setLoadingPosts(true)
      const req = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await req.json();
      setPosts(data);
      console.log("End Loading")
      setLoadingPosts(false);
    }
    fetchPosts();
    console.log(posts)
  }, []);

  // GET CURRENT POSTS
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPage - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost , indexOfLastPage);

  //CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
   <div className="container">
    <h2 className="main-heading">React pagination</h2>
    <Posts posts={currentPosts} loadingPosts={loadingPosts}/>
    <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
   </div>
  )
}

export default App
