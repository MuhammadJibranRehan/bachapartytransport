const goTop = document.getElementById("goTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "Bachapartytransports";
  }
};

goTop.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
