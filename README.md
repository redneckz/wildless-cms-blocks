# wildless-cms-blocks

## CLI Commands

- `npm install`: Installs dependencies

- `npm run dev`: Run a development, HMR server

- `npm run serve`: Run a production-like server

- `npm run build`: Production-ready build

- `npm run lint`: Pass TypeScript files using ESLint

- `npm run test`: Run Jest

## Usage

```html
<html>
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/gh/redneckz/wildless-cms-blocks@main/dist/blocks.css"
    />
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/gh/redneckz/wildless-cms-blocks@main/dist/blocks.umd.js"
    ></script>
  </head>
  <body>
    <w-text-block>
      <span slot="primary">Annie Lindqvist</span>
      <span slot="secondary">Software Engineer</span>
    </w-text-block>
    <w-image-block
      src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
      alt="Annie Lindqvist"
    >
      <span slot="description">Annie Lindqvist</span>
      <span slot="secondary">Software Engineer</span>
    </w-image-block>
  </body>
</html>
```

To reset CDN`s cache:

https://purge.jsdelivr.net/gh/redneckz/wildless-cms-blocks/dist/blocks.css

https://purge.jsdelivr.net/gh/redneckz/wildless-cms-blocks/dist/blocks.umd.js
