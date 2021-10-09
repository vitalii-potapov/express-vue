(function() {
  return function(params) {
    delete require.cache[require.resolve("./server/store")];
    const Store = require("./server/store");
    const data = new Store({ storeName: params.name });

    return data.get();
  }
}());
