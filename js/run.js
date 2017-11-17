$(document).ready(function() {
    var imagesURLs = new Array();
    var intervalId;
    var btnStart = $("#start_slideshow");
    var btnStop = $("#stop_slideshow");
    $("#thumbnail_container img").each(function() {
        imagesURLs.push($(this).attr("src"));
    })

    function setImage() {
        var mainImageElement = $("#main_image");
        var currentImageURL = mainImageElement.attr("src");
        var currentImageIndex = $.inArray(currentImageURL, imagesURLs);
        if (currentImageIndex == (imagesURLs.length - 1)) {
            currentImageIndex = -1;
        }
        mainImageElement.attr("src", imagesURLs[currentImageIndex + 1]);
    }

    btnStart.click(function() {
        intervalId = setInterval(setImage, 500);
        $(this).attr("disabled", "disabled");
        btnStop.removeAttr("disabled");
    })
    btnStop.click(function() {
        clearInterval(intervalId);
        $(this).attr("disabled", "disabled");
        btnStart.removeAttr("disabled");
    }).attr("disabled", "disabled");
})