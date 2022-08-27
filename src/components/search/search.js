import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  // const [options, setOptions] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  // Try UseEffect to trigger the fetch on each keystroke

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`http://localhost:8000/search/${search}`);
  //     const json = await res.json();
  //     setLoadOptions(json.hits);
  //   };
  //   fetchData();
  // }, [search]);

  // console.log(loadOptions);

  const fetchData = async (inputValue) => {
    console.log('this is input value: ' + typeof inputValue);
    if (inputValue !== '') {
      try {
        const response = await fetch(
          `http://localhost:8000/search/${inputValue}`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  };

  const loadOptions = async (inputValue) => {
    return fetchData(inputValue);
  };

  // *** JS STYLING *** //

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderBottom: '1px dotted pink',
      color: state.isSelected ? '#6A3F40' : '#2D1622',
      padding: 12,
      fontSize: '0.875rem',
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
      };
    },
    input: (defaultStyles) => ({
      ...defaultStyles,
      color: '#fff',
    }),
    control: () => ({
      width: 'auto',
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
      // const opacity = state.isDisabled ? 0.5 : 1;
      // const transition = 'opacity 300ms';
      // const color = 'color white';
      // const padding = 'padding 8';

      // return { ...provided, opacity, transition, color, padding };
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
    }),
    loadingMessage: (defaultStyles) => ({
      display: 'none',
    }),
  };

  return (
    <AsyncPaginate
      placeholder='Enter city'
      debounceTimeout={600}
      // defaultInputValue='tokyo'
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={customStyles}
      className='select'
    />
  );
};

export default Search;
