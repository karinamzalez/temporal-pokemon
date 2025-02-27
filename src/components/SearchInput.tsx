import React, { JSX } from 'react';
import TextField from "@mui/material/TextField";


// TYPES -------------------------------------
type SearchInputProps = {
  bindSearchTerm: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

export default SearchInput;