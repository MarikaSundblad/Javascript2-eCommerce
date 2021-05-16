<template>
  <div class="cart-item">
    <div class="p-2 d-flex justify-content-between align-items-center">

      <div class="d-flex align-items-center">
        <img :src="item.product.image" alt="" class="img-fluid image-width">
        <div>
          <div><strong>{{ item.product.name }}</strong></div>
          <div><small>{{ item.quantity }} x {{ item.product.price }}</small></div>
        </div>
      </div>

      <div>
        <div class="btn-group btn-group-sm me-2" role="group">
          <button class="btn btn-dark" @click.stop="removeOneProductFromCart({ product: item.product, quantity })">-</button>
          <button class="btn btn-dark" @click.stop="addProductToCart({ product: item.product, quantity })">+</button>
        </div>
      </div>
    </div>

    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartItem",
  props: ["item"],
  data() {
    return {
      quantity: 1,
    }
  },
  methods: {
    ...mapActions([
      "addProductToCart",
      "removeOneProductFromCart",
    ])
  }
}
</script>

<style>
.image-width {
  width: 90px;
}
</style>