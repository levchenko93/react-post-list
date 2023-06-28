import { useState } from 'react';
import Input from './UI/input/Input';
import Button from './UI/button/Button';

const PostForm = ({ create }) => {
   const [post, setPost] = useState({ title: '', body: '' });
   const [isError, setIsError] = useState('');

   const addNewPost = (event) => {
      event.preventDefault();
      if (post.title.trim().length === 0) {
         setIsError('Please enter valid title');
         return;
      }
      const newPost = {
         ...post,
         id: Date.now(),
      };
      create(newPost);
      setPost({ title: '', body: '' });
   };

   return (
      <form style={{ marginTop: '15px' }} onSubmit={addNewPost}>
         <Input
            placeholder="Write title..."
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
         />
         <Input
            placeholder="Write description..."
            type="text"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
         />
         <br />
         {isError && <h3 className="error-message">{isError}</h3>}
         <Button type="submit">Create post</Button>
      </form>
   );
};

export default PostForm;
