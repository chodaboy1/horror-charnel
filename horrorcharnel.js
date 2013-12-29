// NOTE: Change these to filter as needed
var config = {
	minYear: 2001,
	maxYear: 9999,
	minSeeds: 1,
	minSizeMB: 100,
	maxSizeMB: 3000
}

jQuery.noConflict();
(function($) {
    console.log('start');

	var logOnly = false;

    function filterYear(td) {
    	// Get tooltip text
		var tooltipText = $(td).find('span.tooltip span.top').text();

		// Match on year
		m = tooltipText.match(/\[([0-9]+)\]/);
		if (null != m && m[1] > 1900) {
			console.log('   Year: ' + m[1]);
			if (m[1] < config.minYear || m[1] > config.maxYear) {
				console.log('   Year not in range');
				return false;
			}
		}

		return true;
    }

    function filterSize(td) {
    	// Get size text
		var sizeText = $(td).text();
		console.log('   Size: ' + sizeText);

		// Match on mb
		var m = sizeText.match(/([.0-9]+)gb/i);
		var sizeMB = 0;
		if (null != m) {
			sizeMB = m[1] * 1000;
		} else {
			// Match on gb
			m = sizeText.match(/([.0-9]+)mb/i);
			if (null != m) {
				sizeMB = m[1];
			}
		}
		if (sizeMB != 0 && (sizeMB < config.minSizeMB || sizeMB > config.maxSizeMB)) {
			console.log('   Wrong size');
			return false;
		}

		return true;
    }

    function filterSeeds(td) {
    	// Get seed text
		var seedText = $(td).text();
		console.log('   Seed: ' + seedText);
		m = seedText.match(/([0-9]+)/);
		if (null != m && m[1] < config.minSeeds) {
			console.log('   Not enough seeds');
			return false;
		}

		return true;
    }

	// Enumerate rows
	var rows = $('p').next('table').children('tbody').children('tr')
	for (var i = 0; i < rows.length; i++) {
		var row = rows[i];
		var tds = $(row).children('td');
		if (tds.length != 12) {
			continue;
		}

		// log title
		console.log($(tds[1]).find('a').html());

		// filter size
		if (!filterSize(tds[7])) {
			if (!logOnly) {
				$(row).remove();
			}
			continue;
		}

		// filter seeds
		if (!filterSeeds(tds[9])) {
			if (!logOnly) {
				$(row).remove();
			}
			continue;
		}

		// filter year
		if (!filterYear(tds[1])) {
			if (!logOnly) {
				$(row).remove();
			}
			continue;
		}

		console.log('   Ok');
	}


    console.log('end'); 
}(jQuery));
