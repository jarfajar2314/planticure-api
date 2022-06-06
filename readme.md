# Planticure API
Backend API for Planticure app.

## Installation
**1. Install using NPM**
```javascript
npm install
npm install --save-dev
```
**2. Put .env file**
download .env file here <br>
[.env file](https://drive.google.com/file/d/1eWK81fiDhEYfqbcpcg9Nu18UV71RcL4Z/view?usp=sharing) <br>
then place it on base directory (make sure the file named '.env'). <br>
![image](https://user-images.githubusercontent.com/50899813/169381841-6209a231-fb91-4b4a-bd50-32e6a4bfbd7a.png)

**How to run**
```javascript
npm run start
```

## Endpoints
[https://localhost:8080](http://localhost:8080)

## Register
- URL
    - `/register`

- Method
    - POST

- Request Body
    - name : string
    - email : string, must be unique
    - password : string, must be at least 6 characters

- Response
    ```json
    {
      "error" : false,
      "message": "User register success",
      "uid" : " ax1231zx...... "
    }
    ```

## Login
- URL
    - `/login`

- Method
    - POST

- Request Body
    - email : string
    - password : string

- Response
    ```json
    {
      "error" : false,
      "message": "Successfully logged in.",
    }
    ```

## Get All Plants
- URL
    - `/plants`

- Method
    - GET

- Response
    ```json
    {
      "error" : false,
      "message": "Plants fetched successfully"
      "data" : [
        {
          ...
        }
      ]
    }
    ```

## Get Plant by Name
- URL
    - `/plant/{name}`

- Method
    - GET

- Response
    ```json
    {
      "error" : false,
      "message": "Plants fetched successfully"
      "data" : [
        {
          ...
        }
      ]
    }
    ```

## Get Disease by Plant
- URL
    - `/plant/{name}/disease`

- Method
    - GET

- Response
    ```json
    {
      "error" : false,
      "message": "Plants fetched successfully"
      "data" : [
        {
          ...
        }
      ]
    }
    ```
