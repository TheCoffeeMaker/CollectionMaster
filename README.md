**Requirements**:

1. [NodeJS](https://nodejs.org/en/)
2. [MySql/MariaDB](https://dev.mysql.com/downloads/)
3. [React](https://reactjs.org/)

**Instalation**:

1. Clone the repository with `git clone https://github.com/danalexandrunicoara/northwind-app.git`
2. Run `create_and_populate_database.sql` file on MySql/MariaDB server. This will create and populate the database.
3. Inside `backend` folder, run `npm install` command.
4. Inside `frontend` folder run `npm install` command.

**Configuration**

1. Inside `backend` folder create a folder named `cofig`
2. Inside `config` folder create a file named `dev.env`
3. Inside the `dev.env` file set values for env variables used in BE server: PORT=, DBUSERNAME=, DBPASSWORD=
4. Inside `.gitignore` add the `config/` line so that the secret variables are not commites by mistake

**Start**:

1. Inside `backend` folder run `npm run dev` command. This will start the NodeJS server locally for development.
2. Inside `frontend` folder run `npm start` command. This will start the React user interface.

**Notes**

Northwind database was taken from [here](https://github.com/jpwhite3/northwind-MySQL)

**Tests**

1. Inside `backend` folder run `npm run test` command.
2. Inside `frontend` folder run `npm run test` command.

**Testing strategies**

Work in progress - documenting for now.

1. Create a test suite and a first failing test based on the feature. 
2. Create the component with the minimum feature so that it passes the test.
3. Refactor the code -> keep the test green.
4. Add new test that should fail based on the development of the feature.
5. Develop the feature and/or refactor code -> keep the tests green


**Directory structure inside the src folder on FE**

1. shared - header, footer, aside, content, etc - react components used in templates
2. templates - abstractions over router - keeps the routes simple and clear 
3. pages - components found at a specific route 
4. components - the rest of the components
5. api - abstraction over api library (RestHelper)
6. config - react env variables for development and production
7. Layout - home of the main router
8. img - images folder - added when necesary




**Commands for starting the FE DOCKER container using custom domain set from CMD**

**local for using DOCKER**
REACT_APP_API_URL=localhost:4000 npm start


**for production/staging**
REACT_APP_API_URL=localhost:4000 npm run build


**Test**

it works