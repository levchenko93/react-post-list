import Select from './UI/select/Select';
import Input from './UI/input/Input';

const PostFilter = ({ filter, setFilter }) => {
   return (
      <div style={{ marginTop: '10px' }}>
         <Input
            type="text"
            placeholder="Search..."
            value={filter.query}
            onChange={(e) => setFilter({ ...filter, query: e.target.value })}
         />
         <Select
            value={filter.sort}
            onChange={(selectedSort) =>
               setFilter({ ...filter, sort: selectedSort })
            }
            defaultValue="Sorted for"
            options={[
               { value: 'title', name: 'For name' },
               { value: 'body', name: 'For description' },
            ]}
         />
      </div>
   );
};

export default PostFilter;
