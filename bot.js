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
لمعرفه اوامر البوت======+help
لعمل برودكاست ======+bc
**`);
    }
});

const db = require('quick.db');
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "pre")) {
       let args = message.content.split(" ").slice(1);
let fetched = await db.fetch(`prefix_${message.guild.id}`);
if (fetched === null) prefix = '+';
else prefix = fetched;
 


if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '402866255838576652') return message.channel.send('Sorry, you don\'t have permission to change server prefix')
    .then(msg => msg.delete({
        timeout: 10000
    }));

if (!args.join(' ')) return message.channel.send('Please provide a prefix to change server prefix')
    .then(msg => msg.delete({
        timeout: 10000
    }));
    

db.set(`prefix_${message.guild.id}`, args.join(' '))
    .then(i => {
    
    message.channel.sendMessage("", {embed: {
      title: "Prefix Set!",
      color: 0x06DF00,
      description: `Set to ${i}`,
     
    }})
    })
       }
    
       });




client.login("NDYzNjQzOTcyMTQ1OTA1Njk1.Dh6f2g.BxeAvuQ41QCUFb-N93QpkCuksJk");
