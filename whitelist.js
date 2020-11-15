
const Discord = require(`discord.js`);
const prefix = ("!")


exports.run = async (client, message, args) => {

    const embe = new Discord.MessageEmbed()
        .setTitle('SISTEMA DE WHITELIST NEXUS ROLEPLAY')
        .setDescription('Olá seja bem-vindo(a) ao Nexus Roleplay,para você continuar sua whitelist,olhe o privado e veja a mensagem que nosso bot,de whitelist lhe enviou.')
        .setColor('#ffff00')
        .setThumbnail('https://cdn.discordapp.com/attachments/711380328102756444/776756495290466314/1605136709300.jpeg')
        .setTimestamp()
        .setFooter('🌴Nexus Roleplay | ©Todos os direitos reservados.')

    await message.author.createDM()
    message.delete()
    message.channel.send(embe)
    const embed = new Discord.MessageEmbed()
        .setAuthor('WHITELIST NEXUS ROLEPLAY', client.user.avatarURL())
        .setDescription('➡️Olá,vamos fazer sua WHITELIST, explique ela de forma clara e obvia. \n \n  📌 Para começar Fazer sua WHITELIST digite \`iniciar`\, não será tolerado brincadeiras com este comando, caso acontecer será punido sem aviso prévio,caso queira cancelar a whitelist,digite ``cancelar``.')
        .setColor('#ffff00')
        .setThumbnail('https://cdn.discordapp.com/attachments/711380328102756444/776756495290466314/1605136709300.jpeg')
        .setTimestamp()
        .setFooter('🌴Nexus Roleplay | ©Todos os direitos reservados.')
    message.author.send(embed)

    var main = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, {
        time: 100000 * 50,
        max: 1
    })

    main.on('collect', a => {

        const pergun1 = new Discord.MessageEmbed()
            .setColor("#ffff00")
            .setDescription(`**➡️ - QUAL SEU NOME NO DISCORD?** `) /*Pergunta 1*/
            .setThumbnail('https://cdn.discordapp.com/attachments/711380328102756444/776756495290466314/1605136709300.jpeg')

        if (a.content.toLowerCase() === "cancelar") return message.author.send('Whitelist cancelada.');
        if (a.content.toLowerCase() === "iniciar") message.author.send(pergun1)

        var prg2 = message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id, {
            time: 100000 * 50,
            max: 1
        })

        prg2.on('collect', b => {
            if (b.content.toLowerCase() === "cancelar") return message.author.send('Whitelist cancelada');
            let n1 = b.content
            const pergun2 = new Discord.MessageEmbed()
                .setColor("#ffff00")
                .setDescription(`**➡️ - QUAL SUA GAMERTAG DO XBOX LIVE?**`) /*Pergunta 2*/
                .setThumbnail('https://cdn.discordapp.com/attachments/711380328102756444/776756495290466314/1605136709300.jpeg')
            message.author.send(pergun2)

            var prg28 = message.author.dmChannel.createMessageCollector(f => f.author.id == message.author.id, {
                time: 100000 * 50,
                max: 1
            })

            prg28.on('collect', f => {
                if (b.content.toLowerCase() === "cancelar") return message.author.send('Whitelist cancelada');
                let n3 = f.content
                const pergun3 = new Discord.MessageEmbed()
                    .setColor("#ffff00")
                    .setDescription(`**➡️ - O QUE É TER AMOR A VIDA?**`) /*Pergunta 3*/
                    .setThumbnail('https://cdn.discordapp.com/attachments/711380328102756444/776756495290466314/1605136709300.jpeg')
                message.author.send(pergun3)

                var prg27 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
                    time: 100000 * 50,
                    max: 1
                })

                prg27.on('collect', b => {
                    if (b.content.toLowerCase() === "cancelar") return message.author.send('Whitelist cancelada');
                    let n4 = b.content
                    const pergun2 = new Discord.MessageEmbed()
                        .setColor("#ffff00")
                        .setDescription(`**➡️ - CRIE UMA HISTORIA PARA O SEU PERSONAGEM:**`) /*Pergunta 4*/
                        .setThumbnail('https://cdn.discordapp.com/attachments/711380328102756444/776756495290466314/1605136709300.jpeg')
                    message.author.send(pergun2)
        
                    var prg28 = message.author.dmChannel.createMessageCollector(f => f.author.id == message.author.id, {
                        time: 100000 * 50,
                        max: 1
                    })
        
                    prg28.on('collect', f => {
                        if (b.content.toLowerCase() === "cancelar") return message.author.send('Whitelist cancelada');
                        let n5 = f.content
                        const pergun3 = new Discord.MessageEmbed()
                            .setColor("#ffff00")
                            .setDescription(`**➡️ - O QUE É RDM,METAGAMING,POWERGAMING,VDM E COMBAT LOG?**`) /*Pergunta 5*/
                            .setThumbnail('https://cdn.discordapp.com/attachments/711380328102756444/776756495290466314/1605136709300.jpeg')
                        message.author.send(pergun3)
        
                        var fim = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
                            time: 100000 * 50,
                            max: 1
                        })                    

                fim.on('collect', c => {
                    let n2 = c.content
                    const pergun3 = new Discord.MessageEmbed()
                        .setColor("#ffff00")
                        .setDescription(`**Sua WHITELIST foi enviada com sucesso aguarde algum staff analisar se você for aprovado,aparecerá no chat: <#775671230446698497>**`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/711380328102756444/776756495290466314/1605136709300.jpeg')
                    message.author.send(pergun3)

                    const avaliacao = new Discord.MessageEmbed()
                        .setTitle("**WHITELIST NOVA**")
                        .setColor("#ffff00")
                        .setDescription(`**NOME NO DISCORD:**\`\`\`${n1}\`\`\` \n**GAMERTAG XBOX LIVE:** \`\`\`${n3}\`\`\` \n**O QUE É TER AMOR A VIDA:** \`\`\`${n4}\`\`\` \n**O QUE É RDM,METAGAMING,POWERGAMING,VDM E COMBAT LOG:**\`\`\`${n2}\`\`\` \n**HISTORIA DO PERSONAGEM:**\`\`\`${n5}\`\`\``)
                        .setThumbnail("https://cdn.discordapp.com/attachments/711380328102756444/776756495290466314/1605136709300.jpeg")
                        .setFooter('Nexus Roleplay Xbox One ® | © Todos os direitos reservados.')
                        client.channels.cache.get('775671384319852554').send("Nova Whitelist Recebida<@&775671059596836904>")
                    client.channels.cache.get('776770770994331658').send(avaliacao).then(async msg => {
                    });
                });
            });
        });
    });
});
});
};
exports.help = {
    name: "white"
}
