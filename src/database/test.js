const Database = require('./db');
const saveStartup = require('./saveStartup');

Database.then(async db => {

    // inserir dados na tabela 
    await saveStartup(db, {
        lat: "-3.1306426",
        lng: "-60.0336332",
        name: "Startup 2",
        about: "Tecnologia e inovação sempre acompanhando as necessidades da população.",
        whatsapp: "9992949343",
        images: [
            "https://images.unsplash.com/photo-1623726564529-f07ede3b34be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjUyNjY1MDYw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            
            "https://images.unsplash.com/photo-1625027589046-5ee9ce8a974f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjUyNjY1MTIz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        ].toString(),
        instruction: "Conheça",
        opening_hours: "Horários de funcionamento Das 8h sté 18h",
        open_on_weekends: "1"
        
    },)
    // consultar dados da tabela
    const selectedStartups = await db.all("SELECT * FROM startups")
    console.log(selectedStartups)

    // consultar somente 1 startup, pelo id
    const startup = await db.all('SELECT * FROM startups WHERE id = "3"')
    console.log(startup)

    // deletar dado da tabela
    /* console.log(await db.run("DELETE FROM startups WHERE id = '5'")) */
})