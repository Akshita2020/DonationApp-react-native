import React, {useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';

interface SearchProps {
  onSearch?: (searchValue: string) => void;
}

const Search = ({onSearch}: SearchProps) => {
  const [search, setSearch] = useState('');
  const textInputRef = useRef<TextInput | null>(null);

  const handleFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    onSearch!(searchValue);
  };
  return (
    <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        style={styles.searchIcon}
        size={scaleFontSize(22)}
      />
      <TextInput
        style={styles.searchInput}
        ref={textInputRef}
        value={search}
        onChangeText={(value: string) => handleSearch(value)}
      />
    </Pressable>
  );
};

export default Search;
