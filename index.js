(function () {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=f89724d9738f478fb82e3376892ff8ee"
  )
    .then((response) => response.json())
    .then((data) => {
      displayArticles(data.articles);
    })
    .catch((err) => {
      console.log(err);
    });
})();

const displayArticles = (articles) => {
  const blogs = document.querySelector(".blogs");
  articles.forEach((article) => {
    //  console.log(article.urlToImage)
    const blog = document.createElement("a");
    blog.href = article.url;
    blog.target = "_blank";
    blog.innerHTML = `
        <div class="blogImg">
         <img src="${
           article.urlToImage ||
           "https://parinamlaw.com/wp-content/themes/lawcounsel/images/no-image/No-Image-Found-400x264.png"
         }" alt="">
        </div>
        <h2 class="blogHead">${article.title}</h2>
        <p class="blogContent">${article.description}</p>
       `;
    blogs.appendChild(blog);
  });
};
