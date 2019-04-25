function asyncify(func) {

	const wrapper = function(...args) {
		let result = func(...args);
		if(!(result instanceof Promise)) {
			result = Promise.resolve(result);
		}

		return result;
	};

	return wrapper;
}


async function foo() {
 	let a = 1;
	await Promise.resolve(2);
	a = a + 1;
}
