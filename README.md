# Personal website

Personal website made with [Vue.js](https://vuejs.org/) and hosted on [Google App Engine](https://cloud.google.com/appengine).

## Local project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Deploying to [Google App Engine](https://cloud.google.com/appengine/)

The `npm run build` command will compile the files onto the `dist` folder. 

To upload the the project to a GAE service run:

`gcloud app deploy app.yaml` 