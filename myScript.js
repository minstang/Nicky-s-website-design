var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var isOpen = content.classList.toggle("open");
    this.setAttribute("aria-expanded", isOpen);
    this.textContent = isOpen ? "Fold abstract" : "Read abstract";
  });
}
