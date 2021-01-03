let block1 = document.querySelector('.cimg');
let block2 = document.querySelector('.reklam_first_card_hover');

// CKEDITOR.plugins.addExternal( 'emoji', '/emoji/', 'plugin.js' );



let dbb = document.querySelector('.dbb');
let myDropDown = document.querySelector('.myDropDown');


function dbbClick() {

if (dbb.style.display === 'block') {
	dbb.style.display = 'none'
}else{
	dbb.style.display = 'block'
}
	

}
	myDropDown.addEventListener("click", dbbClick);


