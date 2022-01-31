import { Client as RevoltClient } from "revolt.js";
import { Client as DiscordClient, Intents } from "discord.js";
import dotenv from "dotenv"
dotenv.config()

let revoltClient = new RevoltClient();
let discordClient = new DiscordClient({intents: [Intents.FLAGS.DIRECT_MESSAGES]});

let user

async function getUser() {
    user = await discordClient.user.fetch(process.env.DISCORD_USER)
}

revoltClient.on("ready", async () => {
    console.log("Hello, world!")
})

revoltClient.on("message", async (message) => {
    if (message.channel.channel_type == "DirectMessage" && message.author_id != revoltClient.user._id) {
        console.log(message.content)
        user.createDM().then((dmChannel) => {dmChannel.send(`From: ${message.author.username} \n ${message.content}`)})
    }
    
    
})


revoltClient.loginBot(process.env.REVOLT_TOKEN)
discordClient.login(process.env.DISCORD_TOKEN)

discordClient.users.fetch(process.env.DISCORD_USER).then((result) => {user = result; console.log(user)})
