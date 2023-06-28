import { useEffect, useState } from 'react';
import { useFetching } from './useFetching';
import { getPageCount } from '../utils/pages';
import { usePosts } from './usePosts';
import PostService from '../API/PostService';

const LIMIT = 10;

export const usePost = () => {
   const [posts, setPosts] = useState([]);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [filter, setFilter] = useState({ sort: '', query: '' });
   const [totalPages, setTotalPages] = useState(0);
   const [page, setPage] = useState(1);

   const sortedAndSearchedPosts = usePosts({
      posts,
      sort: filter.sort,
      query: filter.query,
   });

   const [fetchPosts, isLoading, isError] = useFetching(async () => {
      const response = await PostService.getAll(LIMIT, page);
      const totalCount = response.headers['x-total-count'];

      setPosts(response.data);
      setTotalPages(getPageCount(totalCount, LIMIT));
   });

   const createPost = (newPost) => {
      setPosts((prevState) => [...prevState, newPost]);
      setIsModalOpen(false);
   };

   useEffect(() => {
      fetchPosts();
   }, [page]);

   const removeHandler = (post) =>
      setPosts((prevState) => prevState.filter((p) => post.id !== p.id));

   return {
      createPost,
      removeHandler,
      changePage: setPage,
      modal: isModalOpen,
      setFilter,
      sortedAndSearchedPosts,
      totalPages,
      isLoading,
      isError,
      setModal: setIsModalOpen,
      filter,
      page,
      posts,
      setModal: setIsModalOpen,
   };
};
