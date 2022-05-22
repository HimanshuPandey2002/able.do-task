var cards = document.getElementsByClassName("snack-card");

[...cards].map((card) => {
  card.addEventListener("click", function () {
    let curr = this;
    curr.classList.toggle("hover");

    let close = this.childNodes[3].childNodes[1];

    close.addEventListener("click", function () {
      curr.classList.remove("hover");
      console.log(curr);
    });
  });
});
