// Navbar (commune à toutes les pages)
const navbarHtml = /* @html */`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Movie App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`

// Contenu de la page d'accueil
const homeHtml = /* @html */`
<div id="content" class="container">

  <!-- Example row of columns -->
  <div class="row">
    <div class="col-md-6">
      <div class="card movie-card">
        <a href="movie-matrix.html"><img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg" alt="The Matrix" /></a>
        <div class="card-body">
          <h5 class="card-title">The Matrix</h5>
          <p class="card-text">Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.</p>
          <a href="movie-matrix.html" class="card-link">Learn More</a>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card movie-card">
        <a href="movie-inception.html"><img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" alt="Inception" /></a>
        <div class="card-body">
          <h5 class="card-title">Inception</h5>
          <p class="card-text">Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible.</p>
          <a href="movie-inception.html" class="card-link">Learn More</a>
        </div>
      </div>
    </div>
  </div>

</div>`

const aboutHtml = /* @html */`
<div id="content" class="container">

  <!-- Example row of columns -->
  <div class="row">
    <div class="col-md-12">
      <h1>About</h1>
      <div class="movie-page">
        <p>This is a site about movies.</p>
      </div>
    </div>
  </div>

</div>
`

// Footer (commun à toutes les pages)
const footerHtml = /* @html */`
<footer>
  <div class="container">
    <p>&copy; Wild Code School 2018</p>
  </div>
</footer>`

/**
 * Fonction qui va concaténer:
 *   - la navbar
 *   - la partie de contenu passée en paramètre
 *   - le footer
 * et va injecter le tout dans la propriété innerHTML de la div #main
 */
const render = contentHtml => {
  const mainDiv = document.getElementById('main')
  mainDiv.innerHTML = navbarHtml + contentHtml + footerHtml
}

render(homeHtml)
