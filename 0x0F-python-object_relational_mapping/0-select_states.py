#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == "__main__":
    # Check if all three arguments are provided
    if len(sys.argv) != 4:
        print("Usage: {} username password database".format(sys.argv[0]))
        sys.exit(1)

    # Extracting arguments
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    # Connecting to MySQL server
    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=username,
        passwd=password,
        db=database
    )

    # Creating a cursor object
    cursor = db.cursor()

    # Executing the query to select states
    cursor.execute("SELECT * FROM states ORDER BY id ASC")

    # Fetching all rows from the result
    rows = cursor.fetchall()

    # Displaying results
    for row in rows:
        print(row)

    # Closing database connection
    cursor.close()
    db.close()

