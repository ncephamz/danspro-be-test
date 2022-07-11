# Danspro BE Test

# Doc API
- Please click this link https://documenter.getpostman.com/view/8144274/UzJQqEqo

# Requirment
- Docker

# Set up with docker
- Create docker netword
  `docker network create network_danspro_be_test`
- Start db
  `docker-compose -f services/mariadb/docker-compose.yml up --build -d`
- Build image and run container
  `sh build-api.sh`
- Run migration and seeder in container
  - `docker exec -it api_danspro_be_test bash`
  - `npm run migrate`
  - `npm run seed`

# Stop service
- Run command in container
  `docker-compose -f services/mariadb/docker-compose.yml down`

# Reset DB
- Run command in container
  `npm run reset:db`

# Set up with npm
- Install depedencies
  `npm i`
- Create .env file
  `touch .env`
- Input the secret configuration into the .env file based on the requirements defined by the developer. example: 
    PORT=8000
    BASIC_AUTH_USERNAME=<valid basic auth username>
    BASIC_AUTH_PASSWORD=<valid basic auth password>
    SECRET_JWT=<valid secret jwt>
    SECRET_ENCRYPT_PASSWORD_PROFILE= <valid secret encrypt password>
    DB_DATABASE=<valid database>
    DB_USERNAME=<valid database username>
    DB_PASSWORD=<valid database password>
    DB_HOST=<valid database host>
    DB_PORT=<valid database post>
    DB_DIALECT=<valid database dialect>
    DB_POOL_MAX=<valid database pool max>
    DB_POOL_MIN=<valid database pool min>
    DB_POOL_IDLE=<valid database pool idle>

- Run service as development
  `npm run dev`