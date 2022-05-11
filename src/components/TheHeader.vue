<template>
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
      <ul class="list-group">
        <li class="list-group-item">
          <h2>Vue Cherry Picks</h2>
        </li>

        <li class="list-group-item">
          <p>Hello, testuser24</p>
        </li>
      </ul>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              type="button"
              class="btn btn-primary"
              style="margin-right: 1rem"
              :to="{ path: '/' }"
            >
              CP
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              type="button"
              class="btn btn-success"
              style="margin-right: 1rem"
              :to="{ path: '/section' }"
            >
              new Section
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <button
              class="dropdown-toggle btn btn-primary"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="margin-right: 1rem"
            >
              menue
            </button>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>

        <button class="btn btn-danger" type="submit">
          <i class="fa fa-sign-out" aria-hidden="true"> </i>
        </button>
      </div>
    </div>
  </nav>
</template>


<script>
</script>

<style scoped>
nav {
  background: #888888;
  height: 9rem;
}

a.navbar-brand {
  color: black;
  font-weight: bold;
}

li.list-group-item {
  background: #888888;
  border: none;
  padding: 0.4rem 0.4rem;
}

.container-fluid {
  padding-right: 3rem;
}
</style>