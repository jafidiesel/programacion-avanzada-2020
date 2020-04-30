
### How to run

npm start


### How to run in debug mode

DEBUG=myapp:* npm start


curl 127.0.0.1:3000/clients 
curl 127.0.0.1:3000/clients/NUMERO 
curl --data "param1=value1&param2=value2" 127.0.0.1:3000/clients -X POST 
curl --data "param2=value223" 127.0.0.1:3000/clients/NUMERO -X PUT 
curl 127.0.0.1:3000/clients/NUMERO -X DELETE 
curl 127.0.0.1:3005/clients/23/contracts -X GET 
curl 127.0.0.1:3005/clients/23/contracts/50 -X GET 
curl 127.0.0.1:3005/clients/23/contracts -X POST 
curl 127.0.0.1:3005/clients/23/contracts/50 -X PUT 
curl 127.0.0.1:3005/clients/23/contracts/50 -X DELETE