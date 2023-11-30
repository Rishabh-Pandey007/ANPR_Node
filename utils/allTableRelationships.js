const path = require('path');

const sequelize = require('./dbConnection');
const Models = require('./allModels');
console.log('lol');

const allTableRelationships = async () => {
             
    //  Defing Relations between Tables   

    // spot and logs relation
    Models.Spot_Model.hasMany(Models.Logs_Model);
    Models.Logs_Model.belongsTo(Models.Spot_Model);

    
 /******Syncing models with database ******/
 try {

    await sequelize.sync();
    console.log('Set Relation Sync Database') 
    
} catch(err) { console.log(err); }
                               

}//End of method

module.exports = allTableRelationships();