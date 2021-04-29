import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AutoComplete } from 'antd';
import { FaSearch } from 'react-icons/fa';

import * as actions from '../../store/actions/actions';
import { onlyEnglishLetters } from '../../utilities/helpers';

import classes from './SearchLocation.module.scss';

const SearchLocation = React.memo(() => {
  const inputRef = useRef();
  const { locationOptions } = useSelector(state => state.cityForecast);

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue === inputRef?.current?.value && inputValue.length !== 0) {
        dispatch(actions.fetchLocationOptions(inputValue));
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, inputRef, dispatch]);

  const placeholder = (
    <span className={classes.searchBox}>
      <FaSearch />
      <span>City</span>
    </span>
  );

  return (
    <AutoComplete
      className={classes.searchLocation}
      options={locationOptions}
      placeholder={!inputFocused && placeholder}
      filterOption={(inputValue, option) =>
        option.label.toUpperCase().includes(inputValue.toUpperCase())
      }
      onSelect={(data, option) => {
        setInputValue('');
        dispatch(actions.setLocation(option.value, option.label));
      }}
      value={inputValue}
      onChange={value => {
        const checkedValue = onlyEnglishLetters(value);
        setInputValue(checkedValue);
      }}
    >
      <input
        ref={inputRef}
        onFocus={() => {
          setInputValue('');
          setInputFocused(true);
        }}
        onBlur={() => setInputFocused(false)}
      />
    </AutoComplete>
  );
});

export default SearchLocation;
