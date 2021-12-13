# frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Docker

## Production

To build and run a production container:

```bash
docker build --tag vue-prod --target production-stage .
docker run --publish 80:80 --name vue-hello vue-prod
```

## Development

To build and run a development container that is removed once killed (because of `--rm` option):

```bash
docker build --tag frontend-dev --target development-stage .
docker run --rm --publish 5000:8080 --name vue-hello frontend-dev
```
