const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : TAHSEEN`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : TAHSEEN ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.on('message', message => {
  if(message.content.startsWith ('+help')) {
      if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setColor('#044812')
          .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
 
    .setDescription(`**[ تــــــــم الارســــال بالخـــــــاص ]** `)
        message.channel.send()
 
message.channel.sendEmbed(embed)
}
});
 
client.on('message', message => {
     if (message.content === "+help") {
message.author.send(`  **
{ +help } لمعرفه اوامر البوت
{ +id } لمعرفه معلومات حسابك
{ +bc } لعمل برودكاست ل جميع اعضاء السيرفر
**`);
    }
});


client.on('message', message => {
   if (message.content === "+id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});



client.login("NDYzNjQzOTcyMTQ1OTA1Njk1.Dh6f2g.BxeAvuQ41QCUFb-N93QpkCuksJk");
