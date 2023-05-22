
const { Client, Events, GatewayIntentBits, Partials } = require('discord.js')
const { config } = require('dotenv')

config()

// Create a new client instance
const client = new Client({
  intents: [Object.keys(GatewayIntentBits.Guilds)],
  Partials: [Object.keys(Partials)]

})

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`)
})

// Log in to Discord with your client's token
client.login(process.env.API_KEY)
