<template lang="html">
  <div class="new-order-wrapper v-container">
    <div class="order-info-container uk-width-1-2">
      <p>Оформление заказа</p>
      <span @click="isActive=!isActive">Уже покупали у нас?</span>
      <div v-show="isActive" class="">
        hello
      </div>
      <form class="order-form-container" action="index.html" method="post">
        <div class="buyer-contact-info">
          <h3>Контактные данные</h3>
          <span>Контактное лицо(ФИО)
            <span class="input-trigger">*</span>
          </span>
          <input type="text" name="" value="">
          <span>
            Контактный телефон
            <span class="input-trigger">*</span>
          </span>
          <input type="text" name="" value="">
        </div>
        <div class="shipping-info">
          <h3>Доставка</h3>
          <span>Населенный пункт
            <span class="input-trigger">*</span>
          </span>
          <input type="text" name="" value="">
          <div class="selfshipping-checkbox">
            <input type="checkbox" name="" value="">
            <span>
              <span>Самовывоз</span>
              <span>На пункте выдачи</span>
            </span>
            <span class="price">+ 0 Ꝑ</span>
          </div>
          <div class="couriershipping-checkbox">
            <input type="checkbox" name="" value="">
            <span>
              <span>Курьером</span>
              <span>Доставка курьером</span>
            </span>
            <span class="price">+ 300 Ꝑ</span>
          </div>
          <span>Комментарии к заказу</span>
          <textarea name="name" maxwidth="200px" rows="8" cols="80"></textarea>
          <input type="checkbox" name="" value="Самовывоз">
          <input type="checkbox" name="" value="Курьером">
        </div>
        <div class="buyer">
          <h3>Покупатель</h3>
          <span>Email</span>
          <input type="text" name="" value="">
          <div class="regular-buyer">
            <input type="checkbox" name="" value="">
            <span>
              <span>Стать постоянным покупателем</span>
              <span>Вы сможете видеть историю заказов, проще делать новые и получать скидки
              вшм

            </span>
            </span>
          </div>
        </div>
        <div class="payment-methods">
          <h3>
            Способы оплаты
            <span class="input-trigger">*</span>
          </h3>
          <div class="">
            <input type="checkbox" name="" value="">
            <span>Наличными курьеру
            </span>
          </div>
        </div>
        <router-link :to="{ name: '', params: {} }">
          <div class="make-order-button-container">
            <button type="button" name="button">Подтвердить заказ</button>
          </div>
        </router-link>
      </form>
    </div>
    <div class="product-info-container uk-width-1-2">
      <div
      class=""
      v-for="orderProduct in CART"
      :key="orderProduct.id"
      >
        <img :src="require('../assets/images/product-slider-imgs/' + orderProduct.url)" alt="">
        <span>{{orderProduct.text}}</span>
        <span>1 x {{orderProduct.newPrice + orderProduct.currencySign}}</span>
      </div>
      <div class="">
        <div class="">
          <span>Сумма по товарам</span>
          <span v-text="TOTAL"></span>
        </div>
        <div class="">
          <span>Стоимость доставки</span>
          <span>0 P</span>
        </div>
      </div>
      <div class="">
        <span>Итого:</span>
        <span v-text="TOTAL"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapGetters([
      'CART',
      'TOTAL'
    ])
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
