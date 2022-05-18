function saveStartup(db, startup) {
  return db.run(`
        INSERT INTO startups (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instruction,
            opening_hours,
            open_on_weekends
        ) VALUES(
            "${startup.lat}",
            "${startup.lng}",
            "${startup.name}",
            "${startup.about}",
            "${startup.whatsapp}",
            "${startup.images}",
            "${startup.instruction}",
            "${startup.opening_hours}",
            "${startup.open_on_weekends}"
        );
    `);
}

module.exports = saveStartup;
