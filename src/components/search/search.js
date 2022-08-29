import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const fetchData = async (inputValue) => {
    if (inputValue !== '') {
      try {
        const response = await fetch(
          `http://localhost:8000/search/${inputValue}`
        );
        const data = await response.json();
        return {
          ...data,
        };
      } catch (error) {
        console.error(error);
      }
    }
  };

  const loadOptions = async (inputValue) => {
    if (inputValue !== '') {
      const result = await fetchData(inputValue);
      return result;
    } else {
      return {
        options: [],
      };
    }
  };

  // *** JS STYLING *** //

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'rgba(255, 255, 255)',
      color: state.isSelected ? '#6A3F40' : '#2D1622',
      padding: 12,
      fontSize: '0.875rem',
      fontWeight: '600',
    }),
    noOptionsMessage: (defaultStyles) => ({
      display: 'none',
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: '#ffffff',
        fontSize: '1rem',
      };
    },
    input: (defaultStyles) => ({
      ...defaultStyles,
      color: '#fff',
    }),
    control: () => ({
      width: '320px',
      height: 32,
      padding: '0 1rem',
      margin: '0 1rem',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.5 : 1,
      transition: 'opacity 300ms',
      color: 'white',
      padding: '8px',
    }),
    valueContainer: (defaultStyles) => ({
      ...defaultStyles,
      borderBottom: '1px solid rgba(255,255,255,0.5)',
      textAlign: 'center',
      padding: '50 0',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    indicatorsContainer: () => ({
      display: 'none',
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'none',
      border: 'none',
      borderRadius: 4,
      boxShadow: 'unset',
      display: 'flex',
      justifyContent: 'center',
    }),
    menuList: (defaultStyles) => ({
      ...defaultStyles,
      padding: 0,
      width: '300px',
      borderRadius: '4px',
      boxShadow: '0 3px 3px rgba(0,0,0,0.2)',
    }),
    loadingMessage: (defaultStyles) => ({
      display: 'none',
    }),
  };

  return (
    <AsyncPaginate
      placeholder='Enter city ...'
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
