docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itog10-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itog10-java/app ../../..
