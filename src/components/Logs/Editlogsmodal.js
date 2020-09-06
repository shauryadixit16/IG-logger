import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { updateLogs } from '../../actions/logActions';
import { deleteCurrent } from '../../actions/logActions';
import SelectOption from '../techs/SelectOption';
const Editlogsmodal = ({ current, updateLogs, deleteCurrent }) => {
  const [message, Setmessage] = useState('');
  const [atn, Setatn] = useState(false);
  const [tech, Settech] = useState('');

  useEffect(() => {
    if (current) {
      Setatn(current.atn);
      Setmessage(current.message);
      Settech(current.tech);
    }
  }, [current]);

  const onsubmit = (e) => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Enter The log and the tech guy.' });
    } else {
      const updatelog = {
        id: current.id,
        atn,
        message,
        tech,
        date: new Date(),
      };
      updateLogs(updatelog);
      M.toast({ html: `Log updated by ${tech}` });
      deleteCurrent();

      Setatn(false);
      Setmessage('');
      Settech('');
    }
  };

  return (
    <div
      id='edit-log-modal'
      className='modal'
      style={{ height: '60%', width: '75%' }}
    >
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => Setmessage(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              onChange={(e) => Settech(e.target.value)}
              className='browser-default'
            >
              <option value='' disabled>
                Select Log Technician
              </option>
              <SelectOption />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  name='atn'
                  value={atn}
                  checked={atn}
                  onChange={(e) => Setatn(!atn)}
                  className='filled-in'
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onsubmit}
          className='modal-close waves-effect waves-blue btn-flat'
        >
          Enter
        </a>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});
export default connect(mapStateToProps, { updateLogs, deleteCurrent })(
  Editlogsmodal
);
