module.exports = {
	products: [
		{
			id: '111',
			name: 'Product with no promotions',
			price: '£1.99',
			promotions: []
		},
		{
			id: '112',
			name: 'Product with one promotion',
			price: '£1.99',
			promotions: [
				'BOGOF'
			]
		},
		{
			id: '113',
			name: 'Product with two promotions',
			price: '£1.99',
			promotions: [
				'BOGOF',
				'Save 50p'
			]
		}
	]
}
