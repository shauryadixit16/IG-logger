import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';
const Techitem = ({ tech, deleteTech }) => {
  const ondelete = () => {
    deleteTech(tech.id);
    M.toast({
      html: `${tech.firstName} ${tech.lastName} was removed from the techlist`,
    });
  };
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' onClick={ondelete}>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  );
};
export default connect(null, { deleteTech })(Techitem);
