//code for camera//
$(document).on("change", "#Camera", chkCamera);

function chkCamera() {
  var camera = $("#Camera").val();
  if (camera === "def") alert("please pick a camera!");
}

//code for brand//
$(document).on("change", "#Brand", chkBrand);

function chkBrand() {
  var brand = $("#Brand").val();
  if (brand === "def") alert("please pick a brand!");
}

////////////////////////code for the Time of day checkboxes//////////////////////
// this solves the issue of having only one checkbox with the required attribute
$(document).on("click", ".submit, .checkbox", chkCheckboxes);

function chkCheckboxes() {
  var i = 0;
  $(".checkbox").each(function () {
    //var checkbox_value = $(this).val();

    if ($(this).is(":checked")) {
      i = i + 1;
      //alert(i);

      $(".checkbox").removeAttr("required");
    } else {
      if (i < 1) {
        $(".checkbox").attr("required", true);
      }
    } //end else if checkbox not checked
  }); //each
} //function
////////////////////////code for the Time of day checkboxes//////////////////////
////////////////////////////////////////////////////

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
