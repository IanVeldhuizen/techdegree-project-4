// Lightbox options

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'positionFromTop': 40
});




//======================== search

$(document).ready(function () {

const $search = $("#userSearch");
const $img = $(this).find("a").attr("data-title");

$($search).keyup(function() {

    const $result = $($search).val().toLowerCase();
    
    for (let i = 0; i < $img.length; i++) {
        const $title = $($img[i].getAttribute("data-title"));
        if ($title.toLowerCase().includes($result)) {
            $($img[i]).show();
        }else {
            $($img[i]).hide();
        }
    }
})

});

/* ORIGINAL SUMBIT

$(document).ready(function () {
    $("#userSearch").keyup(function () {
        const $result = $(this).val().toLowerCase();
        $(".gallery_img").hide();
        $(".gallery_img").each(function () {
            const $img = $(this).text().toLowerCase();

            if ($img.indexOf($result) != -1) {
                $(this).show();
            }
        });
    });


});

*/

