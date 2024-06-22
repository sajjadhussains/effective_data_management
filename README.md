# effective_data_management 

## How to run application locally
### clone the repository
```sh
git clone "https://github.com/sajjadhussains/effective_data_management.git"
```
### directory change
```
cd file_name //you can change by tab button,and select your download file
npm install //install all the dependencies
```
### create .env file at the root.Given bellow code copy and paste withn the .env file or you can connect to your own database.
```
PORT = 5000
DATABASE_URL= mongodb+srv://admin123:admin123@cluster0.8adqzd4.mongodb.net/effective_data_management?retryWrites=true&w=majority&appName=Cluster0
```
### now to run your application,run the bellow command
```
npm run start:dev
```
## Now Feature can be check either by Postman or Browser
### the apis are given if anyone intereste to check
#### 1.create a new product
* Api-endpoint:http://localhost:5000/api/products
* Method:POST
* Sample Request Body
```
{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}
```

#### 2.Retrive a list of all products
* Api-endpoint:http://localhost:5000/api/products
* Method:GET
* Sample Response
```
{
    "success": true,
    "message": "Products fetched successfully!",
    "data": [
        {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "Samsung Galaxy S21",
            "description": "High-performance Android smartphone with advanced camera capabilities.",
            "price": 799,
            "category": "Electronics",
            "tags": ["smartphone", "Samsung", "Android"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Phantom Black"
                },
                {
                    "type": "Storage Capacity",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 30,
                "inStock": true
            }
        }
        // Additional products can be added here...
    ]
}
```
#### 3.Retrieve a product by specific id
* Api-endpoint:http://localhost:5000/api/products/:productId
* Method:GET
* Sample Response
```
{
    "success": true,
    "message": "Product fetched successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
}
```
#### 4.Update Product Information
* Api-endpoint:http://localhost:5000/api/products/:productId
* Method:PUT
* Sample Request Body
```
{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}
```
*Sample Response
```
{
    "success": true,
    "message": "Product updated successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 49,
            "inStock": true
        }
    }
}
```
#### 5.Delete A Product
* Api-endpoint:http://localhost:5000/api/products/:productId
* Method:DELETE
* Sample Response
```
{
    "success": true,
    "message": "Product deleted successfully!",
    "data": null
 }
```
#### 6.Search a Product
* Api-endpoint:http://localhost:5000/api/products?searchTerm=iphone
* Method:GET
* Sample Response
```
{
    "success": true,
    "message": "Products matching search term 'iphone' fetched successfully!",
    "data": [
        {
            "name": "iPhone 13 Pro",
            "description": "The latest flagship iPhone model with advanced camera features.",
            "price": 999,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Graphite"
                },
                {
                    "type": "Storage",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "iPhone SE",
            "description": "Compact and affordable iPhone model with powerful performance.",
            "price": 399,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "White"
                },
                {
                    "type": "Storage",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 20,
                "inStock": true
            }
        }
    ]
}
```
