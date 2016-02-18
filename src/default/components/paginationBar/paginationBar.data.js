module.exports = {
	id: 'paginationBar',
	name: 'Pagination Bar',
	description: '<p>Lists pages available and sort by options.</p>',
	partial: 'paginationBar',
	variations: [
		{
			variationName: 'Single page, sorted alphabetically',
			data: {
				pages: 1,
				currentPage: 1,
				sortOption: 'alpha'
			}
		},
		{
			variationName: 'Five pages, on first page, sorted alphabetically',
			data: {
				pages: 5,
				currentPage: 1,
				sortOption: 'alpha'
			}
		},
		{
			variationName: 'Five pages, on last page, sorted alphabetically',
			data: {
				pages: 5,
				currentPage: 5,
				sortOption: 'alpha'
			}
		},
		{
			variationName: 'Five pages, on page 3, sorted alphabetically',
			data: {
				pages: 5,
				currentPage: 3,
				sortOption: 'alpha'
			}
		}
	]
};
