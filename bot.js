// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./configuration/config.json')

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
    console.log(`Ready! Logged in as ${c.user.id}`)
    console.log(`Ready! Logged in as ${c.user.username}`)
    console.log(`Ready! Logged in as ${c.user.username}`)
    console.log(`Ready! Logged in as ${c.user.username}`)
});

// Log in to Discord with token
client.login(token);