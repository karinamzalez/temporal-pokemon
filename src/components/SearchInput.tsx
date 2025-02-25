// IMPORTS -----------------------------------
import React, { JSX, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import { useInput } from '@/hooks/useInput';

// TYPES -------------------------------------

// COMPONENT ---------------------------------
const SearchInput: React.FunctionComponent = (): JSX.Element => {
  const { value: searchTerm, bind: bindSearchTerm } = useInput("");
  
  useEffect(() => {
    console.log(searchTerm)
  }, [searchTerm]);

  return (
    <TextField
      fullWidth
      id="search-pokemon"
      label="Search Pokemon"
      margin="normal"
      variant="outlined"
      {...bindSearchTerm}
    />
  )
};

// STYLING (alphabetized) ---------------------


export default SearchInput;