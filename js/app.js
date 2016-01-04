$('.toggle-icon').click(function(){
  $(this).toggleClass('show');
  $('.nav-content').toggleClass('show');
});

$.get('content/content.md', function(data) {
       outputEle = document.getElementById('content-md');
		outputEle.innerHTML = micromarkdown.parse(data);
}, 'text');
