// IMPORTS -----------------------------------
import React, { JSX } from 'react';
import TextField from "@mui/material/TextField";


// TYPES -------------------------------------
type SearchInputProps = {
  bindSearchTerm: {
    value: string;
    onChange: (e: unknown) => void;
  }
}

// COMPONENT ---------------------------------
const SearchInput: React.FunctionComponent<SearchInputProps> = ({ bindSearchTerm }): JSX.Element => {
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