import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    favorite: [],
    comparison: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    SET_FAVORITE: (state, product) => {
        if (state.favorite.length) {
          let isProductFavorite = false;
          state.favorite.map(function (item) {
            if (item.id === product.id) {
              isProductFavorite = true;
              state.favorite.splice(product.id, 1)
              product.isFavorite = false
              console.log(product.id +'1 колонка');
              // if (product.isFavorite == true) {
              //   state.favorite.splice(product, 1)
              //   product.isFavorite = !product.isFavorite
              //   console.log(product.id +'1 колонка');
              // }
            }
          })
          if (!isProductFavorite ) {
            state.favorite.push(product)
            // state.favorite.splice(product, 1)
            product.isFavorite = true;
            console.log('2колонка');
          }
        } else {
          state.favorite.push(product)
          product.isFavorite = !product.isFavorite;
          console.log( '3 колонка');
        }
    },
    SET_COMPARISON: (state, product) => {
      if (state.comparison.length) {
        let isProductCompare = false;
        state.comparison.map(function (item) {
          if (item.id === product.id) {
            isProductCompare = true;
            product.isCompare = !product.isCompare;
            state.comparison.splice(product.id, 1)
            console.log(product.id +'1 колонка');
          }
        })
        if (!isProductCompare) {
          state.comparison.push(product)
          product.isCompare = true;
          console.log('2колонка');
        }
      } else {
        state.comparison.push(product)
        product.isCompare = !product.isCompare;
        console.log( '3 колонка');
      }
    },
    // SET_FAVORITE: (state, product) => {
    //   state.favorite.push(product)
    // },
    SPLICE_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    SPLICE_FAVORITE: (state, index) => {
      state.favorite.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    }
  },
  actions: {
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    },
    ADD_TO_FAVORITE({commit}, product) {
      commit('SET_FAVORITE', product)
    },
    ADD_TO_COMPARISON({commit}, product) {
      commit('SET_COMPARISON', product)
    },
    REMOVE_FROM_CART({commit}, index) {
      commit('SPLICE_CART', index);
    },
    REMOVE_FROM_FAVORITE({commit}, product) {
      commit('SPLICE_FAVORITE', product);
    },
    DECREMENT_CART_QUANTITY({commit}, index) {
      commit('DECREMENT', index);
    },
    INCREMENT_CART_QUANTITY({commit}, index) {
      commit('INCREMENT', index);
    },
    GET_PRODUCTS_FROM_API({commit}){
      return axios ('http://localhost:3000/sliderElems',{
        method:"GET"
      })
      .then ((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    FAVORITE(state) {
      return state.favorite;
    },
    COMPARISON(state) {
      return state.comparison;
    },
    TOTAL(state) {
      return state.cart.reduce((carry, product) => {
          if (carry < 0) {
            carry = carry * -1
            return carry
          } else {
            carry += +product.newPrice * +product.quantity;
            return carry + '.00 Ꝑ';
          }
      }, 0);
    },
  },
  modules: {
  }
})
 export default store;
