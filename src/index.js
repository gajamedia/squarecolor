import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reactDom from 'react-dom';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

var arr2=undefined;

const squarelist = document.querySelector(".flex-container");
for (var row=1; row <= 8; row++) {

  const scol1 = document.createElement("div")
  const scol2 = document.createElement("div")
  const scol3 = document.createElement("div")
  const scol4 = document.createElement("div")
  const scol5 = document.createElement("div")
  
  squarelist.appendChild(scol1);
    scol1.classList.add("flex-item")
  squarelist.appendChild(scol2);
    scol2.classList.add("flex-item")
  squarelist.appendChild(scol3);
    scol3.classList.add("flex-item")
  squarelist.appendChild(scol4);
    scol4.classList.add("flex-item")
  squarelist.appendChild(scol5);
   scol5.classList.add("flex-item")
}
const cmblist = document.querySelector("#warna");

//const opsi = document.createElement("option")
//cmblist.appendChild(opsi)
//   opsi.setAttribute("value","warna1")
//   opsi.innerHTML="warna1"
//   opsi.style.color="red"

var obj = document.getElementsByClassName("flex-item")

var arr = Object.keys(obj).map(function (key) { return obj[key]  });

function  sameHeightWidth(){
var objWidth = document.getElementsByClassName("flex-item")[0].clientWidth
  arr.forEach(function(e){
  e.style.height=objWidth+"px";
});
}
sameHeightWidth();


window.addEventListener("resize",function(){
selectALLclass('flex-container')
sameHeightWidth()
});


function selectALLclass(a){
  var objWidth = document.getElementsByClassName("flex-item")[0].clientWidth
  var obj = document.getElementsByClassName(a);
  var arr = Object.keys(obj).map(function (key) { return obj[key]  });
  arr.forEach(function(e){
  e.style.height=objWidth+"px";
});
}
selectALLclass('flex-container')

function randomColor(a){
  var obj = document.getElementsByClassName(a);
  var arr = Object.keys(obj).map(function (key) { return obj[key]  });
  arr.forEach(function(e){
  e.style.background=getRandomColor();
  console.log(e.style.background)
  
  const opsi = document.createElement("option")
  cmblist.appendChild(opsi)
   opsi.setAttribute("value", "1")
   opsi.innerHTML= e.style.background
   opsi.style.color= e.style.background
  });
  arr2=arr;
}
randomColor('flex-item');
//arr2[4].style.background=getRandomColor();
//console.log(arr2[4].style.background)
//arr2[4].style.opacity=0;

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

cmblist.onclick = (e) => {
  //console.log("select")
  //console.log(arr2[(cmblist.selectedIndex)-1].style);
  arr2[(cmblist.selectedIndex)-1].style.opacity=0;

  //if (arr2[(cmblist.selectedIndex)-1].style.opacity === 1 ) {
  //  arr2[(cmblist.selectedIndex)-1].style.opacity=0
  //} else {
  //  arr2[(cmblist.selectedIndex)-1].style.opacity=1
  //}
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
