var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
    imagePath: '/images/colgate.jpg',
    title: 'Colgate toothpaste',
    description: 'it is the best toothpaste recomended by doctors and cetified to use it ',
    price: 10
  }),
  new Product({
    imagePath: '/images/meds.jpg',
    title: 'Powerful vitamin',
    description: 'it is the best vitamin and useful to impact postivly to your body',
    price: 20
  }),
  new Product({
    imagePath: '/images/medicine.jpeg',
    title: 'gluzkoza',
    description: 'daily vitamin to your body to enrich with glukoza',
    price: 30
  })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if(done==products.length)
    {
      exit();
    }

  });
}
function exit()
{
 mongoose.disconnect();
}
