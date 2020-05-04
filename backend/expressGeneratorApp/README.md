
### How to run

npm start


### How to run in debug mode

DEBUG=myapp:* npm start

# API

## Routes

### */clients*

#### [get] all the clients
127.0.0.1:3000/clients 
```
curl 127.0.0.1:3000/clients 
```
#### [post] a client
127.0.0.1:3000/clients 
```
curl --data "param1=value1&param2=value2" 127.0.0.1:3000/clients -X POST
```
### */clients/:id*

#### [get] a client
127.0.0.1:3000/clients/:id
```
curl 127.0.0.1:3000/clients/:id
```
#### [put] a client
127.0.0.1:3000/clients/:id
```
curl --data "param1=value1&param2=value2" 127.0.0.1:3000/clients/:id -X PUT
```
#### [del] a client
127.0.0.1:3000/clients/:id
```
curl 127.0.0.1:3000/clients/:id -X DELETE
```
### */clients/:id/contracts*

#### [get] all the clients
127.0.0.1:3000/clients/:id/contracts
```
curl 127.0.0.1:3000/clients/:id/contracts
```
#### [post] a contract
127.0.0.1:3000/clients/:id/contracts 
```
curl --data "param1=value1&param2=value2" 127.0.0.1:3000/clients/:id/contracts -X POST
```
### */clients/:id/contracts/:id*

#### [get] a contract
127.0.0.1:3000/clients/:id/contracts/:id
```
curl 127.0.0.1:3000/clients/:id/contracts/:id
```
#### [put] a contract
127.0.0.1:3000/clients/:id/contracts/:id
```
curl --data "param1=value1&param2=value2" 127.0.0.1:3000/clients/:id/contracts/:id -X PUT
```
#### [del] a contract
127.0.0.1:3000/clients/:id/contracts/:id
```
curl 127.0.0.1:3000/clients/:id/contracts/:id -X DELETE
```
