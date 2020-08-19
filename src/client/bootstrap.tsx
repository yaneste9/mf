import React from 'react';
import { hydrate, render } from 'react-dom';
import AppTwo from './app';

const appContainerTwo = document.querySelector('.app-container-two');
const renderMethod = typeof window !== 'undefined' ? render : hydrate;

renderMethod(<AppTwo />, appContainerTwo);
