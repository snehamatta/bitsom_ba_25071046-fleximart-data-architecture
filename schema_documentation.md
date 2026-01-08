PART 1.2
Database Schema Documentation : FlexiMart
1. Entity–Relationship Description
ENTITY: customers
Purpose:
Stores customer related information for all users who place orders on the FlexiMart platform.
Attributes:
customer_id: Unique identifier for each customer (Primary Key, auto-incremented)
first_name: Customer’s first name
last_name: Customer’s last name
email: Customer’s email address (unique, used for communication)
phone: Customer’s contact number
city: City where the customer resides
registration_date: Date when the customer registered on the platform
Relationships:
One customer can place many orders
Relationship: customers (1) to orders (M)
ENTITY : Products
Purpose:
Stores information about products available for sale on the platform.
Attributes:
product_id: Unique identifier for each product (Primary Key, auto-incremented)
product_name: Name of the product
category: Product category (e.g., Electronics, Clothing)
price: Unit price of the product
stock_quantity: Number of units available in inventory
Relationships:
One product can appear in many order items
Relationship: products (1) to order_items (M)
ENTITY: orders
Purpose:
Stores order-level information such as customer, order date, and total value.
Attributes:
order_id: Unique identifier for each order (Primary Key, auto-incremented)
customer_id: Identifier of the customer who placed the order (Foreign Key)
order_date: Date when the order was placed
total_amount: Total monetary value of the order
status: Current order status (e.g., Pending, Completed)
Relationships:
One order belongs to one customer
One order can have many order items
Relationships:
customers (1) to orders (M)
orders (1) to order_items (M)
ENTITY: order_items
Purpose:
Stores detailed product-level information for each order.
Attributes:
order_item_id: Unique identifier for each order item (Primary Key, auto-incremented)
order_id: Identifier of the associated order (Foreign Key)
product_id: Identifier of the purchased product (Foreign Key)
quantity: Number of units ordered
unit_price: Price per unit at the time of purchase
subtotal: Total cost for the item (quantity × unit_price)
Relationships:
Each order item belongs to one order and one product
2. Normalization Explanation (3NF)
The FlexiMart database schema is designed in Third Normal Form (3NF) to reduce redundancy and ensure data integrity.
In this schema, each table represents a single entity, and all non-key attributes are fully functionally dependent on the primary key. For example, in the customers table, attributes such as first_name, last_name, email, city, and registration_date depend only on customer_id. There are no partial dependencies because each table uses a single-column primary key.
The schema also avoids transitive dependencies. In the orders table, customer-related details such as name or email are not stored; instead, they are referenced through customer_id. Similarly, product details such as product_name or category are stored only in the products table and not repeated in order_items. This separation ensures that non-key attributes do not depend on other non-key attributes.
By following 3NF, the design avoids update anomalies e.g., changing a customer’s email in one place only, insert anomalies e.g., adding a product without requiring an order, and delete anomalies e.g., deleting an order does not remove product or customer data. Overall, this normalized design improves consistency, scalability, and maintainability of the database.


