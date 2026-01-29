// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) {
      el.classList.add("show");
    }
  });
});

// COMMUNITY REVIEWS (LOCAL STORAGE)
const posts = document.getElementById("posts");
let data = JSON.parse(localStorage.getItem("reviews"));

if (!data || data.length === 0) {
  data = [
    { name: "Alex", mod: "Cyberpunk Mods", rating: 5, text: "Night City feels alive!" },
    { name: "Ravi", mod: "GTA V Graphics", rating: 5, text: "Next-gen realism." },
    { name: "Maya", mod: "Watch Dogs AI", rating: 4, text: "AI behavior feels smarter." }
  ];
  localStorage.setItem("reviews", JSON.stringify(data));
}

function render() {
  posts.innerHTML = "";
  data.forEach(r => {
    posts.innerHTML += `
      <div class="post">
        <div class="post-header">
          <div class="avatar">${r.name[0]}</div>
          <div><b>${r.name}</b><br><small>${r.mod}</small></div>
        </div>
        <div>⭐`.repeat(r.rating) + `</div>
        <p>${r.text}</p>
      </div>
    `;
  });
}

render();
