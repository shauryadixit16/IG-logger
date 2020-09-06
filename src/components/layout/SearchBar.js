import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';
const SearchBar = ({ searchLogs }) => {
  const text = useRef('');
  const onchange = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              ref={text}
              onChange={onchange}
              placeholder='Search Logs...'
            />
            <label className='label-icon' for='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
export default connect(null, { searchLogs })(SearchBar);
