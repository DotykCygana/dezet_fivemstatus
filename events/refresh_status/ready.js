const Discord = require('discord.js');
const config = require("../../config.json")
const request = require("request")

exports.run = async (client) => {


    const url = `http://${config.ip}/players.json`
    const kanal = client.channels.cache.get(config.id_kanal)
    
    setInterval( async () => {
     await request({
            url: url,
        }, function (error, response, body) {   




            const players = JSON.parse(body)
        
     
            /// STATUS NA KANALE v       
            kanal.setName(`Graczy Online: ${players.length} / ${config.maxsloty}`).catch(err => console.log(`Coś poszło nie tak! Sprawdź czy bot posiada permisje administratora!`));
            ///

            /// STATUS W AKTYWNOŚCI BOTA
            client.user.setActivity(`${players.length} / ${config.maxsloty} Graczy Online!`, {type: "WATCHING"})
            ///
            
        })



    }, 10000)
////





};