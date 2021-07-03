const { query } = require('express');
var express = require('express');
const router = express.Router();

function getoffice(req,res){
    let sql = `call v1_0_2_u_getoffices()`; 
    
    db.query(sql,true,(err,results)=>{
        if(err){
            console.log(err);
            res.send({state:"400",msg:"Error in database operation !!"})
        } else{

            console.log(results);
            res.send({status:"200",data:results[0]});
        }
        
        
    });
}

// veiw all office
router.get('/viewoffice',getoffice);

//add office page load
router.get('/addoffice',(req,res)=>{
    res.render('pages/addoffice')
});

//form data add office
router.post('/addFormOffice',(req,res)=>{
    console.log(req.body);
    let officeCode = req.body.officeCode;
    let officeName = req.body.officeName;
    let city = req.body.city;
    let phone = req.body.phonenumber;
    let address = req.body.address;
    let street = req.body.street;
    let country = req.body.country;
    let postalCode = req.body.postalcode;

    let sql = `call v1_0_2_u_addoffice(?,?,?,?,?,?,?,?)`

    db.query(sql,[officeCode,officeName,city,phone,address,street,country,postalCode],(err,results)=>{
        if(err){
            console.log(err)
            res.send({state:"400",msg:"Error in database operation !!"});
        } else {
           res.send({state:"200",msg:"Employee Data Successfully Added!!"});
        }
    });
});


module.exports = router;
