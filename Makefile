include .env

default:
	up

# CONTAINER
up:
	docker-compose up -d --build

up-dependencies:
	docker-compose up -d --build onboarding_db

down:
	docker-compose down --remove-orphans

down-clean:
	docker-compose down --remove-orphans --volumes --rmi all

console:
	docker exec -it onboarding_api /bin/bash

purge:
	docker system prune --all --force --volumes && docker volume prune --all --force

# APP
install:
	docker exec -it onboarding_api yarn

start-dev:
	docker exec -it onboarding_api yarn start:dev

test-watch:
	docker exec -it onboarding_api yarn test:watch

test-cov:
	docker exec -it onboarding_api yarn test:cov

migration-generate:
	docker exec -it onboarding_api yarn migration:generate

migration-run:
	docker exec -it onboarding_api yarn migration-dev:run

script-run:
	docker exec -it onboarding_api yarn script-dev:run

model-generate:
	docker exec -it onboarding_api yarn typeorm:model:generate

# APP UTIL
all-permissions:
	sudo chown -R ${USER}:${GROUP} .

remove-folders:
	sudo rm -Rf ./node_modules && sudo rm -Rf ./dist

kill-app-port:
	sudo kill -9 $(sudo lsof -t -i:3333)

kill-debug-port:
	sudo kill -9 $(sudo lsof -t -i:9229)

kill-postgres-port:
	sudo kill -9 $(sudo lsof -t -i:5432)
