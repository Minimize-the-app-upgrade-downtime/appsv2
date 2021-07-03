const express = require('express');
const router = express.Router();



router.get('/viewepf',(req,res)=>{

    let sql = `call v1_0_2_u_viewepf()`;

    db.query(sql,true,(err,results)=>{
        if(err){
            console.log(err);
            res.send({state:"400",msg:"Error in database operation !!"})
        } else{

            console.log(results);
            res.send({status:"200",data:results[0]});
        }
        
        
    });

    
});

router.get('/addepf',(req,res)=>{

    let sql =  `SELECT employeeNumber,CONCAT(firstName,' ',lastName,' - ', employeeNumber)  AS name FROM employees`;

    db.query(sql,(err,results)=>{
        if (err){
            console.log(err)
            res.send({state:"400",msg:"Error in database operation !!"});
          } else {
            console.log(results)
            res.send({status:"200",data:results});
          }
    });
});


router.post('/epfaddform',(req,res)=>{
    const obj = JSON.parse(JSON.stringify(req.body)); 
    console.log(obj);
    let employeeNumber = obj.employeeNumber;
    let epfcode = obj.epfcode;
    let salary = obj.salary;
    let date = obj.month;

    let sql = `call v1_0_2_u_addepf(?,?,?,?)`;

    db.query(sql,[employeeNumber,epfcode,salary,date],
        (err,results)=>{
            if (err){
              console.log(err)
              res.send({state:"400",msg:"Error in database operation !!"});
            } else {
              res.send({state:"200",msg:"Employee Data Successfully Added!!"});
            }
        } 
    );

});

module.exports = router;