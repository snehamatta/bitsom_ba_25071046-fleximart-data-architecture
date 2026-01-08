Query 1: Customer Purchase History (5 marks)
Business Question: "Generate a detailed report showing each customer's name, email, total number of orders placed, and total amount spent. Include only customers who have placed at least 2 orders and spent more than ₹5,000. Order by total amount spent in descending order."
Requirements:
•	Must join: customers, orders, order_items tables
•	Use GROUP BY with HAVING clause
•	Calculate aggregates: COUNT of orders, SUM of amounts
Query:
SELECT 
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.email,
    COUNT(o.order_id) AS total_orders,
    SUM(o.total_amount) AS total_spent
FROM customers c
JOIN orders o
    ON c.customer_id = o.customer_id
GROUP BY 
    c.customer_id, c.first_name, c.last_name, c.email
HAVING 
    COUNT(o.order_id) >= 2
    AND SUM(o.total_amount) > 5000
ORDER BY total_spent DESC;

Query 2: Product Sales Analysis (5 marks)
Business Question: "For each product category, show the category name, number of different products sold, total quantity sold, and total revenue generated. Only include categories that have generated more than ₹10,000 in revenue. Order by total revenue descending."
Requirements:
•	Must join: products, order_items tables
•	Use GROUP BY with HAVING clause
•	Calculate: COUNT(DISTINCT), SUM aggregates
Query:
USE fleximart;

SELECT 
    p.category AS category,
    COUNT(DISTINCT oi.product_id) AS num_products,
    SUM(oi.quantity) AS total_quantity_sold,
    SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM products p
JOIN order_items oi
    ON p.product_id = oi.product_id
GROUP BY 
    p.category
HAVING 
    SUM(oi.quantity * oi.unit_price) > 10000
ORDER BY 
    total_revenue DESC;
Query 3: Monthly Sales Trend (5 marks)
Business Question: "Show monthly sales trends for the year 2024. For each month, display the month name, total number of orders, total revenue, and the running total of revenue (cumulative revenue from January to that month)."
Requirements:
•	Use window function (SUM() OVER) for running total OR use subquery
•	Extract month from order_date
•	Group by month
•	Order chronologically
Query:
USE fleximart;

SELECT
    MONTHNAME(order_date) AS month_name,
    COUNT(order_id) AS total_orders,
    SUM(total_amount) AS monthly_revenue,
    SUM(SUM(total_amount)) OVER (
        ORDER BY MONTH(order_date)
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS cumulative_revenue
FROM orders
WHERE YEAR(order_date) = 2024
GROUP BY
    MONTH(order_date),
    MONTHNAME(order_date)
ORDER BY
    MONTH(order_date);
