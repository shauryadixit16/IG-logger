import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addLogs } from '../../actions/logActions';
import SelectOption from '../techs/SelectOption';
const Addlogsmodal = ({ addLogs }) => {
  const [message, Setmessage] = useState('');
  const [atn, Setatn] = useState(false);
  const [tech, Settech] = useState('');

  const onsubmit = (e) => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Enter The log and the tech guy.' });
    } else {
      const newlog = {
        message,
        atn,
        tech,
        date: new Date(),
      };
      addLogs(newlog);
      M.toast({ html: `New log has been added by ${tech}` });
      Setatn(false);
      Setmessage('');
      Settech('');
    }
  };
  return (
    <div
      id='add_log_modal'
      className='modal'
      sty={{ height: '60%', width: '75%' }}
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
            <label htmlFor='message' className='active'>
              Log Message
            </label>
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
export default connect(null, { addLogs })(Addlogsmodal);
