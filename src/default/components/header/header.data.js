module.exports = {
	id: 'header',
	name: 'Header',
	description: '<p>The global header for the site.</p>',
	partial: 'header',
	variations: [
		{
			variationName: 'Regular header',
			data: {
				siteName: 'Website name',
				navItems: [
					{
						text: 'Products',
						href: 'plp'
					},
					{
						text: 'Services',
						href: '#'
					},
					{
						text: 'About us',
						href: '#'
					},
					{
						text: 'Contact us',
						href: '#'
					},
					{
						text: 'FAQ',
						href: '#'
					}
				]
			}
		}
	]
};
