var DRPC = require("discord-rpc");

var rpc = new DRPC.Client({ transport: "ipc" });

rpc.on("ready", _ =>
	rpc.setActivity({
		details: "Hosting Service",
		state: "Game Servers, VPS, Web, etc.",
		largeImageKey: "logotxt",
		smallImageKey: "logot"
	})
);

rpc.login({ clientId: "810460810434445332"}).catch(console.error);