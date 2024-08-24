
import BlogList from './blogList';
import useFetch from '../useFetch';

const Homepage = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')


  const title = 'Welcome to the new blog';
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && !error && <div>Loading...</div>}
       {blogs && <BlogList blogs = {blogs} title ={title} />}

    </div>
   );
}
 
export default Homepage;