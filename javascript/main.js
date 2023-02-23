// responsive nav

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// modal images

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//Download Modal
function onFileUpload()
{
    var reader = new FileReader();

    reader.onload = e => (void viewPackage(e.target.result));

    reader.readAsDataURL(fileInput.files[0]);
}

function viewPackage(src)
{
		if (src !== packagePDF.querySelector('embed').src)
			packagePDF.querySelector('embed').src = src;
    packagePDF.style.display = '';
		packagePDF.onclick = () => packagePDF.style.display = 'none';
}