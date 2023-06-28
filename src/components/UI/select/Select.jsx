const Select = ({ options, defaultValue, value, onChange }) => {
   return (
      <select
         value={value}
         style={{ margin: '10px' }}
         onChange={(event) => onChange(event.target.value)}
      >
         <option disabled value="">
            {defaultValue}
         </option>
         {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
               {opt.name}
            </option>
         ))}
      </select>
   );
};

export default Select;
