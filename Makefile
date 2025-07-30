install: #устанавливает зависимости в строгом соответствии с версиями
	npm ci

brain-games: #старт игры
	node bin/brain-games.js

publish: #публикация
	npm publish --dry-run

make lint: #линт
	npx eslint .
	