function showDropdown() {
  document.getElementById("dropdown-display").classList.toggle("show");
  document.getElementById("down-arrow").classList.toggle("hide");
  document.getElementById("up-arrow").classList.toggle("show-arrow");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    if (document.getElementById("up-arrow").classList.contains("show-arrow")) {
      document.getElementById("up-arrow").classList.remove("show-arrow");
    }
    if (document.getElementById("down-arrow").classList.contains("hide")) {
      document.getElementById("down-arrow").classList.remove("hide");
    }
    let dropdownContent = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdownContent.length; i++) {
      if (dropdownContent[i].classList.contains('show')) {
        dropdownContent[i].classList.remove('show');
      }
    }
  }
}