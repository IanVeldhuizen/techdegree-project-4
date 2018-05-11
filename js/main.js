// Lightbox options

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'positionFromTop': 40
});




//======================== search

const search = document.getElementById("userSearch");
const img = document.querySelectorAll("a[data-title]");


 search.addEventListener("keyup", function(event) {

     let result = search.value.toLowerCase();

     for (let i = 0; i < img.length; i++){
        let title = img[i].getAttribute("data-title");
         if (title.toLowerCase().includes(result)) {
             img[i].style.display = '';

         } else {
              img[i].style.display = 'none';
            
         }
     }
 });

