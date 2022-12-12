# todoApp

<img  src="https://img.shields.io/badge/React-UI-blue">  <img  src="https://img.shields.io/badge/react--router-Routing-important">  <img  src="https://img.shields.io/badge/Tailwind%20CSS-Styling-blueviolet">

<img  src="https://img.shields.io/badge/Express-Back%20End-blue">  <img  src="https://img.shields.io/badge/MongoDB-Database-yellowgreen">  <img  src="https://img.shields.io/badge/appwrite-auth-red">  

Sample View:-
![image](https://user-images.githubusercontent.com/43786036/206683167-09b14660-41bf-49e2-a639-163280855862.png)

### 1. Create New Todo

```
POST /api/v1/todo
```

Body
```JSON
{
  "title": "Todo1",
  "userId": "12sada3"
}
```

### 2. Fetch all Todos

```
GET /api/v1/todo
```

Body
```JSON
{
  "userId": "12sada3"
}
```

Optional Query Params
|Param| Description|
|-----|------------|
|q|Any search string|
|s|sort order either 'asce' or 'desc'|


### 3. Fetch Unique Todo

```
POST api/v1/todo/:todoId
```
Body
```JSON
{
  "userId": "12sada3"
}
```

### 4. Delete Unique Todo

```
DEL api/v1/todo/:todoId
```

Body
```JSON
{
  "userId": "12sada3"
}
```

### 5. Edit Title

```
PUT api/v1/todo/:todoId
```

Body
```JSON
{
  "title": "new Title",
  "userId": "12sada3"
}
```

### 6. Add Task

```
PUT api/v1/todo/:todoId/task
```

Body
```JSON
{
  "taskName": "Task2",
  "userId": "12sada3"
}
```

### 6. Edit Taskname

```
PUT api/v1/todo/:todoId/task/:taskId
```

Body
```JSON
{
  "taskName": "new Task Name",
  "userId": "12sada3"
}
```


### 4. Delete Unique Task

```
DEL api/v1/todo/:todoId/:taskId
```

Body
```JSON
{
  "userId": "12sada3"
}
```
