**Requirements**:

1. [NodeJS](https://nodejs.org/en/)
2. [MySql/MariaDB](https://dev.mysql.com/downloads/)
3. [React](https://reactjs.org/)

**Instalation**:

1. Clone the repository with `git clone https://github.com/danalexandrunicoara/northwind-app.git`
2. Run `create_and_populate_database.sql` file on MySql/MariaDB server. This will create and populate the database.
3. Inside `backend` folder, run `npm install` command.
4. Inside `frontend` folder run `npm install` command.

**Start**:

1. Inside `backend` folder run `npm start` command. This will start the NodeJS server.
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


**Directory structure**

1. shared - header, footer, aside, content, etc - react components used in templates
2. templates - abstraction over router - keeps routes simple and clear
3. components - the rest of the components