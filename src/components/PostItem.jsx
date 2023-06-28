import Button from './UI/button/Button';

const PostItem = ({ number, post, remove }) => {
   return (
      <div className="post">
         <div className="post__content">
            <strong>
               {number}. {post.title}
            </strong>
            <div className="post__text">{post.body}</div>
         </div>
         <Button onClick={() => remove(post)}>Delete post</Button>
      </div>
   );
};

export default PostItem;
