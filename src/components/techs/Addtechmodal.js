import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
const Addtechmodal = ({ addTech }) => {
  const [firstName, SetfirstName] = useState('');
  const [lastName, SetlastName] = useState('');

  const onsubmit = (e) => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Enter The first and the last name. ' });
    } else {
      addTech({
        firstName,
        lastName,
      });
      M.toast({ html: `${firstName} ${lastName} was added as a tech` });
      SetfirstName('');
      SetlastName('');
    }
  };
  return (
    <div
      id='add-tech-modal'
      className='modal'
      sty={{ height: '60%', width: '75%' }}
    >
      <div className='modal-content'>
        <h4>Enter New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => SetfirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              FirstName
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => SetlastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              LastName
            </label>
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
export default connect(null, { addTech })(Addtechmodal);
