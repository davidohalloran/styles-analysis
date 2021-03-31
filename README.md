# Windi Analysis

An analyser tool for [Windi CSS](https://github.com/windicss/windicss). Browsering your utilities usages, have an overview of your design system and identify "bad practices".

![](https://user-images.githubusercontent.com/11247099/112994978-595b9800-919d-11eb-8b37-4de8ab03da42.png)

## Try

Run the following commnad under your project root

```bash
npx windicss-analysis
```

### NPM

Or you can install locally to reuse the same version of your local `windicss` module

```bash
npm i -D windicss-analysis
```

```jsonc
// package.json
{
  "scripts": {
    "analysis": "windicss-analysis"
  }
}
```

### VS Code Extension

> TODO

### Online Preview

You can have a preview the analysing report of the analyser itself

[analysis-demo.windicss.org](http://analysis-demo.windicss.org)

You can genreate your own report and host it statically by running the following command

```bash
npx windicss-analysis --html dist
```

## License

MIT
