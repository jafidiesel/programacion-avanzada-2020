

## How to run this project

1. Install docker
2. Run redis docker image 
3. Install the project dependencies detailed in package.json
4. Run the api


## How to Install docker
--------------------

[Docker documentation here](https://docs.docker.com/engine/install/ubuntu/)

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

# Data 


Campaign 1->* Board

Campaign: -> campaign0
- hash: string
- namePlayer1: string
- symbolPlayer1: string
- scorePlayer1: int
- namePlayer2: string
- symbolPlayer2: string
- scorePlayer2: int
- ties: int
- nextPlayer: string
- lastBoard: int

Board: -> board0campaign0
- cell0: string
- cell1: string
- cell2: string
- cell3: string
- cell4: string
- cell5: string
- cell6: string
- cell7: string
- cell8: string

-----------

controller(routes) -> service
service -> model
service -> repository

--------
# How to play

1. new campaign
2. join player number 2 
3. get status campaign
4. set position


----


# API documentation

### &#x2705; _[POST]_ new campaign
```
curl --location --request POST 'localhost:3000/campaign/new' \
--header 'Content-Type: application/json' \
--data-raw '{
    "namePlayer": "jafi"
}'
```

- url: `campaign/new`
- Create a new campaign and it returns the campaign hash
- body: `{ namePlayer: string }`
- Success: { 
    status: int,
    message: string,
    data: {
        hash: string
    }
 }

### &#x2705; _[GET]_ get campaign status
```
curl --location --request GET 'localhost:3000/campaign/236c0a957badee4b9fc3f2c0c8d86547/status' \
--header 'Content-Type: application/json' 
```
- url: `/campaign/:hash/status`
- Success1: 
```
{   
    status: int,
    message: string,
    data:{
        players: {
            {
                namePlayer1: string,
                symbolPlayer1: string
            },
            {
                namePlayer2: string,
                symbolPlayer2: string
            }
        },
        board:{
            idBoard: int,
            cell1: string,
            ...
            ...
            cell8: string
        }
        campaign: {
            nextPlayer: string,
            lastBoard: int
        },
        score:{
            scorePlayer1: number,
            scorePlayer2: number,
            ties: number,
        }
    }
}
```
- Error: 
```
{ 
    status: int,
    message: string,
    data: {
        hash: string
    }
}
```

### &#x2705; _POST_ Join to a campaign
```
curl --location --request POST 'localhost:3000/campaign/236c0a957badee4b9fc3f2c0c8d86547/join' \
--header 'Content-Type: application/json' \
--data-raw '{
    "namePlayer": "juan"
}'
```

- url: `/campaign/:hash/join`
- Join to an existing campaign
- body: `{ namePlayer: string }`
- Notes:
 - If the second player have never joined, it will allow the creation of the second player with the name entered.
 - Once the second player joins, players must remember their names to re-join later.
- Success: { hash: string }

### &#x2705; _[POST]_ place a symbol in a cell
```
curl --location --request POST 'localhost:3000/campaign/236c0a957badee4b9fc3f2c0c8d86547/cell/8' \
--header 'Content-Type: application/json' \
--data-raw '{
    "namePlayer": "jafi"
}'
```

- url: `/campaign/:hash/cell/:cell`
- body: `{ namePlayer: string }`
- Success1: 
 ```
{ 
    status: int,
    message: "correctly placed",
    data: {
        hash: string
    }
 }
```
- Success2:
``` 
{ 
    status: int,
    message: "correctly placed, campaign won!",
    data: {
        hash: string
    }
}
```
- Success3:
```
{ 
    status: int,
    message: "occupied cell",
    data: {
        hash: string
    }
}
```
- Error: 
```
{ 
    status: int,
    message: string,
    data: {
        hash: string
    }
}
```
------------------------------------------------

### _[GET]_ historical boards data (optional - TBD)
- url: `/campaign/:hash/history-board`
- Success1: 
```
{   
    status: int,
    message: string,
    data:{
        boards: [
            {
                idBoard: int,
                cell1: string,
                ...
                ...
                cell8: string
            },
            {
                idBoard: int,
                cell1: string,
                ...
                ...
                cell8: string
            }
        ]
    }
}
```
- Error: 
```
{ 
    status: int,
    message: string,
    data: {
        hash: string
    }
}
```
