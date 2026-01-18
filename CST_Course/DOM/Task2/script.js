let navField = document.getElementById('nav');
let headerField = document.getElementById('header');

headerField.style.textAlign = 'right';
navField.style.textAlign = 'center';

navField.style.listStyleType="circle";
navField.style.listStylePosition="inside";

let secImg = headerField.cloneNode(true);
secImg.style.textAlign = 'left';
document.body.appendChild(secImg);