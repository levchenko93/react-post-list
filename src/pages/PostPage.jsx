import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import Modal from '../components/UI/modal/Modal';
import PostFilter from '../components/PostFilter';
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import { usePost } from '../hooks/usePost';
import '../styles/App.css';

const PostPage = () => {
   const {
      createPost,
      removeHandler,
      changePage,
      modal,
      setFilter,
      sortedAndSearchedPosts,
      totalPages,
      isLoading,
      isError,
      filter,
      page,
      posts,
      setModal,
   } = usePost();

   return (
      <div className="App">
         {modal && (
            <Modal title="Create product" onClose={() => setModal(false)}>
               <PostForm create={createPost} />
            </Modal>
         )}
         <PostFilter filter={filter} setFilter={setFilter} />
         {isError && <h1 className="error-message">{isError}</h1>}
         {isLoading ? (
            <Loader />
         ) : (
            <PostList
               posts={sortedAndSearchedPosts}
               title="Post List"
               remove={removeHandler}
            />
         )}
         <Pagination
            totalPages={totalPages}
            changePage={changePage}
            page={page}
            posts={posts}
         />
         <button onClick={() => setModal(true)} className="btn">
            Create post
         </button>
      </div>
   );
};

export default PostPage;
