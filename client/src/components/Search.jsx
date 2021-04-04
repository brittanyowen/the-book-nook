import React from 'react';

function Search(props) {
  // const { onSubmit, onChange } = props;
  
  return (
    <form className="search" onSubmit={(e) => props.onSubmit(e)}>
      <label>
      SEARCH
        </label>
      <input
        type="text"
        name="search"
        placeholder="search by title or author"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        />
    </form>
  );
}

export default Search;