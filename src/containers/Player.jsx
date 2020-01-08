import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFount from './NotFound';
import '../assets/styles/components/Player.scss';

const Player = ({ match, playing = {}, getVideoSource, history }) => {
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;
  useEffect(() => {
    getVideoSource(id);
  }, []);
  return !hasPlaying ? <NotFount /> : (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  );
}

const mapStateToProp = state => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProp, mapDispatchToProps)(Player);
