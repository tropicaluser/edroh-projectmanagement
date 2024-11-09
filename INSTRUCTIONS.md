# INSTRUCTIONS

## How-to-Install

### Frontend install

npx create-next-app@14.25 .

npm i @mui/x-data-grid@7.12.0 @mui/material@5.16.6 @emotion/react@^11.13.0 @emotion/styled@11.13.0 lucide-react@0.424.0 numeral@2.0.6 date-fns@3.6.0  axios@1.7.3 recharts@2.12.7 react-dnd@16.0.1 react-dnd-html5-backend@16.0.1 gantt-task-react@0.3.9

npm i -D @types/node@20.14.14 @types/uuid@10.0.0 @types/numeral@2.0.5

### Tailwind install

npm i -D prettier@3.3.3 prettier-plugin-tailwindcss@0.6.5 tailwind-merge@2.4.0

### Redux toolkit

npm i react-redux@9.1.2 @reduxjs/toolkit@2.2.7 redux-persist@6.0.0 dotenv@16.4.5

### Server install

```bash
mkdir server
cd server
npm init -y
npm i -D ts-node@10.9.2 typescript@5.5.4 @types/node@22.1.0
npx tsc --init
...
"module": "NodeNext"
"moduleResolution": "NodeNext"
"resolveJsonModule": true
"outDir": "./dist"
 "skipLibCheck": true /* Skip type checking all .d.ts files. */
  },
  "include": ["src/**/*", "src/data/**/*.json", "prisma/**/*"]
}
...
```

### Prisma install

```bash
npm i prisma@5.17.0 @prisma/client@5.18.0
npx prisma init
```
