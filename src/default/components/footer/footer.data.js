module.exports = {
	id: 'footer',
	name: 'Footer',
	description: '<p>The global footer for the site.</p>',
	partial: 'footer',
	variations: [
		{
			variationName: 'Regular footer',
			data: {
				links: [
					{
						url: 'http://www.twitter.com',
						linkText: 'Follow us on Twitter',
						isExternal: true
					},
					{
						url: 'http://www.facebook.com',
						linkText: 'Like us on Facebook',
						isExternal: true
					}
				]
			}
		}
	]
};
