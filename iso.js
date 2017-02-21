$(function(){


  /*--Isotope--*/
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });


  function getRandomInt(min,max) {//random number generator
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }



  photos = [ //array of photo objects
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/1012161619_HDR.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/1012161622_HDR.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/1012161622a_HDR.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/1012161624_HDR.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/1014160803_HDR.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/astronomy-1848864_1280.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/Bridge.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/brucelee.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/cookie.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/glassesOnDesk.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/notebookWin.jpg"

        },
        {
          "image":"https://dl.dropboxusercontent.com/u/11413212/notepadNcoffee.jpg"

        }



  ]
  $('.grid').css("opacity", "0");//set images to invisible
  function setImageGrid(){

  //Set grid images randomly
  $('.grid-item').each(function(){ //select image container, iterate over each
    randNum = getRandomInt(0,photos.length -1); //get random number range(0, length of photos array)
    file = photos[randNum].image; //set image file to location
    $(this).children().each(function(){ //select image, iterate over each

     //console.log($(this).attr('src', file));
      $(this).attr('src', file);//set image source to file location
    //  console.log(file)
    });
  });
  }

  function displayImageGrid(){//display the images after 1 sec. It takes time for the images to be
                              //set and then placed properly. Sometimes this lags if images need to
                              //be rearraged based on the layout and I don't want the user to see that.
                              //I am hiding that via a setTimeout. All should be done by 1000 miliseconds.

   setTimeout(function(){

       $('.grid').fadeTo('slow',1);
   }, 1000);

  }

  function loadImages(){
    setImageGrid();
    displayImageGrid();
  }
  loadImages();




});
