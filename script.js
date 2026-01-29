
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
