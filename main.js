const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      updateCart(id) {
        this.cart.push(id);
        console.log("updating cart");
      },
      removeById(id) {
        console.log("removing item from cart");
        const index = this.cart.indexOf(id)
        if (index > -1) {
          this.cart.splice(index, 1)
        }
      }
    }
})
