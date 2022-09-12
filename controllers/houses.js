const { escapeXML } = require('ejs')
const Character = require('../models/Characters')

module.exports = {
    getPerson: async (req, res) => {
        try{
            let person = await Character.findById(req.params.id).lean() 
            if(!person){
                return res.render('errors/404')
            } 
            res.render('houses/person',{person})
        } catch (err){
              console.error(err)
              res.render('errors/404')
        }
      
  },
   
    addPerson: async (req, res) => {
        try {
            await Character.create(req.body)
            console.log('Person has been added!')
            res.redirect("/great_hall");
        } catch (err) {
            console.error(err);
            res.render("errors/500");
        }
    },

    getCommonRoom: async (req, res) => {
        try{
            
            let charData = await Character.find({house: req.params.house}).lean() 
            
            if(!charData){
                return res.render('errors/404')
            } 
            res.render('houses/common_room',{charData, room: req.params.house})
        } catch (err){
              console.error(err)
              res.render('errors/404')
        }
      
  }
}