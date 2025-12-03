

function GetUserData(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    if (!raw.ok) throw new Error("User Not Found");
    return raw.json();
  });
}

function GetRepo(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  ).then((raw) => {
    if (!raw.ok) throw new Error("Repos Not Found");
    return raw.json();
  });
}

let btn = document.querySelector("button");
let usernameinp = document.querySelector("input");
let card = document.querySelector(".card");

function RenderUI(details) {
  console.log(details);
  let data = `<div class="profile"><img src="${details.avatar_url}" alt=""></div>

        <div class="detailsec">
          <h2 class="dh2">${details.name}</h2>
          <p class="pp">${details.bio}</p>

          <div class="deep">
            <p>${details.public_repos}</p>
            <p>${details.following}</p>
            <p>${details.followers}</p>
          </div>
        </div>`;

  card.innerHTML = data;
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let username = usernameinp.value.trim();

  if (username.length > 0) {
    GetUserData(username).then(function (data) {
      RenderUI(data);
    });
  } else {
    alert("Goli Beta Masti Nii ❌ ");
  }
});
