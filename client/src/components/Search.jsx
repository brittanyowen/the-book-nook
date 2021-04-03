import React from 'react';

function Search(props) {
  // const { onSubmit, onChange } = props;
  
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <label>
      SEARCH
      <input
        type="text"
        name="search"
        placeholder="search by title or author"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        />
        </label>
    </form>
  );
}

export default Search;