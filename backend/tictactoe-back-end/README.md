

## How to run this project

1. Install docker
2. Run redis docker image 
3. Install the project dependencies detailed in package.json
4. Run the api


## How to Install docker
--------------------

[Docker documentation here](https://docs.docker.com/engine/install/)

## How to run redis with docker
--------------------
```
docker run -p 6379:6379 redis
```


#### How to log in the "redis-instance" container just created

```
docker exec -it redis-container-name bash
```

Inside the container run the redis-cli with:

```
redis-cli
```

To check out redis commands go [here](https://redis.io/commands)

## How to run api
-------------------------
```
npm start
```


-------------------
---------------


# API documentation 

