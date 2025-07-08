SELECT 
	th.id, 
  	th.heads, 
  	bh.legs, 
  	th.arms, 
  	bh.tails, 
  	CASE
    	WHEN th.heads > th.arms 
    	THEN 'BEAST' 
    	ELSE 'WEIRDO'
  	END species
FROM top_half th
JOIN bottom_half bh
ON th.id = bh.id
ORDER BY 6 DESC;
