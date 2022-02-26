const AsicContract = require('../DBSchemas')._AsicContract

exports.getAsicsContract = async id =>{
    try{
        return await AsicContract.find({userID:id})
    }catch(error){
        console.log(error)
    }
}
exports.addAsicContract = async (data) =>{
    try{
        let nasicContract = new AsicContract(data)
        let asicContractSaved = await nasicContract.save()
        return asicContractSaved
    }catch(error){
        console.log(error)
    }
}

exports.updateAsicContract = async (id,data)=>{
    try {
        await AsicContract.findByIdAndUpdate(id,data)
    } catch (error) {
        console.log(error)
    }
}


// exports.ContractSTATUSon = async id =>{
//     await AsicContract.findByIdAndUpdate(id,{asicStatus:true})
// }
// exports.ContractEXPIRATIONon = async id =>{
//     await AsicContract.findByIdAndUpdate(id,{expired:true})
// }