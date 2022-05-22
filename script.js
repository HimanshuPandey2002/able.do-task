var cards = document.getElementsByClassName("snack-card");

[...cards].map((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("hover");
    // let curr = this;
    // curr.style.transform = "rotateY(180deg)";

    // let close = curr.childNodes[3].childNodes[1];

    // close.addEventListener("click", function () {
    //   let back = this.parentElement;
    //   this.parentElement.style.transform = "rotateY(-180deg)";
    //   console.log(curr);
    // });
  });
});
