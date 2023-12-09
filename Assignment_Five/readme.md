# Readme

## Tne application Cyclic link

[https://coffee-bull-cuff.cyclic.app](https://coffee-bull-cuff.cyclic.app)

## Login

To login please use Username: `Admin`, Password: `123`.

* Please note that the lists and details of users and products are now protected.

## Online application test instructions

To check the endpoints go to https://www.postman.com/

Through the Postman website -> `My Workspace` 

* All the requests can be imported into Postman by using this file.

[Project_Cyclic_Postman_Collection.json](https://github.com/sergesafronov/WEB322-Serge-Safronov/tree/main/Assignment_Five/Project_Cyclic_Postman_Collection.json)

* Alternatively, you can manually create the requests:

1. Select a method `GET`, `DELETE`.

2. Enter URL.

3. Submit the request.

* OR

1. Select a method `POST`.

2. Enter URL.

3. Switch to the Body tab.

3. Select the raw radio button.

4. From the dropdown on the right of the radio buttons, select JSON.

5. Enter the JSON data into the text field.

6. Submit the request.

## Please use the following data samples

### Users

GET: `https://coffee-bull-cuff.cyclic.app/api/users`

GET: `https://coffee-bull-cuff.cyclic.app/api/users/1`  `1` is an ID.

DELETE: `https://coffee-bull-cuff.cyclic.app/api/users/1`  `1` is an ID.

POST: `https://coffee-bull-cuff.cyclic.app/api/users`

          {
            "id": 1,
            "firstName": "Karen",
            "lastName": "Yundt",
            "email": "Kristina68@hotmail.com",
            "password": "0p91XkC2iIy44CF",
            "dob": "2022-10-20T11:12:02.084Z",
            "company": "Kuhic Inc",
            "phone": "(796) 606-8670 x2136"
          }


### Products

GET: `https://coffee-bull-cuff.cyclic.app/api/products`

GET: `https://coffee-bull-cuff.cyclic.app/api/products/1`  `1` is an ID.

DELETE: `https://coffee-bull-cuff.cyclic.app/api/products/1`  `1` is an ID.

POST: `https://coffee-bull-cuff.cyclic.app/api/products` 

   
         {
             "id": 1,
             "title": "iPhone 9",
             "description": "An apple mobile which is nothing like apple",
             "price": 549,
             "discountPercentage": 12.96,
             "rating": 4.69,
             "stock": 94,
             "brand": "Apple",
             "category": "smartphones",
             "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
             "images": [
               "https://i.dummyjson.com/data/products/1/1.jpg",
               "https://i.dummyjson.com/data/products/1/2.jpg",
               "https://i.dummyjson.com/data/products/1/3.jpg",
               "https://i.dummyjson.com/data/products/1/4.jpg",
               "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
             ]
         }


### Orders

GET: `https://coffee-bull-cuff.cyclic.app/api/orders`

GET: `https://coffee-bull-cuff.cyclic.app/api/orders/320`  `320` is an ID.

DELETE: `https://coffee-bull-cuff.cyclic.app/api/orders/320`  `320` is an ID.

POST: `https://coffee-bull-cuff.cyclic.app/api/orders` 

   
          {
            "id": 320,
            "userId": 1,
            "productId": 32,
            "orderDate": "2023-11-14 07:49:26.973+00",
            "createdAt": "2023-11-29 04:58:56.354+00",
            "updatedAt": "2023-11-29 04:58:56.354+00"
          }


## Local host application test instructions

Download the project.

Navigate to the root directory and install all the dependencies
listed in package.json of the project by executing `npm install`.

## Application start

To run application please use `npm run dev`.

Then connect to `localhost:8080`.

## Login

To login please use Username: `Admin`, Password: `123`.

## Endpoints check

To check the endpoints go to https://www.postman.com/ download, install and run Postman Agent to be able to check local hosts.

Through the Postman website -> `My Workspace` create a request:


1. Select a method `GET`, `DELETE`.

2. Enter URL.

3. Submit the request.

* OR

1. Select a method `POST`.

2. Enter URL.

3. Switch to the Body tab.

3. Select the raw radio button.

4. From the dropdown on the right of the radio buttons, select JSON.

5. Enter the JSON data into the text field.

6. Submit the request.

## Please use the following data samples


### Users

GET: `http://localhost:8080/api/list`

GET: `http://localhost:8080/api/details/1`  `1` is an ID.

DELETE: `http://localhost:8080/api/delete/1`  `1` is an ID.

POST: `http://localhost:8080/api/create`

          {
            "id": 1,
            "firstName": "Karen",
            "lastName": "Yundt",
            "email": "Kristina68@hotmail.com",
            "password": "0p91XkC2iIy44CF",
            "dob": "2022-10-20T11:12:02.084Z",
            "company": "Kuhic Inc",
            "phone": "(796) 606-8670 x2136"
          }


### Products

GET: `http://localhost:8080/api/products`

GET: `http://localhost:8080/api/products/1`  `1` is an ID.

DELETE: `http://localhost:8080/api/products/1`  `1` is an ID.

POST: `http://localhost:8080/api/products` 

   
         {
             "id": 1,
             "title": "iPhone 9",
             "description": "An apple mobile which is nothing like apple",
             "price": 549,
             "discountPercentage": 12.96,
             "rating": 4.69,
             "stock": 94,
             "brand": "Apple",
             "category": "smartphones",
             "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
             "images": [
               "https://i.dummyjson.com/data/products/1/1.jpg",
               "https://i.dummyjson.com/data/products/1/2.jpg",
               "https://i.dummyjson.com/data/products/1/3.jpg",
               "https://i.dummyjson.com/data/products/1/4.jpg",
               "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
             ]
         }


### Orders

GET: `http://localhost:8080/api/orders`

GET: `http://localhost:8080/api/orders/320`  `320` is an ID.

DELETE: `http://localhost:8080/api/orders/320`  `320` is an ID.

POST: `http://localhost:8080/api/orders` 

   
          {
            "id": 320,
            "userId": 1,
            "productId": 32,
            "orderDate": "2023-11-14 07:49:26.973+00",
            "createdAt": "2023-11-29 04:58:56.354+00",
            "updatedAt": "2023-11-29 04:58:56.354+00"
          }         
