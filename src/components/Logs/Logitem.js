import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';
import { deleteLogs } from '../../actions/logActions';
import { setCurrent } from '../../actions/logActions';

const Logitem = ({ log, deleteLogs, setCurrent }) => {
  const ondelete = (e) => {
    deleteLogs(log.id);
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          onClick={() => setCurrent(log)}
          href='#edit-log-modal'
          className={`modal-trigger ${log.atn ? 'red-text' : 'blue-text'}`}
        >
          {' '}
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span>{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY , h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' onClick={ondelete} className='secondary-content'>
          <i className='material-icons text-grey'>delete</i>
        </a>
      </div>
    </li>
  );
};
export default connect(null, { deleteLogs, setCurrent })(Logitem);
