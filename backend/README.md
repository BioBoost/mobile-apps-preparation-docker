# Hello World from Node Express API in Docker

This is just a simple Hello World Node Express API for the course Mobile Apps.

## Production

To build and run a production container:

```bash
docker build --tag hello-production .
docker run --publish 3000:3000 --name my-hello-prod hello-production
```

## Development

To build and run a development container that is removed once killed (because of `--rm` option):

```bash
docker build --tag hello-development --file Dockerfile.dev .
docker run --rm --publish 3000:3000 --name my-hello-dev hello-development
```
