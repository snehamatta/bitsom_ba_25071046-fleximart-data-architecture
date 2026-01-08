# FlexiMart Data Architecture Project

**Student Name:** Sai Sneha Matta  
**Student ID:** bitsom_ba_25071046
**Email:**omkaram.matta@gmail.com
**Date:** 7/1/26

---

## Project Overview

The FlexiMart Data Architecture Project implements an end-to-end data solution covering transactional data processing, NoSQL data modeling, and analytical data warehousing. The project includes building an ETL pipeline for cleaning and loading raw data into a relational database, implementing MongoDB for flexible product catalog storage and designing a star schema data warehouse with OLAP analytics to support business decision making.

---

## Repository Structure

├── part1-database-etl/
│ ├── etl_pipeline.py
│ ├── schema_documentation.md
│ ├── business_queries.sql
│ └── data_quality_report.txt
├── part2-nosql/
│ ├── nosql_analysis.md
│ ├── mongodb_operations.js
│ └── products_catalog.json
├── part3-datawarehouse/
│ ├── star_schema_design.md
│ ├── warehouse_schema.sql
│ ├── warehouse_data.sql
│ └── analytics_queries.sql
└── README.md


---

## Technologies Used

- **Python 3.x** (pandas, SQLAlchemy)
- **MySQL 8.0**
- **MongoDB 6.0**
- **SQL (DDL, DML, OLAP Queries)**

---

## Setup Instructions

### Database Setup (MySQL)

```bash
# Create databases
mysql -u root -p -e "CREATE DATABASE fleximart;"
mysql -u root -p -e "CREATE DATABASE fleximart_dw;"

# Run Part 1 - ETL Pipeline
python part1-database-etl/etl_pipeline.py

# Run Part 1 - Business Queries
mysql -u root -p fleximart < part1-database-etl/business_queries.sql

# Run Part 3 - Data Warehouse Schema
mysql -u root -p fleximart_dw < part3-datawarehouse/warehouse_schema.sql

# Load Data Warehouse Data
mysql -u root -p fleximart_dw < part3-datawarehouse/warehouse_data.sql

# Run OLAP Analytics Queries
mysql -u root -p fleximart_dw < part3-datawarehouse/analytics_queries.sql

### MongoDB Setup

mongosh < part2-nosql/mongodb_operations.js

## Key Learnings

This project helped me understand how critical data quality is in real-world systems. I learned that even small issues such as missing emails, inconsistent phone number formats, or invalid dates can break an entire pipeline if not handled carefully. Building my first end-to-end ETL pipeline taught me the importance of writing precise and well-structured code, as even minor mistakes in logic or data types can cause failures during database loading. I also gained practical experience in integrating Python with SQL databases and realized how essential it is to validate data at every stage before moving to the next step in the pipeline.

## Challenges Faced

1. **Connecting Python with MySQL and managing dependencies**  
   One of the main challenges was establishing a reliable connection between Python and the MySQL database. This involved installing and configuring multiple Python packages such as SQLAlchemy and database connectors, handling authentication issues, and resolving environment-related errors. These challenges were overcome by carefully setting up the environment and validating the database connection step by step.

2. **Handling missing and inconsistent data in raw files**  
   The raw datasets contained missing emails, inconsistent phone number formats, and invalid or inconsistent date values. These issues caused errors during data loading and required thoughtful handling using data cleaning techniques such as generating placeholder emails, standardizing phone numbers, converting date formats, and removing invalid records. Addressing these challenges highlighted the importance of accurate data preprocessing in ETL workflows.




