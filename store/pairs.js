export const actions = {
  fetchData({
    commit,
    state
  }, flag = false) {
    if (flag) {
      state.ws.close();
    }
    state.ws = new WebSocket(`wss://stream.binance.com:9443/ws/${state.currencyPair.replace('/','').toLocaleLowerCase()}@depth@1000ms`);
    state.ws.onmessage = function (e) {
      commit('setData', JSON.parse(e.data))
    }

  }
}
