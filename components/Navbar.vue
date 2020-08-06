<template>
  <div>
    <ul>
      <li>
        <nuxt-link active-class="active" exact to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/pairs">Binance Datas</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style  scoped>
ul {
  list-style: none;
  display: flex;
  padding-top: 0px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1px solid #000;
}
.active {
  color: black;
}
li {
  margin-right: 30px;
}
a {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
}
a:hover {
  color: black;
}
</style>