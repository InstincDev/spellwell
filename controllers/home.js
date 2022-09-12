module.exports = {
    getLandingPg: (req, res)=>{
       try{
            res.render('index', {layout: "./layouts/landing"})
       } catch (err){
            console.error(err)
       }
        
    },
    getAddPersonForm: (req, res)=>{
     try{
         res.render('add_person')
     } catch (err){
         console.error(err)
         res.render('errors/404')
     }
 },
 getAddRoomForm: (req, res)=>{
    try{
        res.render('add_room')
    } catch (err){
        console.error(err)
        res.render('errors/404')
    }
},
}