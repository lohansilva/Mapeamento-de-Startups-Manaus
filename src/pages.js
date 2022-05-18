const Database = require('./database/db')
const saveStartup = require('./database/saveStartup')

module.exports = {

    index(request, response){
        return response.render('index')
    }, 

    async startup(request, response){

        const id = request.query.id

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM startups WHERE id = "${id}"`)
            const startup = results[0]

            startup.images = startup.images.split(",")
            startup.firstImage = startup.images[0]

            if(startup.open_on_weekends == "0"){
                startup.open_on_weekends = false
            } else {
                startup.open_on_weekends = true
            }

            return response.render('startup', {startup})
        }
        catch (error){
            console.log(error)
            return response.send('Erro no banco de dados')
        }
    },

    async startups(request, response){

        try {
            const db = await Database;
            const startups = await db.all("SELECT * FROM startups")
            return response.render('startups', { startups })
        }
        catch (error){
            console.log(error)
            return response.send('Erro no banco de dados')
        }
        
    },

    createStartup(request, response){
        return response.render('create-startup')
    },

    async saveStartup(request, response) {
        const fields = request.body

        // validar se todos os campos estao preenchidos
        if(Object.values(fields).includes('')) {
            return response.send('Todos os campos devem ser preenchidos!')
        }

        try{
            //salvar uma startup
            const db = await Database
            await saveStartup(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instruction: fields.instruction,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })

            //redirecionamneto
            return response.redirect('/startups')
        } catch(error){
            console.log(error)
            return response.send('Erro no banco de dados!')
        }
    }
}