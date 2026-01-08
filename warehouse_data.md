warehouse_data
USE fleximart_dw;

INSERT INTO dim_date VALUES
(20240101,'2024-01-01','Monday',1,1,'January','Q1',2024,0),
(20240102,'2024-01-02','Tuesday',2,1,'January','Q1',2024,0),
(20240103,'2024-01-03','Wednesday',3,1,'January','Q1',2024,0),
(20240104,'2024-01-04','Thursday',4,1,'January','Q1',2024,0),
(20240105,'2024-01-05','Friday',5,1,'January','Q1',2024,0),
(20240106,'2024-01-06','Saturday',6,1,'January','Q1',2024,1),
(20240107,'2024-01-07','Sunday',7,1,'January','Q1',2024,1),
(20240108,'2024-01-08','Monday',8,1,'January','Q1',2024,0),
(20240109,'2024-01-09','Tuesday',9,1,'January','Q1',2024,0),
(20240110,'2024-01-10','Wednesday',10,1,'January','Q1',2024,0),
(20240111,'2024-01-11','Thursday',11,1,'January','Q1',2024,0),
(20240112,'2024-01-12','Friday',12,1,'January','Q1',2024,0),
(20240113,'2024-01-13','Saturday',13,1,'January','Q1',2024,1),
(20240114,'2024-01-14','Sunday',14,1,'January','Q1',2024,1),
(20240115,'2024-01-15','Monday',15,1,'January','Q1',2024,0),

(20240201,'2024-02-01','Thursday',1,2,'February','Q1',2024,0),
(20240202,'2024-02-02','Friday',2,2,'February','Q1',2024,0),
(20240203,'2024-02-03','Saturday',3,2,'February','Q1',2024,1),
(20240204,'2024-02-04','Sunday',4,2,'February','Q1',2024,1),
(20240205,'2024-02-05','Monday',5,2,'February','Q1',2024,0),
(20240206,'2024-02-06','Tuesday',6,2,'February','Q1',2024,0),
(20240207,'2024-02-07','Wednesday',7,2,'February','Q1',2024,0),
(20240208,'2024-02-08','Thursday',8,2,'February','Q1',2024,0),
(20240209,'2024-02-09','Friday',9,2,'February','Q1',2024,0),
(20240210,'2024-02-10','Saturday',10,2,'February','Q1',2024,1),
(20240211,'2024-02-11','Sunday',11,2,'February','Q1',2024,1),
(20240212,'2024-02-12','Monday',12,2,'February','Q1',2024,0),
(20240213,'2024-02-13','Tuesday',13,2,'February','Q1',2024,0),
(20240214,'2024-02-14','Wednesday',14,2,'February','Q1',2024,0);
INSERT INTO dim_product (product_id, product_name, category, subcategory, unit_price) VALUES
('P001','Laptop Pro','Electronics','Computers',90000),
('P002','Smartphone X','Electronics','Mobiles',60000),
('P003','Bluetooth Headphones','Electronics','Audio',5000),
('P004','4K Television','Electronics','TV',75000),
('P005','Smart Watch','Electronics','Wearables',12000),

('P006','Men T-Shirt','Fashion','Clothing',800),
('P007','Women Jeans','Fashion','Clothing',2000),
('P008','Sneakers','Fashion','Footwear',3500),
('P009','Jacket','Fashion','Outerwear',4500),
('P010','Handbag','Fashion','Accessories',6000),

('P011','Sofa','Home','Furniture',45000),
('P012','Dining Table','Home','Furniture',30000),
('P013','LED Lamp','Home','Lighting',1200),
('P014','Curtains','Home','Decor',2500),
('P015','Wall Clock','Home','Decor',900);
INSERT INTO dim_customer (customer_id, customer_name, city, state, customer_segment) VALUES
('C001','John Doe','Mumbai','Maharashtra','Retail'),
('C002','Priya Sharma','Delhi','Delhi','Retail'),
('C003','Amit Verma','Bengaluru','Karnataka','Corporate'),
('C004','Sneha Iyer','Chennai','Tamil Nadu','Retail'),
('C005','Rahul Mehta','Mumbai','Maharashtra','Corporate'),
('C006','Neha Singh','Delhi','Delhi','Retail'),
('C007','Vikram Rao','Bengaluru','Karnataka','Retail'),
('C008','Ananya Gupta','Chennai','Tamil Nadu','Corporate'),
('C009','Rohit Jain','Mumbai','Maharashtra','Retail'),
('C010','Pooja Nair','Bengaluru','Karnataka','Retail'),
('C011','Karan Malhotra','Delhi','Delhi','Corporate'),
('C012','Meera Das','Chennai','Tamil Nadu','Retail');
INSERT INTO fact_sales 
(date_key, product_key, customer_key, quantity_sold, unit_price, discount_amount, total_amount) VALUES
(20240106,1,1,2,90000,5000,175000),
(20240107,2,2,1,60000,0,60000),
(20240113,3,3,3,5000,500,14500),
(20240114,4,4,1,75000,3000,72000),
(20240120,5,5,2,12000,1000,23000),

(20240203,6,6,4,800,0,3200),
(20240204,7,7,2,2000,200,3800),
(20240210,8,8,3,3500,500,10000),
(20240211,9,9,1,4500,0,4500),
(20240217,10,10,2,6000,500,11500),

(20240108,11,11,1,45000,2000,43000),
(20240109,12,12,1,30000,1500,28500),
(20240110,13,1,5,1200,0,6000),
(20240111,14,2,2,2500,200,4800),
(20240112,15,3,1,900,0,900),

(20240205,1,4,1,90000,4000,86000),
(20240206,2,5,2,60000,3000,117000),
(20240207,3,6,4,5000,500,19500),
(20240208,4,7,1,75000,2000,73000),
(20240209,5,8,2,12000,0,24000);
INSERT INTO dim_date VALUES
(20240120,'2024-01-20','Saturday',20,1,'January','Q1',2024,1),
(20240217,'2024-02-17','Saturday',17,2,'February','Q1',2024,1);
