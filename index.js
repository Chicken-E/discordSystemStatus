const client = require('discord-rich-presence')('729060786755862560');
const os = require("os");
const utils = require("os-utils");

const started = Date.now()

function setStatus() {
	let cpus = os.cpus();
	let speed = (cpus[0].speed/1000).toFixed(1);
	utils.cpuUsage((avgLoad)=>{
		console.log("updated")
		client.updatePresence({
			details: "Cpu: " + (avgLoad*100).toFixed(1) + "% | " + cpus.length + " C @ " + speed + "GHz",
			state: "Ram: " + ((os.totalmem()-os.freemem())/1024/1024/1024).toFixed(1) + "GB / " + (os.totalmem()/1024/1024/1024).toFixed(1) + "GB",
			 largeImageKey: "gaming",
			 startTimestamp: started
		});
	})
};

setStatus();
setInterval(setStatus, 30000);