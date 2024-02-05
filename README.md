# Node MongoDB eCommerce Rest API

Welcome to the Node MongoDB eCommerce Rest API, a powerful solution for building eCommerce applications with Node.js, MongoDB, and Yarn. This API provides essential functionalities to manage users, products, shopping carts, and orders for a seamless eCommerce experience.

## Getting Started

1. Clone the repository.

    ```bash
    git clone git@github.com:subas79/ecommerce.git
    ```

2. Install dependencies using Yarn:

    ```bash
    yarn install
    ```

3. Configure environment variables in a `.env` file, including your MongoDB connection string.

4. Start the server:

    ```bash
    yarn start
    ```

## API Endpoints

- **POST /api/auth/register:** Register a new user.
- **POST /api/auth/login:** Authenticate and log in a user.

- **GET /api/user/:id:** Retrieve user details.
- **PUT /api/user/:id:** Update user information.

- **GET /api/products:** Retrieve a list of all products.
- **GET /api/products/:id:** Retrieve details of a specific product.
- **POST /api/products:** Create a new product.

- **GET /api/cart/:userId:** Retrieve the shopping cart for a user.
- **POST /api/cart/add:** Add a product to the shopping cart.
- **DELETE /api/cart/:productId:** Remove a product from the shopping cart.

- **POST /api/order/:userId:** Place a new order.
- **GET /api/order/:orderId:** Retrieve details of a specific order.

## Database Connection

Ensure you have MongoDB running, and update the connection string in your `.env` file.

## Contributing

We welcome contributions! Check out our guidelines in the [Contributing](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).
