import React from 'react';
import { Parallax } from 'react-parallax';
import '../../styles/background.scss'

const ParallaxComponent = () => {
  return (
    <Parallax
        class="parallax"
        strength={500}
    >
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="title">
        <span>PURE CSS</span>
        <br />
        <span>PARALLAX PIXEL STARS</span>
      </div>
    </Parallax>
  );
};

export default ParallaxComponent;