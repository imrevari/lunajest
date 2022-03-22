import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';

import ClearIcon from '@mui/icons-material/Clear';

function SearchField({ setSearchName }) {
  const [searchText, setSearchText] = useState('');
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const delayDebounce = setTimeout(() => {
        searchForname();
      }, 300);

      return () => clearTimeout(delayDebounce);
    }
  }, [searchText]);

  const searchForname = value => {
    setSearchName(value ? value : searchText);
  };

  const clearText = () => {
    setSearchText('');
  };

  return (
    <div>
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value);
        }}
        onKeyPress={ev => {
          if (ev.key === 'Enter') {
            ev.preventDefault();
            searchForname(ev.target.value);
          }
        }}
        InputProps={{
          endAdornment: (
            <>
              <ClearIcon onClick={clearText} />
            </>
          )
        }}
      />
    </div>
  );
}

export default SearchField;
