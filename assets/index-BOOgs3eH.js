var M=c=>{throw TypeError(c)};var v=(c,e,t)=>e.has(c)||M("Cannot "+t);var o=(c,e,t)=>(v(c,e,"read from private field"),t?t.call(c):e.get(c)),Z=(c,e,t)=>e.has(c)?M("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(c):e.set(c,t),x=(c,e,t,l)=>(v(c,e,"write to private field"),l?l.call(c,t):e.set(c,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();async function p(c){try{const e=await fetch("./data.json");if(!e.ok)throw new Error("ネットワークエラー: データが取得できませんでした。");const t=await e.json(),l=c.target;if(!l)return;const a=l.id,s=t.find(i=>i.id===a);(s==null?void 0:s.crowded)==="yes"&&(l.classList.toggle("is_crowded"),l.classList.contains("is_crowded")?l.textContent="残席わずか":l.textContent="空き席状況を確認"),(s==null?void 0:s.crowded)==="no"&&(l.classList.toggle("is_free"),l.classList.contains("is_free")?l.textContent="お席あります":l.textContent="空き席状況を確認")}catch(e){console.error("データ取得エラー:",e)}}var r;class J{constructor(e){Z(this,r);x(this,r,e)}get cityName(){return o(this,r).timezone}get temperatureUnit(){return o(this,r).current_units.temperature_2m}get hourlyTime(){return o(this,r).current.time}get temperature_2m(){return o(this,r).current.temperature_2m}get currentCode(){return o(this,r).current.weather_code}get weeklyTime(){return o(this,r).daily.time}get weatherCode(){return o(this,r).daily.weather_code}get temperatureMin(){return o(this,r).daily.temperature_2m_min}get temperatureMax(){return o(this,r).daily.temperature_2m_max}}r=new WeakMap;const $={0:"Clear",1:"Mostly Clear",2:"Cloudy",3:"Partly Cloudy",45:"Fog",48:"Frost",51:"Light Rain",53:"Moderate Rain",56:"Light Snow",57:"Moderate Snow",61:"Light Thunderstorm",63:"Moderate Thunderstorm",65:"Severe Thunderstorm",66:"Light Thunder Snow",67:"Moderate Thunder Snow",71:"Light Rain or Snow",73:"Moderate Rain or Snow",75:"Heavy Rain or Snow",77:"Hail",80:"Light Thunder",81:"Moderate Thunder",82:"Severe Thunder",85:"Light Snow or Hail",86:"Moderate Snow or Hail",95:"Severe Thunderstorm"},K={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},G="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{fill:%23f4684d;}%3c/style%3e%3c/defs%3e%3ctitle%3e01d%3c/title%3e%3cg%20id='レイヤー_2'%20data-name='レイヤー%202'%3e%3cg%20id='outlined'%3e%3crect%20class='cls-1'%20width='200'%20height='200'/%3e%3ccircle%20class='cls-2'%20cx='100'%20cy='100'%20r='43.14'/%3e%3cpath%20d='M100,149.14A49.14,49.14,0,1,1,149.14,100,49.19,49.19,0,0,1,100,149.14Zm0-86.28A37.14,37.14,0,1,0,137.14,100,37.18,37.18,0,0,0,100,62.86Z'/%3e%3cpath%20d='M100,45a6,6,0,0,1-6-6V19.36a6,6,0,0,1,12,0V39A6,6,0,0,1,100,45Z'/%3e%3cpath%20d='M56.86,62.86a6,6,0,0,1-4.24-1.76L38.74,47.22a6,6,0,0,1,8.48-8.48L61.1,52.62a6,6,0,0,1-4.24,10.24Z'/%3e%3cpath%20d='M39,106H19.36a6,6,0,0,1,0-12H39a6,6,0,1,1,0,12Z'/%3e%3cpath%20d='M43,163a6,6,0,0,1-4.24-10.24L52.62,138.9a6,6,0,1,1,8.48,8.48L47.22,161.26A6,6,0,0,1,43,163Z'/%3e%3cpath%20d='M100,186.64a6,6,0,0,1-6-6V161a6,6,0,0,1,12,0v19.63A6,6,0,0,1,100,186.64Z'/%3e%3cpath%20d='M157,163a6,6,0,0,1-4.24-1.76L138.9,147.38a6,6,0,1,1,8.48-8.48l13.88,13.88A6,6,0,0,1,157,163Z'/%3e%3cpath%20d='M180.64,106H161a6,6,0,0,1,0-12h19.63a6,6,0,0,1,0,12Z'/%3e%3cpath%20d='M143.14,62.86a6,6,0,0,1-4.24-10.24l13.88-13.88a6,6,0,0,1,8.48,8.48L147.38,61.1A6,6,0,0,1,143.14,62.86Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Q="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{fill:%23f4684d;}.cls-3{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e02d%3c/title%3e%3cg%20id='レイヤー_2'%20data-name='レイヤー%202'%3e%3cg%20id='outlined'%3e%3crect%20class='cls-1'%20width='200'%20height='200'/%3e%3ccircle%20class='cls-2'%20cx='145'%20cy='78.03'%20r='21.99'/%3e%3cpath%20d='M145,105.53a27.51,27.51,0,0,1-26.85-33.41h0A27.49,27.49,0,1,1,145,105.53Zm-16.11-31a16.5,16.5,0,1,0,7.23-10.35,16.5,16.5,0,0,0-7.23,10.35Z'/%3e%3cpath%20d='M152.58,48.18a4.58,4.58,0,0,1-1-.11,4.49,4.49,0,0,1-3.43-5.36l2.43-11.06a4.5,4.5,0,0,1,8.79,1.94l-2.43,11A4.51,4.51,0,0,1,152.58,48.18Z'/%3e%3cpath%20d='M126.07,52.89a4.51,4.51,0,0,1-3.8-2.08l-6.1-9.54a4.5,4.5,0,0,1,7.59-4.85L129.85,46a4.51,4.51,0,0,1-3.78,6.93Z'/%3e%3cpath%20d='M190.42,92.54a4.57,4.57,0,0,1-1-.1L178.39,90a4.5,4.5,0,0,1,1.94-8.79l11,2.44a4.5,4.5,0,0,1-1,8.89Z'/%3e%3cpath%20d='M174.66,63.59a4.5,4.5,0,0,1-2.43-8.29l9.54-6.09a4.5,4.5,0,1,1,4.84,7.58l-9.54,6.09A4.47,4.47,0,0,1,174.66,63.59Z'/%3e%3cpath%20class='cls-3'%20d='M152.49,93.07a24.66,24.66,0,0,0-12.72,3.52A42.45,42.45,0,0,0,58.53,83.06a30.63,30.63,0,0,0-4.82-.39,29.9,29.9,0,0,0,0,59.79h98.78a24.7,24.7,0,0,0,0-49.39Z'/%3e%3cpath%20d='M152.49,148.46H53.71A35.9,35.9,0,1,1,55,76.69a48.45,48.45,0,0,1,89.46,11.45,30.7,30.7,0,1,1,8.05,60.32ZM53.71,88.67a23.9,23.9,0,0,0,0,47.79h98.78a18.7,18.7,0,1,0-9.62-34.73l-8.31,5-.77-9.66A36.45,36.45,0,0,0,64,85.46l-1.86,4.27L57.57,89A24,24,0,0,0,53.71,88.67Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",X="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e03d%3c/title%3e%3cg%20id='レイヤー_2'%20data-name='レイヤー%202'%3e%3cg%20id='outlined'%3e%3crect%20class='cls-1'%20width='200'%20height='200'/%3e%3cpath%20class='cls-2'%20d='M159.5,92a28.42,28.42,0,0,0-14.67,4.06A49,49,0,0,0,51.06,80.45,35.06,35.06,0,0,0,45.5,80a34.5,34.5,0,0,0,0,69h114a28.5,28.5,0,0,0,0-57Z'/%3e%3cpath%20d='M159.5,155H45.5a40.5,40.5,0,0,1,0-81c.67,0,1.33,0,2,0a55,55,0,0,1,102,13.42,34.5,34.5,0,1,1,10,67.53ZM45.5,86a28.5,28.5,0,0,0,0,57h114a22.5,22.5,0,1,0-11.58-41.79l-8.3,5-.77-9.66A43,43,0,0,0,56.57,82.85L54.7,87.12l-4.6-.74A28.64,28.64,0,0,0,45.5,86Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{fill:%23fff;}.cls-3{fill:%237078e0;}%3c/style%3e%3c/defs%3e%3ctitle%3e04d%3c/title%3e%3cg%20id='レイヤー_2'%20data-name='レイヤー%202'%3e%3cg%20id='outlined'%3e%3crect%20class='cls-1'%20width='200'%20height='200'/%3e%3cpath%20class='cls-2'%20d='M152.49,93.07a24.66,24.66,0,0,0-12.72,3.52A42.45,42.45,0,0,0,58.53,83.06a30.63,30.63,0,0,0-4.82-.39,29.9,29.9,0,0,0,0,59.79h98.78a24.7,24.7,0,0,0,0-49.39Z'/%3e%3cpath%20d='M152.49,148.46H53.71A35.9,35.9,0,1,1,55,76.69a48.45,48.45,0,0,1,89.46,11.45,30.7,30.7,0,1,1,8.05,60.32ZM53.71,88.67a23.9,23.9,0,0,0,0,47.79h98.78a18.7,18.7,0,1,0-9.62-34.73l-8.31,5-.77-9.66A36.44,36.44,0,0,0,64,85.46l-1.87,4.27L57.57,89A24,24,0,0,0,53.71,88.67Z'/%3e%3cpath%20class='cls-3'%20d='M97.47,47.54a52.78,52.78,0,0,1,49.76,35.93,34.12,34.12,0,0,1,5.26-.4,34.74,34.74,0,0,1,33.26,24.86,24.7,24.7,0,0,0-34.38-33A42.44,42.44,0,0,0,75.44,52.42,52.32,52.32,0,0,1,97.47,47.54Z'/%3e%3cpath%20class='cls-3'%20d='M52.68,72.68a52.83,52.83,0,0,1,9.58-11.53,29.88,29.88,0,0,0-22.37,14A40,40,0,0,1,52.68,72.68Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",e0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{fill:%23fff;}.cls-3{fill:%233891e8;}%3c/style%3e%3c/defs%3e%3ctitle%3e09d%3c/title%3e%3cg%20id='レイヤー_2'%20data-name='レイヤー%202'%3e%3cg%20id='outlined'%3e%3crect%20class='cls-1'%20width='200'%20height='200'/%3e%3cpath%20class='cls-2'%20d='M160,92a28.42,28.42,0,0,0-14.67,4.06A49,49,0,0,0,51.56,80.45,35.06,35.06,0,0,0,46,80a34.5,34.5,0,0,0,0,69H160a28.5,28.5,0,0,0,0-57Z'/%3e%3cpath%20d='M159.5,155H146.72a6,6,0,0,1,0-12H159.5a22.5,22.5,0,1,0-11.58-41.79l-8.3,5-.77-9.66A43,43,0,0,0,56.57,82.85L54.7,87.12l-4.6-.74A28.5,28.5,0,1,0,45.5,143a6,6,0,0,1,0,12,40.5,40.5,0,0,1,0-81c.67,0,1.33,0,2,0a55,55,0,0,1,102,13.42,34.5,34.5,0,1,1,10,67.53Z'/%3e%3cpath%20class='cls-3'%20d='M65.29,182.9a3.68,3.68,0,0,1-.66-.06,4,4,0,0,1-3.29-4.59l8-48.39a4,4,0,0,1,7.89,1.31l-8,48.38A4,4,0,0,1,65.29,182.9Z'/%3e%3cpath%20class='cls-3'%20d='M83.72,182.9a3.68,3.68,0,0,1-.66-.06,4,4,0,0,1-3.29-4.59l8-48.39a4,4,0,1,1,7.89,1.31l-8,48.38A4,4,0,0,1,83.72,182.9Z'/%3e%3cpath%20class='cls-3'%20d='M102.15,182.9a3.68,3.68,0,0,1-.66-.06,4,4,0,0,1-3.29-4.59l8-48.39a4,4,0,1,1,7.89,1.31l-8,48.38A4,4,0,0,1,102.15,182.9Z'/%3e%3cpath%20class='cls-3'%20d='M120.58,182.9a3.68,3.68,0,0,1-.66-.06,4,4,0,0,1-3.29-4.59l8-48.39a4,4,0,0,1,7.89,1.31l-8,48.38A4,4,0,0,1,120.58,182.9Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",t0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{fill:%23fff;}.cls-3{fill:%233891e8;}%3c/style%3e%3c/defs%3e%3ctitle%3e10d%3c/title%3e%3cg%20id='レイヤー_2'%20data-name='レイヤー%202'%3e%3cg%20id='outlined'%3e%3crect%20class='cls-1'%20width='200'%20height='200'/%3e%3cpath%20class='cls-2'%20d='M160,92a28.42,28.42,0,0,0-14.67,4.06A49,49,0,0,0,51.56,80.45,35.06,35.06,0,0,0,46,80a34.5,34.5,0,0,0,0,69H160a28.5,28.5,0,0,0,0-57Z'/%3e%3cpath%20d='M159.5,155H146.72a6,6,0,0,1,0-12H159.5a22.5,22.5,0,1,0-11.58-41.79l-8.3,5-.77-9.66A43,43,0,0,0,56.57,82.85L54.7,87.12l-4.6-.74A28.5,28.5,0,1,0,45.5,143a6,6,0,0,1,0,12,40.5,40.5,0,0,1,0-81c.67,0,1.33,0,2,0a55,55,0,0,1,102,13.42,34.5,34.5,0,1,1,10,67.53Z'/%3e%3cpath%20class='cls-3'%20d='M69.37,163.19a5.67,5.67,0,0,1-.82-.07,5,5,0,0,1-4.12-5.75l.65-3.94A5,5,0,0,1,75,155.06L74.3,159A5,5,0,0,1,69.37,163.19Zm3.26-19.73a5.76,5.76,0,0,1-.82-.06,5,5,0,0,1-4.12-5.75l1.31-7.9a5,5,0,0,1,9.86,1.63l-1.3,7.9A5,5,0,0,1,72.63,143.46Z'/%3e%3cpath%20class='cls-3'%20d='M85.75,171.92a5.07,5.07,0,0,1-.94-.09,5,5,0,0,1-4-5.84l1.5-7.86A5,5,0,1,1,92.15,160l-1.49,7.86A5,5,0,0,1,85.75,171.92Zm4.48-23.58a5.07,5.07,0,0,1-.94-.09,5,5,0,0,1-4-5.84l1.49-7.86a5,5,0,1,1,9.82,1.87l-1.49,7.86A5,5,0,0,1,90.23,148.34Z'/%3e%3cpath%20class='cls-3'%20d='M106,164.72a4.54,4.54,0,0,1-.82-.07A5,5,0,0,1,101,158.9l.9-5.47a5,5,0,0,1,9.87,1.63l-.91,5.47A5,5,0,0,1,106,164.72Zm3.51-21.26a5.76,5.76,0,0,1-.82-.06,5,5,0,0,1-4.12-5.75l1.31-7.9a5,5,0,1,1,9.86,1.64l-1.3,7.89A5,5,0,0,1,109.49,143.46Z'/%3e%3cpath%20class='cls-3'%20d='M122,179a4.62,4.62,0,0,1-.82-.07,5,5,0,0,1-4.12-5.75l1.31-7.89a5,5,0,1,1,9.86,1.63l-1.3,7.89A5,5,0,0,1,122,179ZM126,155.35a4.54,4.54,0,0,1-.82-.07,5,5,0,0,1-4.12-5.75l1.31-7.89a5,5,0,1,1,9.86,1.63l-1.31,7.89A5,5,0,0,1,126,155.35Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",c0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}.cls-2{fill:none;}.cls-3{fill:%23ffb717;}%3c/style%3e%3c/defs%3e%3ctitle%3e11d%3c/title%3e%3cg%20id='レイヤー_2'%20data-name='レイヤー%202'%3e%3cg%20id='outlined'%3e%3cpath%20class='cls-1'%20d='M160,91.5a28.44,28.44,0,0,0-14.67,4.06A49,49,0,0,0,51.57,80,35.28,35.28,0,0,0,46,79.5a34.5,34.5,0,0,0,0,69H160a28.5,28.5,0,0,0,0-57Z'/%3e%3crect%20class='cls-2'%20width='200'%20height='200'/%3e%3cpath%20class='cls-1'%20d='M159.5,92a28.42,28.42,0,0,0-14.67,4.06A49,49,0,0,0,51.06,80.45,35.06,35.06,0,0,0,45.5,80a34.5,34.5,0,0,0,0,69h114a28.5,28.5,0,0,0,0-57Z'/%3e%3cpolygon%20points='131.07%20128.07%20108.31%20128.07%20124.06%20100.48%2091.29%20100.48%2072.83%20137.41%2088.99%20137.41%2067.93%20187.53%20131.07%20128.07'/%3e%3cpath%20d='M159.5,86a34.46,34.46,0,0,0-10,1.47,55,55,0,0,0-102-13.42c-.67,0-1.33,0-2,0a40.5,40.5,0,0,0,0,81H75.09L80,143.41H63.12l.21-.41H45.5a28.5,28.5,0,1,1,4.6-56.62l4.6.74,1.87-4.27a43,43,0,0,1,82.28,13.69l.77,9.66,8.3-5A22.5,22.5,0,1,1,159.5,143H124l-12.74,12H159.5a34.5,34.5,0,0,0,0-69Z'/%3e%3cpolygon%20class='cls-3'%20points='131.07%20128.07%20108.31%20128.07%20124.06%20100.48%2091.29%20100.48%2072.83%20137.41%2088.99%20137.41%2067.93%20187.53%20131.07%20128.07'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",a0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2{fill:none;}.cls-2{stroke:%23000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:8px;}.cls-3{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13d%3c/title%3e%3cg%20id='レイヤー_2'%20data-name='レイヤー%202'%3e%3cg%20id='outlined'%3e%3crect%20class='cls-1'%20width='200'%20height='200'/%3e%3cline%20class='cls-2'%20x1='139.07'%20y1='109'%20x2='171.25'%20y2='76.83'/%3e%3cpath%20class='cls-3'%20d='M137.44,91.76a44.68,44.68,0,1,0-74.88,0,54.92,54.92,0,0,0-17.63,40.38c0,30.41,24.65,49.07,55.07,49.07s55.07-18.66,55.07-49.07A54.92,54.92,0,0,0,137.44,91.76Z'/%3e%3cpath%20d='M100,187.21c-16.57,0-31.78-5.17-42.83-14.56-11.76-10-18.24-24.38-18.24-40.51A61.31,61.31,0,0,1,55.06,90.8a50.68,50.68,0,1,1,89.88,0,61.31,61.31,0,0,1,16.13,41.34c0,16.13-6.48,30.51-18.24,40.51C131.78,182,116.57,187.21,100,187.21Zm0-158.49A38.66,38.66,0,0,0,67.59,88.48l2.76,4.24-3.71,3.44a49.25,49.25,0,0,0-15.71,36c0,25.36,20.18,43.07,49.07,43.07s49.07-17.71,49.07-43.07a49.25,49.25,0,0,0-15.71-36l-3.71-3.44,2.76-4.24A38.66,38.66,0,0,0,100,28.72Z'/%3e%3cline%20class='cls-2'%20x1='181.25'%20y1='91.52'%20x2='157.41'%20y2='90.67'/%3e%3ccircle%20cx='86.77'%20cy='67.39'%20r='5.71'/%3e%3ccircle%20cx='111.41'%20cy='67.39'%20r='5.71'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",s0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{fill:%23666;}.cls-3{fill:%23999;}%3c/style%3e%3c/defs%3e%3ctitle%3e50d%3c/title%3e%3cg%20id='レイヤー_2'%20data-name='レイヤー%202'%3e%3cg%20id='outlined'%3e%3crect%20class='cls-1'%20width='200'%20height='200'/%3e%3cpath%20d='M60.71,81.37A139.25,139.25,0,0,1,22.17,76.2a6,6,0,0,1,3.3-11.54c29.28,8.37,57.37,3.7,79.94,0l2.62-.44c25.26-4.22,49.11-8.2,71.38.72A6,6,0,0,1,175,76C155.8,68.36,134.58,71.9,110,76l-2.64.44C93.56,78.74,77.77,81.37,60.71,81.37Z'/%3e%3cpath%20class='cls-2'%20d='M60.71,110.92a139.23,139.23,0,0,1-38.54-5.16,6,6,0,0,1,3.3-11.54c29.28,8.37,57.37,3.7,79.94-.06l2.62-.43c25.26-4.22,49.11-8.2,71.38.71A6,6,0,0,1,175,105.58c-19.15-7.66-40.37-4.12-64.94,0l-2.64.44C93.56,108.3,77.77,110.92,60.71,110.92Z'/%3e%3cpath%20class='cls-3'%20d='M60.71,140.48a138.88,138.88,0,0,1-38.54-5.17,6,6,0,1,1,3.3-11.53c29.28,8.37,57.37,3.7,79.94-.06l2.62-.44c25.26-4.21,49.11-8.19,71.38.72A6,6,0,1,1,175,135.14c-19.15-7.66-40.37-4.12-64.94,0l-2.64.44C93.56,137.86,77.77,140.48,60.71,140.48Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",l0="/async-lab/assets/loading-Cd6WsAMT.gif";function L(c){let e,t;switch(c){case 0:case 1:e=G,t="晴れ";break;case 3:e=Q,t="曇り時々晴れ";break;case 2:e=X,t="曇り";break;case 45:case 48:e=Y,t="霧・霜";break;case 71:case 73:e=e0,t="雨又は雪";break;case 51:case 53:e=t0,t="小雨・中程度の雨";break;case 61:case 63:case 65:case 80:case 81:case 82:case 95:e=c0,t="雷雨";break;case 56:case 57:case 66:case 67:case 75:case 85:case 86:e=a0,t="雪";break;case 77:e=s0,t="ひょう";break;default:e=l0,t="未知の天気コード"}return{imageUrl:e,altString:t}}const r0=[{id:"ndl",name:"国立国会図書館（東京本館）",latitude:35.6824,longitude:139.7587},{id:"ndl_kansai",name:"国立国会図書館 関西館",latitude:34.8196,longitude:135.7803},{id:"kyoto_u_lib",name:"京大附属図書館",latitude:35.0273,longitude:135.7809},{id:"takeo_lib",name:"武雄市図書館",latitude:33.1913,longitude:130.0204}],S=document.querySelector(".c_weather__temperature"),H=document.querySelector(".c_weather__description"),C=document.querySelectorAll(".c_forecast__day"),b=document.querySelector(".c_weather__image"),I=document.querySelector(".c_forecast__weatherIcon1"),T=document.querySelector(".c_forecast__weatherIcon2"),k=document.querySelector(".c_forecast__weatherIcon3"),q=document.querySelector(".c_forecast__high"),B=document.querySelector(".c_forecast__high1"),E=document.querySelector(".c_forecast__high2"),O=document.querySelector(".c_forecast__high3"),F=document.querySelector(".c_forecast__low"),R=document.querySelector(".c_forecast__low1"),U=document.querySelector(".c_forecast__low2"),D=document.querySelector(".c_forecast__low3");async function N(){const e=document.getElementById("weatherCity").value,t=r0.find(n=>n.id===e),l=t==null?void 0:t.latitude,a=t==null?void 0:t.longitude,i=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${l}&longitude=${a}&daily=temperature_2m_max,temperature_2m_min,weather_code&current=weather_code,temperature_2m&timezone=Asia%2FTokyo`)).json(),d=new J(i),P=new Date().getDay();S&&(S.textContent=String(d.temperature_2m)+d.temperatureUnit);const{imageUrl:W,altString:j}=L(d.currentCode);if(b.src=W,b.alt=j,H){const n=d.currentCode;H.textContent=$[n]||"不明な天気"}function g(n,h,_,A){const{imageUrl:V,altString:z}=L(n);h&&(h.src=V,h.alt=z),_&&(_.textContent=String(d.temperatureMax[n])),A&&(A.textContent=String(d.temperatureMin[n]))}q&&F&&g(0,null,q,F),I&&B&&R&&g(1,I,B,R),T&&E&&U&&g(2,T,E,U),k&&O&&D&&g(3,k,O,D);let y=P+1;C.forEach((n,h)=>{C[h].textContent=K[y],y++})}const u=document.getElementById("js"),f=document.getElementById("security"),m=document.getElementById("aiux"),w=document.getElementById("weatherCity");u==null||u.addEventListener("click",p);f==null||f.addEventListener("click",p);m==null||m.addEventListener("click",p);document.addEventListener("DOMContentLoaded",async()=>{try{await N()}catch(c){console.error("天気情報の取得に失敗しました",c)}});w==null||w.addEventListener("change",N);
