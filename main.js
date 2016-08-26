
$(function() {
	$products = $('.products');

	$products.isotope({
    	layoutMode: 'fitRows'
	})

	var getCurrent = (function() {
      var active = [];
       
      return function(vendor) {
        var i = active.indexOf('.' + vendor);

        if (i > -1) {
          active.splice(i, 1);
        } else {
          active.push('.' + vendor)
        }

        return active.join(', ');
      }
	})();

	$('.vendor').click(function() {
		$products.isotope({
			filter: getCurrent( $(this).attr('data-vendor') )
		});

		$(this).toggleClass('active');
	});
});

