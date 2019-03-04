import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');
// const holaMundo = <h1>hola mundo!</h1>;

render(<Media title="¿Que es responsive design?" author="LeonidasEsteban" image="./images/covers/responsive.jpg"/>, app);

