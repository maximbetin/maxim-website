# Personal website

Personal website made with [Vue.js](https://vuejs.org/) and hosted on [Google App Engine](https://cloud.google.com/appengine).

## Local project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

## Deploying to [Google App Engine](https://cloud.google.com/appengine/)

The `npm run build` command will compile the files onto the `dist` folder.

To upload the project to a GAE service run:

```bash
gcloud app deploy app.yaml
```
