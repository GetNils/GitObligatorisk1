let allHeadlines = document.getElementById('headline');

function customHeadline() {
    allHeadlines.style.fontStyle = "italic";
}

function defaultHeadline() {
    allHeadlines.style.fontStyle = "normal";
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
    alert('Blog under construction, check back later.');
}