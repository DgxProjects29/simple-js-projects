const tabBtns = document.querySelectorAll(".tab-item");
const tabContainer = document.querySelector(".tab-container");

const aboutItems = {
  "history": `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
  libero amet, voluptatibus reiciendis in blanditiis alias rem
  reprehenderit dolor quae?`,
  "vision": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi reprehenderit tenetur suscipit animi autem minus ut consectetur dolore rem.`,
  "goals": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi reprehenderit tenetur suscipit animi autem minus ut consectetur dolore rem. a`,
};

tabContainer.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  document.querySelector(".about-item__content").innerHTML = aboutItems[id];

  document.querySelector(".about-item__title").innerHTML = id;

  tabBtns.forEach(function (tab) {
    tab.classList.remove("active-tab-item");
  });
  e.target.classList.add("active-tab-item");
});

"".ca
