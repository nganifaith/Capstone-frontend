import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Icon, Input, Wrapper } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [open, setOpen] = useState();
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        open={open}
      />
      <Icon onClick={() => setOpen(!open)} className="material-icons">
        { open ? 'close' : 'search' }
      </Icon>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};
export default SearchBar;
