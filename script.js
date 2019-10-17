let newHeadlineContent = 'Custumized';

function customHeadline() {
    headlineContent.innerHTML = '<h5>' + '<i>' + newHeadlineContent + '</i>' + '</h5>';
}

function menuToggle() {
 const  menuFull = document.getElementById('menuFull');

 if (menuFull.style.display === 'inline-block') {
     menuFull.style.display = 'none';
 } else {
      menuFull.style.display = 'inline-block';
 }
}

function fullBlogPost(goToFullBlogPost) {
    //alert('Blog under construction, check back later.');
    console.log('Blog under construction, check back later.');
}