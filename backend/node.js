import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
const { Pool } = pg;









let todo = express();
todo.use(bodyParser.json());
todo.use(cors());

todo.get("/", async (req, res) => {
  let pool = new Pool({
    database: "work",
    user: "postgres",
    host: "localhost",
    password: "lasha2003",
    port: 5432,
    
  
  });
  let todos = req.body;
  let connect = await pool.connect();

  let resuilt = await connect.query({
    text: `SELECT  * FROM work  `,
  });
  res.json(resuilt.rows);
  
  
});
// todo.post("/", async (req, res, next) => {
//   console.log(req.body);

//   const list = req.body;
//   const client = await pool.connect();
//   const result = await client.query({
//     text: `INSERT INTO work 
//       (info, done) 
//       VALUES($1, $2);`,
//     values: [list.info, list.done],
//   });
//   // let resuilt = await connect.query({
//   //   text: `SELECT  * FROM work  `,
//   // });
//   // res.json(resuilt.rows);
// });

todo.post('/', async (req, res) => {
  let pool = new Pool({
    database: "work",
    user: "postgres",
    host: "localhost",
    password: "lasha2003",
    port: 5432,
    
  
  });
  const list = req.body;
  const client = await pool.connect();
  const result = await client.query({
        text: `INSERT INTO work 
          (info, done) 
          VALUES($1, $2);`,
        values: [list.info, list.done],
      });
  let select = await client.query({
        text: `SELECT * FROM work;`,
      });
      res.json(select.rows)

     
})
todo.delete('/:id', async (req, res) => {
  let pool = new Pool({
    database: "work",
    user: "postgres",
    host: "localhost",
    password: "lasha2003",
    port: 5432,
    
  
  });
  const list1 = req.body;
 
  const client = await pool.connect();
  const result = await client.query({
        text: `DELETE FROM work 
         WHERE id=${req.params.id}
          `,
       
      });
 
  let select1 = await client.query({
        text: `SELECT * FROM work;`,
      });
      res.json(select1.rows)
      
})

todo.listen(4000, () => {
  console.log("server started on port-4000");
});
