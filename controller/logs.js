const models = require('../utils/allModels');
const Sequelize = require('sequelize')
const {Op} = Sequelize;

//Third party
const expressPaginationHelper = require("express-pagination-helper");

exports.getLog = async(req, res, next) =>{

    try {
        
        let { search, inDateRange} = req.query;

          //For pagination
          const page_number = Math.abs(+(req.query.page_number)) || 1;
          const data_per_page = Math.abs(+(req.query.data_per_page)) || 10;
          const offset = (page_number - 1) * data_per_page;

          let whereClause = {}

        //   for search functionality
          if (search) {
            whereClause = {
                [Op.or]: [
                    { vehicleRegistration: { [Op.like]: `%${search}%` } },
                ]
            }
        }

        // for check in date filter
        if (inDateRange && inDateRange != 'undefined,undefined') {
          if (inDateRange.length < 2) return res.status(422).json({ error: "in date range should contain two Dates(start and end)" })
          inDateRange = inDateRange.split(',')
          let range = []
          for (let date of inDateRange) {
              date = new Date(date)
              range.push(date)
          }
          whereClause.eventTimeStamp = { [Op.between]: range }
        };

        let {rows, count} = await models.Logs_Model.findAndCountAll({
            where: whereClause,
            limit: data_per_page,
            offset,
            order: [["eventTimeStamp", "desc"]],
        });

        for(let data of rows){

            //reformating image url        
            data.checkInImage1= data.checkInImage1?`https://${process.env.HOSTNAME}${data.checkInImage1}`: null
            };

        //For pagination
        const pagination = expressPaginationHelper({ req, total_data_count: count, page_number, data_per_page });

        return res.json({ rows, pagination, payload:req.payload });

    } catch (e) {
        console.log(e)
        next(e)
    }
}