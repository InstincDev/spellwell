const Character = require('../models/Characters')

module.exports = {
     goToGreatHall: async (req,res) => {
        try{
            const charData = await Character.find()
            
            res.render('great_hall', {charData})
        }catch (err) {
            console.log(err)
        }
     }
}

