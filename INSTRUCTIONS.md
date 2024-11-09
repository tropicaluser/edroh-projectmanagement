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
> edit .env (neon.tech)
DATABASE_URL=(neon db url)
npx prisma generate
npx prisma migrate dev --name init
npm run seed
```

### Backend install

```bash
npm i express@4.19.2 body-parser@1.20.2 cors@2.8.5 dotenv@16.4.5 helmet@7.1.0 morgan@1.10.0
npm i -D rimraf@6.0.1 concurrently@8.2.2 nodemon@3.1.4 @types/cors@2.8.17 @types/express@4.17.21 @types/morgan@1.9.9 @types/node@22.4.0
> edit .env
PORT=8000
npm run dev
curl http://localhost:8000 #This is home route
```

### Projects Backend

in PostgreSQL editor (neon.tech):
SELECT setval(pg_get_serial_sequence('"Project"', 'id'), coalesce(max(id)+1, 1), false) FROM "Project";
SELECT setval(pg_get_serial_sequence('"Task"', 'id'), coalesce(max(id)+1, 1), false) FROM "Task";

in Postman:
POST http://localhost:8000/projects

```json
{
  "name": "test project",
  "description": "test description",
  "startDate": "2024-11-09T00:00:00Z",
  "endDate": "2024-11-20T00:00:00Z"
}
```

GET http://localhost:8000/tasks?projectId=1

POST http://localhost:8000/tasks

```json
{
    "title": "New Task",
    "description": "new task description",
    "status": "To Do",
    "priority": "High",
    "tags": "Deployment",
    "startDate": "2024-02-10T00:00:00.000Z",
    "dueDate": "2024-06-10T00:00:00.000Z",
    "points": null,
    "projectId": 1,
    "authorUserId": 2,
    "assignedUserId": 4
}
```

```bash
curl http://localhost:8000/projects
curl http://localhost:8000/tasks?projectId=1
```

### Projects Frontend Modal

visit localhost
create new task

```bash
test task
test description
toDo
backlog
2024-11-09
2024-11-20
2
```

Creates new task


