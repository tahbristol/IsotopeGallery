$(document).ready(function(){
	let thumbnails = $('.thumbnail');

	thumbnails.map(function(idx,thumbnail){
		let caption = '';
		let imageSrc = $(thumbnail.children[0]).attr('src');
		let name, age;
		[name, age] = imageSrc.match(/\((.+)\).+$/)[1].split(',');
		
		$(thumbnail).children().eq(1).html(`<p>Name: ${name}</p><p>Age: ${age}</p>`);
	})
	
  $('img').addClass('img-default');
  $('img').on('click',function(){
     let image = $(this).attr('src');

    $('#imgFocusContent').html(`<img class="modal-image" src="${image}"/>`);
		let name, age;
		[name, age] = image.match(/\((.+)\).+$/)[1].split(',');
		$('#imageInfo').html(`<p>Name: ${name}</p><p>Age: ${age}</p>`);
    $('#myModal').css('display', 'block');
  });

	$('.close').on('click', function(){
		$('#myModal').hide();
	});
});
