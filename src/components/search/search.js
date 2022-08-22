import React, { useState } from 'react';
import { AsyncPaginate, withAsyncPaginate } from 'react-select-async-paginate';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `http://localhost:8000/search/${inputValue}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'none',
      borderBottom: '1px solid pink',
      color: state.isSelected ? 'pink' : 'white',
      padding: 8,
    }),
    noOptionsMessage: (defaultStyles) => ({
      ...defaultStyles,
      color: 'white',
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: '#ffffff',
        fontSize: '0.875rem',
        textAlign: 'center',
      };
    },
    input: (defaultStyles) => ({
      ...defaultStyles,
      color: '#fff',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 'auto',
      height: 32,
      display: 'flex',
      padding: '0 1rem',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      const color = 'color white';

      return { ...provided, opacity, transition, color };
    },
    valueContainer: (defaultStyles) => ({
      ...defaultStyles,
      borderBottom: '1px solid rgba(255,255,255,0.5)',
      textAlign: 'center',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    indicatorsContainer: () => ({
      display: 'none',
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'rgba(255,255,255, 0.1)',
      border: 'none',
      boxShadow: 'unset',
    }),
    loadingMessage: (defaultStyles) => ({
      display: 'none',
    }),
  };

  return (
    <AsyncPaginate
      placeholder='Enter city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={customStyles}
      className='select'
    />
  );
};

export default Search;
