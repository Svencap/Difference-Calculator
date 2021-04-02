install:
	npm install
lint:
	npx eslint .
test:
	npx -n '--experimental-vm-modules' jest
test-coverage:
	npx -n '--experimental-vm-modules' jest --coverage
