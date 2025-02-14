# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (100 points)

| Requirement                                           | Points |     |
| ----------------------------------------------------- | ------ | --- |
| DB                                                    |        |     |
| - neondb created                                      | 10     | 10  |
| Routes                                                |        |     |
| - api CRUD endpoints added for orders                 | 10     | 10  |
| Server                                                |        |     |
| - sequelize or mongo dependencies added               | 10     | 10  |
| - successfully connect to db                          | 10     | 10  |
| Create Database Objects Definitions                   |        |     |
| - User                                                | 10     | 10  |
| - Product                                             | 10     | 10  |
| - Order                                               | 10     | 10  |
| Change your service classes use your Database objects |        |     |
| - User                                                | 10     | 7   |
| - Product                                             | 10     | 7   |
| - Order                                               | 10     | 8   |

## Total Score: 100 / 100

Excellent work here Serge! couple of small things. change the user routes to use
/users in path the same way you did for products. The other thing is that you do the db work in the routes instead of a service. This is not neccesaarily wrong but separating the work is better practice.

So take off 10 for the nit picky stuff and take your bonus and you get 100. Well done.

10 PT BONUS for adding relationships applied to any assignment.
