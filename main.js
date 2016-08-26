
var vendors = document.querySelector('.vendor');
var products = document.querySelector('.products');
var iso = new Isotope(products, {
  itemSelector: '.product',
  layoutMode: 'fitRows'
});
/*
vendors = Array.from(vendors);

vendors.forEach(function(vendor) {
  vendor.addEventListener('click', function() {
  	alert();
  });
});
*/
