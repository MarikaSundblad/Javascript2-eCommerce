<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-white">
    <div class="container">

      <router-link class="navbar-brand" to="/">
        <img class="logo-height" src="../../assets/VUE-store.png" alt="Store logo">
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars black"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="text-dark nav-link active" to="/">Hem</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-dark nav-link active" to="/products">Produkter</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-dark nav-link active" to="/about">Om</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">

          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-shopping-cart black"></i>
              <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{ cartItemCount }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
                <ShoppingCart />
              </ul>
            </li>

            <li class="nav-item dropdown" v-if="loggedIn">
              <a
                class="nav-link dropdown"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li class="nav-item">
                  <router-link class="nav-link black" aria-current="page" to="/user">Settings</router-link>
                </li>
              </ul>
            </li>
            <li v-if="!loggedIn">
              <router-link class="nav-link" to="/Login"><i class="fas fa-user black"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCart from '../shoppingCart/ShoppingCart'
export default {
  name: 'Navbar',
  components: {
    ShoppingCart
  },
  computed: {
    ...mapGetters(['cartItemCount', 'loggedIn'])
  }
  //  data() {
  //    return {
  //      loggedIn: false
  //    }
  //  }
}
</script>

<style>
.shopping-cart {
  min-width: 450px;
}
.logo-height {
  height: 3.3rem;
  width: auto;
}
.black {
  color: black;
}
</style>

