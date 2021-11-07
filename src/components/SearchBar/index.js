import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Icon, Input, Wrapper } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm, value }) => {
  const [open, setOpen] = useState(!!value);
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        open={open}
      />
      <Icon onClick={() => { setOpen(!open); setSearchTerm(''); }} className="material-icons">
        { open ? 'close' : 'search' }
      </Icon>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default SearchBar;
