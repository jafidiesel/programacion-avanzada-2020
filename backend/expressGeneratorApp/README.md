

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
docker run -p 6379:6379 --name redis-instance redis
```


#### How to log in the "redis-instance" container just created

```
docker exec -it redis-instance bash
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

### How to run in debug mode

DEBUG=myapp:* npm start

-------------------
---------------


# API documentation 

## Routes

### */clients*
------
#### &#x2705; [get] all the clients
127.0.0.1:3000/clients 
```
curl 127.0.0.1:3000/clients 
```
#### &#x2705; [post] a client
127.0.0.1:3000/clients 

client model:

```
{
    name: "string",
    lastname: "string",
    idClient: "string"
}
```

```
curl --data '{ "name": "juan", "lastname": "sancho", "idClient": "5" }' 127.0.0.1:3000/clients -X POST -H "Content-Type: application/json"
```
### */clients/:id*
------
#### &#x2705; [get] a client
127.0.0.1:3000/clients/:idClient
```
curl 127.0.0.1:3000/clients/:idClient -X GET -H "Content-Type: application/json"
```
#### [put] a client
127.0.0.1:3000/clients/:id
```
curl --data "param1=value1&param2=value2" 127.0.0.1:3000/clients/:id -X PUT -H "Content-Type: application/json"
```
#### [del] a client
127.0.0.1:3000/clients/:id
```
curl 127.0.0.1:3000/clients/:id -X DELETE
```
### */clients/:id/contracts*
------
#### &#x2705; [get] all the contracts from a client
127.0.0.1:3000/clients/:id/contracts
```
curl 127.0.0.1:3000/clients/:idClient/contracts
```
#### [post] a contract
127.0.0.1:3000/clients/:id/contracts 

contract model:

```
{
    description: "string",
    title: "string",
    idContract: "string"
}
```

```
curl --data "params" 127.0.0.1:3000/clients/:idClient/contracts -X POST
```
### */clients/:idClient/contracts/:idContract*
------

#### [get] a contract
127.0.0.1:3000/clients/:idClient/contracts/:idContract
```
curl 127.0.0.1:3000/clients/:idClient/contracts/:idContract
```
#### [put] a contract
127.0.0.1:3000/clients/:idClient/contracts/:idContract
```
curl --data "param1=value1&param2=value2" 127.0.0.1:3000/clients/:idClient/contracts/:idContract -X PUT
```
#### [del] a contract
127.0.0.1:3000/clients/:idClient/contracts/:idContract
```
curl 127.0.0.1:3000/clients/:idClient/contracts/:idContract -X DELETE
```
