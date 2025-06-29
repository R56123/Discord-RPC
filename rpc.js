require("dotenv").config(); // ✅ Load .env first

const RPC = require("discord-rpc");
const clientId = process.env.CLIENT_ID; // Loaded from .env

// Set the RPC client
const rpc = new RPC.Client({ transport: "ipc" });

// Set your Rich Presence content
const activity = {
  details: "Building The Club 💻",
  state: "Be The Maestro'",
  startTimestamp: new Date(),
  largeImageKey: "club-logo", // name of image uploaded in Discord Developer Portal (Art Assets)
  largeImageText: "Ramzy",
  buttons: [
    { label: "Join The Club", url: "https://discord.gg/Swcu6jha" },
  ],
};

rpc.on("ready", () => {
  rpc.setActivity(activity);
  console.log("✅ Rich Presence is active!");
});

// Login to RPC
rpc.login({ clientId }).catch(console.error);
