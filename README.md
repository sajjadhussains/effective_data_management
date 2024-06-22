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
