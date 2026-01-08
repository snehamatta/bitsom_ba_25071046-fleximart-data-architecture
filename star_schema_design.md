Section 1: Schema Overview
FACT TABLE: fact_sales
Grain:
One row per product per order line item.
Business Process:
Captures sales transactions for analytical reporting.
Measures (Numeric Facts):
•	quantity_sold: Number of units sold for a product in a transaction
•	unit_price: Price per unit at the time of sale
•	discount_amount: Discount applied to the sale
•	total_amount: Final sale amount calculated as
(quantity_sold * unit_price - discount_amount)
Foreign Keys:
•	date_key: Links to dim_date
•	product_key: Links to dim_product
•	customer_key: Links to dim_customer

DIMENSION TABLE: dim_date
Purpose:
Provides a comprehensive date dimension for time based analysis.
Type:
Conformed dimension (used consistently across facts).
Attributes:
•	date_key (PK): Surrogate key in YYYYMMDD format
•	full_date: Actual calendar date
•	day_of_week: Name of the day (Monday, Tuesday, etc.)
•	day_of_month: Day number in the month
•	month: Month number (1–12)
•	month_name: Month name (January, February, etc.)
•	quarter: Quarter of the year (Q1–Q4)
•	year: Year value (2023, 2024, etc.)
•	is_weekend: Indicates whether the date is a weekend

DIMENSION TABLE: dim_product
Purpose:
Stores descriptive information about products sold.
Attributes:
•	product_key (PK): Surrogate product identifier
•	product_id: Business product code
•	product_name: Name of the product
•	category: Product category (Electronics, Fashion, etc.)
•	subcategory: Sub-classification of the product
•	unit_price: Standard product price

DIMENSION TABLE: dim_customer
Purpose:
Stores customer related attributes for sales analysis.
Attributes:
•	customer_key (PK): Surrogate customer identifier
•	customer_id: Business customer code
•	customer_name: Full name of the customer
•	city: Customer city
•	state: Customer state
•	customer_segment: Segment classification (Retail, Corporate, etc.)

Section 2: Design Decisions
1.The star schema uses a transaction line item level granularity to ensure detailed and flexible analysis. Each row in the fact table represents a single product sold within an order, allowing analysts to aggregate sales by product, customer, date or category. This level of detail supports both high level summaries and detailed drill down analysis.
2.Surrogate keys are used instead of natural keys to improve performance and maintain historical accuracy. Natural keys such as product_id or customer_id may change over time, whereas surrogate keys remain stable and simplify joins between fact and dimension tables.
3.This design supports drill down and roll-up operations efficiently. Analysts can roll up sales data from daily to monthly or yearly levels using the date dimension, or drill down from category level sales to individual products. The separation of facts and dimensions ensures simplicity, scalability and optimized query performance for analytical workloads.

Section 3: Sample Data Flow
Source Transaction
Order #101
Customer: John Doe
Product: Laptop
Quantity: 2
Unit Price: ₹50,000

Data Warehouse Representation
fact_sales
{
  date_key: 20240115,
  product_key: 5,
  customer_key: 12,
  quantity_sold: 2,
  unit_price: 50000,
  discount_amount: 0,
  total_amount: 100000
}
dim_date
{
  date_key: 20240115,
  full_date: '2024-01-15',
  month: 1,
  month_name: 'January',
  quarter: 'Q1',
  year: 2024
}
dim_product
{
  product_key: 5,
  product_name: 'Laptop',
  category: 'Electronics'
}
dim_customer
{
  customer_key: 12,
  customer_name: 'John Doe',
  city: 'Mumbai'
}

