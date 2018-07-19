const hexNumber =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const button = document.querySelector('.btn');
const body = document.querySelector('body');
const span = document.querySelector('.hex');


button.addEventListener('click', changeColor);

function changeColor(){

	let hexaCode='#';

	for(let i=0; i<6; i++){
      
         let ran = Math.floor(Math.random()*hexNumber.length)


		hexaCode=hexaCode+hexNumber[ran];
	}
    body.style.backgroundColor = hexaCode;
    span.innerHTML = hexaCode;


}