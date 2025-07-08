SELECT 
  	p.id, 
  	p.name, 
  	COUNT(s.id) sale_count,
  	RANK() OVER (ORDER BY COUNT(s.id) DESC) sale_rank
FROM people p
JOIN sales s
ON p.id = s.people_id
GROUP BY 1, 2
ORDER BY 3 DESC;