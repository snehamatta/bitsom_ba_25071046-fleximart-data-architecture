NoSQL Analysis Report : FlexiMart
Section A: Limitations of RDBMS
Relational databases like MySQL are designed around fixed schemas and structured tables, which makes them less suitable for highly diverse product catalogs. In FlexiMart’s case, different product types have different attributes for example, laptops require fields such as RAM, processor, and storage, while shoes require size, color and material. Representing such variability in an RDBMS would require either many nullable columns or multiple related tables, leading to increased complexity and inefficient storage.
Additionally, frequent schema changes are required when new product types are introduced. Altering table structures repeatedly using ALTER TABLE operations can be time consuming and risky in production environments. Relational databases also struggle with storing nested or hierarchical data, such as customer reviews with ratings, comments and timestamps. This data must be split across multiple tables and joined at query time, increasing query complexity and reducing performance.

Section B: NoSQL Benefits 
MongoDB addresses these challenges by using a flexible, document oriented data model. Each product can be stored as a JSON like document, allowing different products to have different attributes without enforcing a fixed schema. For example, a laptop document can include technical specifications, while a shoe document can include size and color fields, all within the same collection.
MongoDB also supports embedded documents, making it easy to store customer reviews directly within product documents. This eliminates the need for complex joins and allows faster retrieval of product details along with their reviews. Furthermore, MongoDB is designed for horizontal scalability through sharding, enabling FlexiMart to distribute data across multiple servers as the product catalog grows. This makes MongoDB well suited for handling large volumes of diverse and evolving product data efficiently.

Section C: Trade-offs 
Despite its flexibility, MongoDB has some disadvantages compared to MySQL. 
1.	MongoDB provides weaker support for complex transactions across multiple documents, whereas relational databases offer strong ACID guarantees, which are important for financial and order related data.
2.	Data consistency can be harder to enforce in MongoDB because it does not use rigid schemas or foreign key constraints. This may lead to duplicate or inconsistent data if not carefully managed at the application level. Therefore, while MongoDB is ideal for flexible product catalogs, relational databases remain better suited for transactional systems.


