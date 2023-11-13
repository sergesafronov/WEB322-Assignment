# Readme

## Setup  

1. Download the project

2. Navigate to the root directory and install all the dependencies
   listed in package.json of the project and run `npm install`

## Application start

To run application please use `npm start`

Then connect to `localhost:8080`

## Login

To login please use any email and password from `data/fakeUsers.json`

Example - Email: `Kristina68@hotmail.com` Password:`0p91XkC2iIy44CF`

## Endpoints check

To check endpoints go to https://www.postman.com/ download, install and run Postman Agent to be able to check local hosts.

Through the Postman website -> `My Workspace` create the following requests:

GET: `http://localhost:8080/api/products`

GET: `http://localhost:8080/api/products/1`  `1` is an ID

DELETE: `http://localhost:8080/api/products/1`  `1` is an ID

POST: `http://localhost:8080/api/products` 

1. After entering the URL of the endpoint for POST. In the Headers tab, add a new header:

         Key: Content-Type
         
         Value: application/json

2. Switch to the Body tab.

3. Select the raw radio button.

4. From the dropdown on the right of the radio buttons, select JSON.

5. Enter the JSON data into the text field:
   
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
6. Submit the request.


In the same way users' endpoints can be checked.


