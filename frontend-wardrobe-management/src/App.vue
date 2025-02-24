<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header style="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <img
            src="@/assets/logo.svg"
            alt="Vue logo"
            width="40"
            height="40"
            class="d-inline-block align-top"
          />
          Wardrobe Management
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/dashboard">Dashboard</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link btn btn-primary text-white px-3" to="/add"
                >+ Add Clothing</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container mt-4">
      <RouterView />
    </main>
  </header>
</template>

<style scoped>
/* Ensure navbar links stand out */
.nav-link {
  font-size: 1rem;
  font-weight: 500;
}

.navbar-brand {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
