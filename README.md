<h1 align='center'>Vite + React + TypeScript + Eslint + Prettier + TailwindCss</h1>

---

#### **Vercel Deploy: https://vite-react-health.vercel.app/#/**

---

## **Running Project 🎯**

Install dependencies

```bash
yarn install
# or
npm install
```

Run dev

```bash
yarn dev --port 3000
# or
npm run dev --port 3000
```

Build production mode

```bash
yarn build
# or
npm run build
```

Deploy to http web server

Just upload ***./dist*** folder to your Http Server

## **Some Features 📋**

[ ✔️] Vite for faster Dev Server and Bundler 🚀

[ ✔️] ReactJS as UI Library

[ ✔️] TypeScript for Safe Types checking

[ ✔️] Eslint + Prettier for linting & fixing syntax code

[ ✔️] TailwindCss + Sass for Style

[ ✔️] ***unplugin-icons*** & ***unplugin-auto-import***

- Support automatic load SVG Assets as a Custom Icons Collection
- Support automatic import SVG Assets as React Component

```jsx
<HexagonButton>
    <MyIconsKnife className="x-large"/>
    <span>Morning</span>
</HexagonButton>
```

[ ✔️] ***dayjs*** for formatting date time to strings

[ ❌ ] ***chartJS*** for drawing line chart

---

## **Some Problems ⚠️**

- Images resource needs to be minified & optimized
- Some Images resources have wrong sizes

---

## **Suggestions for improvement 🚀**

Package production into Docker Image

Try to use Vite SSR or NextJS for:

- Support SEO
- Better first time loading
- Next/Image component support lazy loading images & auto optimized on the fly (better for Responsive web applications)
