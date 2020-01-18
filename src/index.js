'use strict';
import "formdata-polyfill";
import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import "es6-promise";
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import command from './modules/command';
import calc from './modules/calc';
import validation from './modules/validation';
import sendForm from './modules/sendForm';

//Timer
countTimer('1 december 2020');  

//Меню
toggleMenu();

//popup
togglePopUp();

// Табы
tabs();

// СЛАЙДЕР
slider();

// Команда
command();

// Калькулятор
calc(100);

// Валидация
validation();

//send-ajax-form
sendForm();