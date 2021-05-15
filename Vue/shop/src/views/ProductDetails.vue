<template>
  <div>

    <div v-if="product" class="container my-5 py-5">
      
      <section class="text-center">
        <h3 class="mb-5 font-weight-bold">Om produkten</h3>

        <div class="row align-items-center gx-5">

          <div class="col-lg-6">          
            <img :src="product.image" alt="" class="img-fluid img-size">
          </div>

          <div class="col-lg-6 text-start">

            <div>
              <h2 class="font-weight-bold mb-5">{{ product.name }}</h2>

              <div class="mb-5">
                <p>{{ product.desc }}</p>
              </div>

            </div>

            <div class="d-flex justify-content-between align-items-center">
              <h3><span class="text-danger">{{ product.price }}</span> SEK</h3>
              <button class="btn btn-info" @click="addProductToCart({ product, quantity })" >Lägg till</button>
            </div>
          </div>

        </div>

      </section>

    </div>

    <div v-else>
      <h3>Loading...</h3>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProductDetails',
  props: ['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getOneProduct', 'cleanup', 'addProductToCart'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getOneProduct(this.id)
  },
  destroyed(){
    this.cleanup()
  }
}
</script>

<style>
.img-size {
  height: 20rem;
  width: 20rem;
  object-fit: contain;
}
</style>