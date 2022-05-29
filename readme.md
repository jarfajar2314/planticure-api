# Plenticure API

## Installation
### 1. Install using NPM
`npm install`
<br>
### 2. Put .env file
download .env file here <br>
[.env file](https://drive.google.com/file/d/1eWK81fiDhEYfqbcpcg9Nu18UV71RcL4Z/view?usp=sharing) <br>
then place it on base directory (make sure the file named '.env'). <br>
![image](https://user-images.githubusercontent.com/50899813/169381841-6209a231-fb91-4b4a-bd50-32e6a4bfbd7a.png)



## How to run
`npm run start`

## Endpoints
[https://localhost:8080/api](http://localhost:8080/api)

## Register
### URL
`/register`
### Method
POST
### Request Body
- name : string
- email : string
- password : string

### Response
`
{
  "message": "User register success"
}
`
