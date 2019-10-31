SELECT age, COUNT( * ) AS total_people FROM people GROUP BY age HAVING COUNT( * ) >= 10;

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>

select age, count(*) as total_people
from people
group by age
having count(*) >= 10

2. ======>

SELECT age AS age,
  count(id) AS total_people
FROM people
GROUP BY age
HAVING count(id) >= 10;

3. ======>
*/