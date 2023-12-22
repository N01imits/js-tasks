// Возраст больше 18 лет
// Необходимо получить список всех пользователей, у которых возраст больше 18 лет.
// Для этого напиши пж функцию, которая принимает на вход массив объектов, каждый из которых
// представляет пользователя и имеет свойство "age", и возвращает массив объектов, состоящий
// только из пользователей, у которых возраст больше 18 лет.

const users = [
	{ name: 'Alice', age: 22 },
	{ name: 'Bob', age: 17 },
	{ name: 'Charlie', age: 28 },
	{ name: 'David', age: 15 },
	{ name: 'Eve', age: 20 },
];

const findUsersOver18 = users => users.filter(user => user.age > 18);

console.log(findUsersOver18(users));

// Количество продаж за каждый месяц
// Необходимо подсчитать общее количество продаж за каждый месяц. Для этого напиши пж функцию,
// которая принимает на вход массив объектов, каждый из которых имеет свойства "month" и "sales", и
// возвращает массив сумм продаж по месяцам.

const salesData = [
	{ month: 'Январь', sales: 1000 },
	{ month: 'Февраль', sales: 2000 },
	{ month: 'Март', sales: 3000 },
	{ month: 'Январь', sales: 1500 },
	{ month: 'Февраль', sales: 2500 },
	{ month: 'Март', sales: 3500 },
	{ month: 'Январь', sales: 2000 },
	{ month: 'Февраль', sales: 3000 },
	{ month: 'Март', sales: 4000 },
];

const numberOfSalesByMonth = salesData => {
	const totalSalesByMonth = salesData.reduce((accumulator, saleData) => {
		const { month, sales } = saleData;
		if (accumulator[month]) {
			accumulator[month] += sales;
		} else {
			accumulator[month] = sales;
		}
		return accumulator;
	}, {});

	const result = Object.keys(totalSalesByMonth).map(key => {
		return { month: key, totalSales: totalSalesByMonth[key] };
	});
	console.log(result);
};

numberOfSalesByMonth(salesData);

// Средний рейтинг
// Необходимо получить средний рейтинг для каждого продукта на основе отзывов пользователей.
// Для этого напиши пж функцию, которая принимает на вход массив объектов, каждый из которых
// представляет продукт и имеет свойство "reviews", содержащее массив отзывов пользователей, и
// возвращает массив объектов, каждый из которых содержит идентификатор продукта и средний рейтинг на основе отзывов.

const products = [
	{
		id: 1,
		name: 'Product 1',
		reviews: [
			{ rating: 4 },
			{ rating: 5 },
			{ rating: 3 },
			{ rating: 5 },
			{ rating: 4 },
		],
	},
	{
		id: 2,
		name: 'Product 2',
		reviews: [
			{ rating: 2 },
			{ rating: 3 },
			{ rating: 4 },
			{ rating: 1 },
			{ rating: 2 },
		],
	},
	{
		id: 3,
		name: 'Product 3',
		reviews: [
			{ rating: 5 },
			{ rating: 5 },
			{ rating: 4 },
			{ rating: 5 },
			{ rating: 4 },
		],
	},
];

function calculateAverageRatings(products) {
	let result = [];
	products.forEach(product => {
		let totalRating = 0;
		product.reviews.forEach(review => {
			totalRating += review.rating;
		});
		let averageRating = totalRating / product.reviews.length;
		result.push({
			id: product.id,
			averageRating,
		});
	});
	return result;
}

console.log(calculateAverageRatings(products));
