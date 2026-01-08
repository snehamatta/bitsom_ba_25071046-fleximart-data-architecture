FlexiMart ETL Data Quality Report
--------------------------------

File: customers_raw.csv
Records processed: 25
Duplicate records removed: 3
Missing values handled:
- Missing emails filled with generated placeholders
- Missing phone numbers set to NULL
Records loaded successfully: 22

File: products_raw.csv
Records processed: 18
Duplicate records removed: 2
Missing values handled:
- Missing prices filled using category-based defaults
- Null stock values replaced with 0
Records loaded successfully: 16

File: sales_raw.csv
Records processed: 35
Duplicate transactions removed: 4
Missing values handled:
- Invalid dates converted to standard YYYY-MM-DD format
- Records with missing customer_id or product_id removed
Records loaded successfully: 31

Overall Summary
---------------
Total files processed: 3
Total records processed: 78
Total duplicates removed: 9
Total records loaded into database: 69

ETL Status: SUCCESS
