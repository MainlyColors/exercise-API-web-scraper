// const jsdom = require('jsdom');
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import fetch from 'node-fetch';

const http = fetch('https://exrx.net/Lists/Directory')
  .then((res) => res.text())
  .then((body) => {
    const dom = new JSDOM(body);

    console.log(dom.window.document.querySelector('article').innerHTML); // "Hello world"
    console.log(dom.window.document.querySelectorAll('article ul a'));

    // console.log(body);
  });

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector('p').textContent); // "Hello world"
