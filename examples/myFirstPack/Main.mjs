const minecraft = Polyglot.import("mc");
const logger = Polyglot.import("logger");

//Server chat event. Cancel and send message to player
minecraft.on("chat", ev => {
    ev.player.message("You can't send chat messages, sorry!");
	ev.cancel();
});

//Print console message
logger.info("Loaded custom script!");