const myPicturesArray = [
    {
      class: "animals",
      title: "lemurs",
      url: "docs/assets/animals1.jpg",
      thumbnailUrl: "docs/assets/animals1_thumb.jpg"
    },
    {
      class: "animals",
      title: "chameleon",
      url: "docs/assets/animals2.jpg",
      thumbnailUrl: "docs/assets/animals2_thumb.jpg"
    },
    {
      class: "animals",
      title: "turtle",
      url: "docs/assets/animals3.jpg",
      thumbnailUrl: "docs/assets/animals3_thumb.jpg"
    },
    {
      class: "cars",
      title: "lambo",
      url: "docs/assets/cars1.jpg",
      thumbnailUrl: "docs/assets/cars1_thumb.jpg"
    },
    {
      class: "cars",
      title: "suv",
      url: "docs/assets/cars2.jpg",
      thumbnailUrl: "docs/assets/cars2_thumb.jpg"
    },
    {
      class: "cars",
      title: "muscle",
      url: "docs/assets/cars3.jpg",
      thumbnailUrl: "docs/assets/cars3_thumb.jpg"
    },
    {
      class: "landscapes",
      title: "mountains",
      url: "docs/assets/landscapes1.jpg",
      thumbnailUrl: "docs/assets/landscapes1_thumb.jpg"
    },
    {
      class: "landscapes",
      title: "river",
      url: "docs/assets/landscapes2.jpg",
      thumbnailUrl: "docs/assets/landscapes2_thumb.jpg"
    },
    {
      class: "landscapes",
      title: "field",
      url: "docs/assets/landscapes3.jpg",
      thumbnailUrl: "docs/assets/landscapes3_thumb.jpg"
    }
  ];
  
  window.addEventListener('load', function() {

    const animalsAlbumButton = document.querySelector('#animalsAlbumButton');
    const carsAlbumButton = document.querySelector('#carsAlbumButton');
    const landscapesAlbumButton = document.querySelector('#landscapesAlbumButton');
    const thumbnailsDiv = document.querySelector('#thumbnailsDiv');
    const selectedDiv = document.querySelector('#selectedDiv');
    const removeImageButton = document.querySelector('#removeImageButton');

    function displayAlbum(startIndex, endIndex) {
      thumbnailsDiv.innerHTML = "";

      myPicturesArray.slice(startIndex, endIndex).forEach(function (currentImage) {
        const images = document.createElement('img');
        images.alt = currentImage.title;
        images.src = currentImage.thumbnailUrl;
        images.style.width = '15rem';
        images.style.height = '10rem';

        thumbnailsDiv.append(images);


        images.addEventListener('click', function displaybigImage() {
          selectedDiv.innerHTML = "";
          const bigImage = document.createElement('img');
          bigImage.src = currentImage.url;
          bigImage.style.width = '30rem';
          bigImage.style.height = '20rem';    
    
          selectedDiv.append(bigImage);
          removeImageButton.style.display = 'block';  


          removeImageButton.onclick = function deleteImage() {
            const imageIndex = myPicturesArray.indexOf(currentImage);
            myPicturesArray.splice(imageIndex, 1, {title: "Image removed"});

            displayAlbum(startIndex, endIndex);
            removeImageButton.style.display = 'none';
          };
        });
      });
    }

    animalsAlbumButton.onclick = function() {
      displayAlbum(0, 3);
    };
    carsAlbumButton.onclick = function() {
      displayAlbum(3, 6);
    };
    landscapesAlbumButton.onclick = function() {
      displayAlbum(6, 9);
    };
  });