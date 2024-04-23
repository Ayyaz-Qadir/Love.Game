const show = document.querySelector(".show");
const button = document.querySelector(".button");

function demo() {
  const your_name = document.querySelector(".yname").value;
  const lover_name = document.querySelector(".lname").value;

  if (!your_name || !lover_name) {
    show.textContent = `Please Enter The Names`;
  } else {
    const key = `${your_name}_${lover_name}`;
    let random_percentage = localStorage.getItem(key);

    if (!random_percentage) {
      random_percentage = Math.floor(Math.random() * 100 + 1);
      localStorage.setItem(key, random_percentage);
    }

    show.textContent = `${your_name} loves ${lover_name} ${random_percentage}%`;

    document.querySelector(".yname").value = "";
    document.querySelector(".lname").value = "";
  }
}

// Remove all data from local storage when the page is reloaded
window.addEventListener("load", function () {
  localStorage.clear();
});
