const url = 'http://localhost:3000/users';
fetch(url)
	.then((respone) => {
		console.log(respone);
		return respone.json();
	})
	.then((jsonData) => {
		console.log(jsonData);
		return jsonData;
	})
	.then((users) => {
		const heading = document.createElement('h1');
		heading.innerText = 'Labb 2 Grupp 25';
		heading.classList.add(
			'text-center',
			'text-6xl',
			'underline',
			'decoration-indigo-500',
			'decoration-4',
			'uppercase',
			'font-mono',
			'pb-5'
		);

		const body = document.getElementById('body');
		body.insertAdjacentElement('afterbegin', heading);

		const display = document.getElementById('display');

		const ul = document.createElement('ul');
		ul.classList.add(
			'grid',
			'gap-4',
			'sm:grid-cols-1',
			'md:grid-cols-2',
			'lg:grid-cols-5',
			'p-5',
			'bg-sky-400',
			'rounded-md'
		);
		display.insertAdjacentElement('beforeend', ul);

		users.forEach((user) => {
			const li = document.createElement('li');
			li.classList.add(
				'rounded-xl',
				'border-solid',
				'border-2',
				'border-neutral-900',
				'p-2',
				'hover:font-bold',
				'opacity-80',
				'hover:opacity-100'
			);
			li.style.backgroundColor = user.color;

			ul.insertAdjacentElement('beforeend', li);

			const pElement = document.createElement('p');
			pElement.innerText =
				'Name: ' +
				user.firstName +
				'\n ' +
				'Lastname: ' +
				user.lastName +
				'\n' +
				'Username: ' +
				user.username;
			li.insertAdjacentElement('beforeend', pElement);
		});
	});
