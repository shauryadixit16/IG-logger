import React, { useEffect, useState, Fragment } from 'react';
import Logitem from './Logitem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
const Logs = ({ log: { loading, logs }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className='collection with-header text-center'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs found..Create a Log first..</p>
      ) : (
        logs.map((log) => <Logitem log={log} key={log.id} />)
      )}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
