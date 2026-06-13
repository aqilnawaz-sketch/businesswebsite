function mlaGoMain(anchor,e){
  if(e&&e.currentTarget){var href=e.currentTarget.getAttribute('href');if(href&&href!=='#'&&href.indexOf('javascript')===-1){window.location.href=href;return;}}
  if(e){e.preventDefault();e.stopPropagation();}
  if(document.getElementById('mlaMain')){
    if(anchor&&anchor!=='home'){var el=document.getElementById(anchor);if(el)el.scrollIntoView({behavior:'smooth'});}
    else window.scrollTo({top:0,behavior:'smooth'});
  } else {
    window.location.href=(anchor&&anchor!=='home')?'/#'+anchor:'/';
  }
}
function mlaBack(e){mlaGoMain('practice',e);}
