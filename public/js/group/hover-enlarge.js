
user = 'user1'

var hoverOver = (event) => {

  const iframe = document.getElementById('other-image-'+user);
  const iframeContent = (iframe.contentWindow || iframe.contentDocument);
  iframe.src = iframe.src;
  setTimeout(() =>{
    event.target.parentElement.style.width = '800px';
    event.target.parentElement.style.height = '500px';
    event.target.style.width = '800px';
    event.target.style.height = '500px';
    iframeContent.draw_generalisations(other_data, true, 'other-image-'+user);
  },200);

};

var hoverOut = ( event ) => {
  const iframe = document.getElementById('other-image-'+user);
  const iframeContent = (iframe.contentWindow || iframe.contentDocument);
  iframe.src = iframe.src;
  setTimeout(() =>{
    event.target.parentElement.style.width = '400px';
    event.target.parentElement.style.height = '200px';
    event.target.style.width = '390px';
    event.target.style.height = '196px';
    iframeContent.draw_generalisations(other_data, false, 'other-image-'+user);
  },200);

};
document.getElementById('other-image-'+user).addEventListener("mouseover", hoverOver, false);

document.getElementById('other-image-'+user).addEventListener("mouseout", hoverOut, false);
// document.getElementById('other-image-'+user).removeEventListener("mouseover", hoverOver, false);
// document.getElementById('other-image-'+user).removeEventListener("mouseout", hoverOut, false);
