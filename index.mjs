import { Client as RevoltClient } from "revolt.js";
import { Client as DiscordClient, Intents } from "discord.js";
import dotenv from "dotenv"
dotenv.config()

let revoltClient = new RevoltClient();
let discordClient = new DiscordClient({intents: [Intents.FLAGS.DIRECT_MESSAGES]});


revoltClient.login({email: process.env.REVOLT_EMAIL, password: process.env.REVOLT_PASSWORD})
discordClient.login(process.env.DISCORD_TOKEN)