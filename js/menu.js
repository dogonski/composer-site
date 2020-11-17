if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  alert(
    "Sorry, the mobile version of the Works may not be fully operational yet."
  );
}

//* Show/hide tracks desription on mobiles

const descriptionBtn = document.querySelector("#descriptionBtn");
const content = document.querySelector("#allcontents");

descriptionBtn.addEventListener("click", () => {
  if (content.style.opacity == "0" || content.style.opacity == "") {
    content.style.opacity = "1";
    descriptionBtn.innerHTML = "Hide description";
  } else {
    content.style.opacity = "0";
    descriptionBtn.innerHTML = "Show description";
  }
});

//* Infinite scroll horizontal

window.scrollTo(window.innerWidth + 1, 0);
window.addEventListener("scroll", function () {
  if (window.innerWidth <= 1000) {
    if (window.scrollX >= 1250) {
      window.scrollTo(1, 0);
    } else if (window.scrollX <= 1) {
      window.scrollTo(1249, 0);
    }
  } else if (window.innerWidth > 1000) {
    if (window.scrollX >= window.innerWidth * 1.25) {
      window.scrollTo(1, 0);
    } else if (window.scrollX <= 1) {
      window.scrollTo(window.innerWidth * 1.25 - 1, 0);
    }
  }
});
