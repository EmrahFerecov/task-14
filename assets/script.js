const content = document.getElementById("content");

axios
  .get("https://api.tvmaze.com/shows")
  .then((response) => {
    const shows = response.data;
    let html = "";

    shows.forEach((show) => {
      html += `<div class="card">
                        <img src="${show.image.medium}" alt="${show.name}">
                        <p>Name: ${show.name}</p>
                        <p>Language: ${show.language}</p>
                        <p>Rating: ${show.rating.average}</p>
                    </div>`;
    });

    content.innerHTML = html;
  })
  .catch((error) => {
    console.error("Ugursuz istek: ", error);
  });
