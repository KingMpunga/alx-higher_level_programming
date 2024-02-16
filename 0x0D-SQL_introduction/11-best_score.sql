USE hbtn_0c_0;

-- List records with a score >= 10, ordered by score (top first)
SELECT score, name
FROM second_table
WHERE score >= 10
ORDER BY score DESC;
