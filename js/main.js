// Lightbox options

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'positionFromTop': 40
});




//======================== search


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



