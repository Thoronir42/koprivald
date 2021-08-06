# Kopřivald

Static web presentation for the Kopřivald project consisting of SPA introduction
and project page(s).

## Development

```shell
 npm i              # to install dependencies
 npm run watch      # to build project and watch for changes
```

Insert kopřivald resources to public/images


## Deployment
To prepare the site for production, a slightly tedious sequence is used:
- startup dev server
- download the .html of the pages to their appropriate structure into the public folder:
  - homepage to /public/index.html
  - project page to /public/t-32021/index.php
- deploy the public folder to the destination server
