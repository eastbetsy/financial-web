import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:3000/">Financial Management</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  ); 
}

export default navbar;
