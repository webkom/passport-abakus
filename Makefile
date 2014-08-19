parse: node_modules
	bailey ./ ./ --node

watch: node_modules
	bailey ./ ./ --node --watch

node_modules:
	npm install
