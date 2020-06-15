

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

# Data 


Campaign 1->* Board

Campaign: -> campaign#0
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

Board: -> board#0campaign#0
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

controller(routes) -> serviceX
serviceX -> repositoryX + repositoryY + ...


# API documentation

### _[POST]_ new campaign
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

### _POST_ Join to a campaign
- url: `/campaign/:hash/join`
- Join to an existing campaign
- body: { namePlayer: string }
- Notes:
 - If the second player have never joined, it will allow the creation of the second player with the name entered.
 - Once the second player joins, players must remember their names to re-join later.
- Success: { hash: string }

### _[POST]_ place a symbol in a cell
- url: `/campaign/:hash/position/:cell`
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

### _[GET]_ get campaign status
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
            nextPlayer: string
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

### _[GET]_ get score
- url: `/campaign/:hash/score`
- Success1: 
```
{   
    status: int,
    message: string,
    data:{
        scorePlayer1: int,
        namePlayer1:string,
        scorePlayer2: int,
        namePlayer2:string,
        ties: int
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

### _[GET]_ historical boards data
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
