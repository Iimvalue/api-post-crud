let arrayImage = [
  "https://images.pexels.com/photos/31889998/pexels-photo-31889998/free-photo-of-scenic-rocky-coastal-cliffs-of-tagle-spain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/31756525/pexels-photo-31756525/free-photo-of-photographer-exploring-spiti-valley-landscape.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/31896480/pexels-photo-31896480/free-photo-of-scenic-coastal-view-with-blue-ocean-and-boats.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/31951987/pexels-photo-31951987/free-photo-of-close-up-of-ladybug-pupa-on-thorny-branch.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/29872205/pexels-photo-29872205/free-photo-of-tranquil-beach-sunset-with-silhouetted-boat.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
];

let container = document.getElementById("container");

fetch("https://6821b02c259dad2655b02f16.mockapi.io/todo")
  .then((res) => res.json())
  .then((data) => {
    data.map((data) => {
      let card = document.createElement("div");
      let img = document.createElement("img");
      let cardTitle = document.createElement("h5");
      let btn = document.createElement("button");

      card.className =
        "card p-3 shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column gap-2";
      img.className = "card-img-top";
      cardTitle.className = "card-title text-center";
      cardTitle.innerText = data.name;
      img.src = data.image;
      btn.className = "btn btn-danger";
      btn.textContent = "Delete";

      btn.addEventListener("click", () => {
        fetch(`https://6821b02c259dad2655b02f16.mockapi.io/todo/${data.id}`, {
          method: "DELETE",
        });
        card.remove();
      });
      card.appendChild(cardTitle);
      card.appendChild(img);
      card.appendChild(btn);
      container.appendChild(card);
    });
  });

let userName = document.getElementById("name");
let image = document.getElementById("image");
let btn = document.getElementById("submit");
let imgStatus = document.getElementById("status-img");
let nameAlert = document.getElementById("name-alert");
let addStatus = document.getElementById("add-status");
btn.addEventListener("click", () => {
  imgStatus.textContent = "";
  addStatus.textContent = "";
  nameAlert.textContent = "";

  if (userName.value.length < 6) {
    nameAlert.textContent = "Name should be more than 5 characters";
    nameAlert.className = "d-block text-danger";
    imgStatus.textContent = "";
    addStatus.textContent = "";
    console.log(response.status);
    return;
  }
  nameAlert.textContent = "";

  fetch(`${image.value}`).then((response) => {
    if (response.status != 200) {
      imgStatus.textContent = "Image URL Invalid";
      imgStatus.className = "d-block text-danger";
      addStatus.textContent = "";
      nameAlert.textContent = "";
      return;
    }

    imgStatus.textContent = "Image URL works";
    imgStatus.className = "text-success";

    addStatus.textContent = "The card succesulfy added";
    addStatus.className = "text-success";
  });

  fetch("https://6821b02c259dad2655b02f16.mockapi.io/todo")
    .then((res) => res.json())
    .then((data) => {
      data.map((data) => {
        if (data.name == userName.value) {
          addStatus.textContent = "The name duplicated, try to chagne name";
          addStatus.className = "text-danger";
          userName.focus;
          return
        }
      });
    });

  fetch("https://6821b02c259dad2655b02f16.mockapi.io/todo", {
    method: "POST",
    body: JSON.stringify({
      name: userName.value,
      image: image.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let card = document.createElement("div");
      let img = document.createElement("img");
      let cardTitle = document.createElement("h5");
      let btn = document.createElement("button");

      card.className =
        "card p-3 shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column gap-2";
      img.className = "card-img-top";
      cardTitle.className = "card-title text-center";
      cardTitle.innerText = data.name;
      img.src = data.image;
      btn.className = "btn btn-danger";
      btn.textContent = "Delete";

      btn.addEventListener("click", () => {
        fetch(`https://6821b02c259dad2655b02f16.mockapi.io/todo/${data.id}`, {
          method: "DELETE",
        });
        card.remove();
      });
      card.appendChild(cardTitle);
      card.appendChild(img);
      card.appendChild(btn);
      container.appendChild(card);
    });
});
