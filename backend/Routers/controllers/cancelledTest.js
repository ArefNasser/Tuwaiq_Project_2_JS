const{cancelledTest} =require("../dataBase/dbCanceledTest");

const getAllCancelledTest =(req,res)=>{
     console.log('Cancelled Test')
 
    res.send(cancelledTest);
};

const getCancelledTest =(req,res)=>{
    console.log("Inside Cancelled Test")
    console.log(req.params.id);
    const foundcancelledTest = cancelledTest.filter(({nationalId})=>{
        return nationalId == req.params.id
    })
    console.log(foundcancelledTest);
    if(foundcancelledTest.length > 0){
        res.send(foundcancelledTest)
        return
    }
    res.status(404).send("CancelledTest not found")
}

const addNewCancelledTest = (req,res)=>{
    const addedCancelledTest ={

    name:req.body.name,
    centerOfficeLocation:req.body. centerOfficeLocation,
    Date :req.body.Date ,
    CancellationTime:req.body.CancellationTime,
    testTypeMechanism:req.body.testTypeMechanism,
    cancellationRreason:req.body.cancellationRreason,


}
cancelledTest.push(addecancelledTest)

res.status(201).send(addecancelledTest);

}
const updatecancelledTest =(req,res)=>{

    cancelledTest = req.query.id
    cancelledTest.forEach((elem,i)=>{
        if(i == cancelledTest){
            elem.name =req.body.name;
            elem.centerOfficeLocation = req.body.centerOfficeLocation;
            elem. Date=req.body. Date;
            elem.CancellationTime = req.body.CancellationTime;
            elem. testTypeMechanism = req.body.testTypeMechanism;
            elem.cancellationRreason=req.body.cancellationRreason;
            res.send(elem);
        }
    })
}
module.exports ={ getAllCancelledTest, getCancelledTest , addNewCancelledTest,updatecancelledTest }
