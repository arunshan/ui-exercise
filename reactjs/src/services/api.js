export default class Api {
  getWidgets() {
    return new Promise(function (resolve) {
      resolve([{
        name:     "Standard widget",
        size:     'medium',
        capacity: 10
      }, {
        name:     "VIP widget",
        size:     "extra-large",
        capacity: 25
      }, {
        name:     "Starter widget",
        size:     'small',
        capacity: 2
      },{
        name:     "Standard widget",
        size:     'medium',
        capacity: 10
      }, {
        name:     "VIP widget",
        size:     "extra-large",
        capacity: 25
      }, {
        name:     "Starter widget",
        size:     'small',
        capacity: 2
      },{
        name:     "Standard widget",
        size:     'medium',
        capacity: 10
      }, {
        name:     "VIP widget",
        size:     "extra-large",
        capacity: 25
      }, {
        name:     "Starter widget",
        size:     'small',
        capacity: 2
      },{
        name:     "Standard widget",
        size:     'medium',
        capacity: 10
      }, {
        name:     "VIP widget",
        size:     "extra-large",
        capacity: 25
      }, {
        name:     "Starter widget",
        size:     'small',
        capacity: 2
      }])
    })
  }
}
