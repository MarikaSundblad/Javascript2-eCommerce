<template>
  <div class="col">
    <div class="card p-3 card-height">
      <div class="card-body d-flex flex-wrap justify-content-center align-center text-center">
        <img :src="product.image" alt="..." class="card-img-top img-fluid img-height">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.short }}</p>
          <div >
            <router-link :to="{ name: 'ProductDetails', params: { id: product._id }}" type="button" class="btn btn-info">Visa</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style>
.card-height {
  height: 30rem;
}
.img-height {
  height: 13rem;
  width: 16rem;
  object-fit: contain;
}
</style>