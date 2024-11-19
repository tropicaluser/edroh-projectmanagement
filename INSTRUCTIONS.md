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

### Search

npm i lodash@4.17.21
npm i -D @types/lodash@4.17.7

### Add to Github

### AWS Billing and Cost Management (View and pay bills, analyze and govern your spending, and optimize your costs)

Tab -
Billing and Payments - summary & overview
Bills - charges & services
Cost Explorer - cost & usage report
Pricing Calculator - Estimate the cost for your architecture solution.
Free tier - track AWS services offering Free tier
.
Budgets - create budget

```bash
Templates: Zero spend budget
budget name: My Zero-Spend Budget 
email recipient: <email>
```

Create budget - Edit - Budget amount: $0.01

### Deleting AWS resources

Bills - see all charges

### AWS Networking - VPC (Virtual Private Cloud)

#### VPCs

Tab - Your VPCS - Create VPC

```bash
name tag: 
ipv4 CIDR: 10.0.0.0/16
```

Create VPC

#### Subnets

Tab - Subnets (1 public, 2 private) - Create subnet

```bash
VPC ID: pm_vpc

-subnet 1-
name: pm_public-subnet-1
availability zone: eu-north-1a
ipv4 subnet CIDR block: 10.0.0.0/24

-subnet 2-
name: pm_private-subnet-1
availability zone: eu-north-1a
ipv4 subnet CIDR block: 10.0.1.0/24

-subnet 3-
name: pm_private-subnet-2
availability zone: eu-north-1b
ipv4 subnet CIDR block: 10.0.2.0/24
```

Create subnet

#### Internet gateways

Tab - Internet gateways - Create internet gateway

```bash
name: pm_internet-gateway
```

Create internet gateway

- Actions - Attach to VPC - pm_vpc - Attach internet gateway

#### Overview resources

Tab - Your VPCs - tick pm_vpc - Resource map (overview of resources)

#### Route tables

Tab - Route tables (1 public, 1private) - Create route table

```bash
name: pm_public-route-table-1
VPC: pm_vpc
```

Create route table

Actions - Edit subnet associations - tick pm_public-subnet-1
Save associations

Tab - Route tables - Create route table

```bash
name: pm_private-route-table-1
VPC: pm_vpc
```

Create route table

Actions - Edit subnet associations - tick pm_private-subnet-1
Save associations

Tab - Route tables - Create route table

```bash
name: pm_private-route-table-2
VPC: pm_vpc
```

Create route table

Actions - Edit subnet associations - tick pm_private-subnet-2
Save associations

#### Give public route table internet access

Tab - Route tables - tick pm_public-route-table-1
Routes - Edit routes - Add route

```bash
destination: 0.0.0.0/0
gateway: internet-gateway / igw-pm_internet-gateway
```

Save changes

### AWS EC2

Tab - Instances - Launch instances

```bash
name: pm_ec2-backend
key pair: create new key pair
...
name: standard-key, RSA, .pem - Create key pair
...

tick "Allow HTTPS traffic from the internet"
tick "Allow HTTP traffic from the internet"

Edit Network settings
...
VPC: (new vpc)
Subnet: pm_public-subnet-1
Auto-assign public IP: Enabled
Security group name: pm_ec2-sg
Description: pm_ec2-sg created ...
...  
```

Launch instance

Tab - Instances (reload) - click "entity" instance id - Connect - Connect - (should show bird ascii Amazon Linux 2023)

Complete!

#### 1. EC2 Prerequirements

Install Node via NVM

Install Git

With Git upload codebase to Github

Pull github repo to EC2 instance

PM2 (Keep running in the background)

Credits to: https://github.com/yeshwanthlm/nodejs-on-ec2 

#### 2. In AWS EC2

```bash
sudo su - ## switch to root
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash ## install nvm

. ~/.nvm/nvm.sh ## activate nvm
nvm install node ## install node
node -v ## check node version
npm -v ## check npm version

sudo yum update -y ## update yum
sudo yum install git -y ## install git
git --version ## check git version
git clone <https-repo> ## clone repo

[root@ip-10-0-1-62 ~]# ls ## list files
edroh-inventorymanagement

cd <dir>

[root@ip-10-0-1-62 edroh-inventorymanagement]# ls
INSTRUCTIONS.md  client  server

cd server
npm i
npm run dev
```

#### 3. Check ports in AWS Instance

In AWS - EC2 - Tab - Instances - "select entity" -  Security - port range: "80"

#### 4. Run Server - In AWS EC2 (server folder)

```bash
ctrl + c ## exit server
echo "PORT=80" > .env ## set port
npm run dev
"Server running on port 80"
```

#### 5. Check Server

In AWS - EC2 - Tab - Instances - "select entity" - Details

- Public IPv4 address - "copy address" - change to http://(address)
- paste in browser - show "This is home route"

In AWS EC2:

```bash
Show "GET / HTTP/1.1" 200 18"
```

#### 6. Install PM2 in EC2

In AWS EC2 (server folder):

```bash
ctrl + c ## exit server
npm i pm2 -g
sudo env PATH=$PATH:$(which node) $(which pm2) startup systemd -u $USER --hp $(eval echo ~$USER) ## config pm2
pm2 start ecosystem.config.js ## start pm2
pm2 status ## check pm2
pm2 monit ## advanced pm2 status
```

In Browser: reload to validate server up

In AWS EC2 (server folder):

```bash
pm2 delete all ## delete all pm2 instances
```

In Browser: reload to validate server down

In AWS EC2 (server folder):

```bash
pm2 start ecosystem.config.js ## start pm2
```

### AWS RDS (Managed Relational Database Service)

#### Create Database Config

Tab - Databases - "create new database"

```bash
Standard create
Engine type: PostgreSQL
Templates: Free tier

- Settings
DB instance identifier: pm-rds
master password: hellomyfriend
confirm password: hellomyfriend

- Storage
click Storage autoscaling
untick "Enable storage autoscaling"

- Connectivity
Virtual private cloud (VPC): (new vpc)
DB subnet group: Create new DB Subnet Group
Public access: No
VPC security group: Create new
...
new VPC security group name: pm_rds-sg
Availability Zone: eu-north-1a
...

- Monitoring 
untick "Turn on Performance Insights"

- Additional configuration
initial database name: rds_inventorymanagement_initial
untick "Enable automated backups"
untick "Enable encryption"
```

Create database (Wait until Available)

#### Get inbound traffic from EC2 to Security group

Tab - Databases - click entity - Connectivity & Security - Security

- VPC security groups - click pm-rds-sg

- tick entity (pm-rds-sg) - Inbound rules - Edit inbound rules - Add rule

```bash
Type: PostgreSQL
Source: Custom
Search: pm_ec2-sg
```

Save rules

#### Get outbound traffic from EC2

AWS EC2 - Instances - click entity instance id - Security - click Security group (pm_ec2-sg) - Outbound rules - Edit outbound rules - Add rule

```bash
Type: PostgreSQL
Source: Custom
Search: pm_rds-sg
```

Save rules

#### Validate Security Group in RDS

RDS (Managed Relational Database Service)
Tab - Databases - click entity - scroll to Security group rules -
validate "EC2 Security Group - Inbound"

#### Copy RDS value Endpoint & DB Name

Tab - Databases - click entity - scroll to Connectivity & security -
copy Endpoint

Tab - Databases - click entity - click Configuration - copy DB name

#### Connect to EC2 & Add DATABASE_URL

AWS EC2 - Instances - tick entity - Connect - Connect

In AWS EC2:

```bash
sudo su - ## switch to root
ls
cd dir
cd server
nano .env
...
PORT=80
DATABASE_URL="postgresql://postgres:hellomyfriend@<endpoint>:5432/<dbname>?schema=public"
...
pm2 status
pm2 delete all
...
npx prisma generate
npx prisma migrate dev --name init ## validates DATABASE_URL
npm run seed
pm2 start ecosystem.config.js
pm2 monit
```

In Browser: reload to validate server up

add "/projects" ## show lots of data

### AWS Amplify (AWS Amplify offers web hosting and app backend services for fullstack developers. - frontend)

#### Create Amplify App

AWS Amplify - create new app - Github - next

- add repo - tick "my app is monorepo" - Monorepo root directory: client -  next
- advanced settings - "+ add new" -

Get API Base URL:
AWS EC2 - instances - select entity - copy Public IPv4 address

```bash
NEXT_PUBLIC_API_BASE_URL=http://(ipv4)
```

next - save and deploy - wait (deploying) - open domain in browser (cannot fetch data due to https)

#### Add API Gateway for REST API integration

AWS API Gateway (Build, Deploy and Manage APIs)

REST API - Build - New API

```bash
api name: pm_api-gateway
```

Create API

click "Create resource"

```bash
tick proxy resource
resource path: /
resource name: {proxy+}
tick "CORS"
```

Create resource

click "Methods type - ANY" - Edit integration

```bash
integration type: HTTP
tick "HTTP proxy integration"
HTTP method: ANY
endpoint URL: http://<server url>/{proxy}
```

Save

click "Deploy API"

```bash
stage: *new stage*
stage name: prod
```

Deploy

Stage details - copy Invoke URL

open copied url in browser ## Missing Authentication Token
add "/projects" - show data & endpoint working!

#### Add Amplify Authentication

AWS Amplify - open app - Hosting - Environment variables - manage variables

```bash
NEXT_PUBLIC_API_BASE_URL=(invoke url)/prod
```

click app - click main - Redploy this version

click domain - opens frontend app with working data!

### AWS S3 (Bucket)
