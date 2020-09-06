import React, { useEffect, useState, Fragment } from 'react';
import Techitem from './Techitem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
const Techlistmodal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4 className='center'>Technicians</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <Techitem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(Techlistmodal);
