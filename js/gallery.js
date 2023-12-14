// A $( document ).ready() block.
$(document).ready(function () {
  //console.log("ready!");

  $("#imed1316-gallery").nanogallery2({
    //nanogallery
    itemsBaseURL: "http://nanogallery2.nanostudio.org/samples/",
    thumbnailWidth: "300",
    thumbnailHeight: auto;
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom",
      display: false
    },
    thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|LableAppear75",
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,
    thumbnailAlignment: "center",
    thumbnailOpenImage: true,
  }); //nanogallery
}); //document ready
