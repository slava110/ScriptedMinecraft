const minecraft = Polyglot.import("mc");

//Item pickup event
minecraft.on("itemPickup", ev => {
    // Send item id to the chat
    ev.player.message("Picked up! " + ev.entityItem.item.id);
});

//EntityLiving is dead
minecraft.on("livingDeath", ev => {
    // entity.simpleName will return classname
    if(ev.entity.simpleName == "EntityPlayer" || ev.entity.simpleName == "EntityPlayerMP"){
        ev.entity.message("Killed by player!");
    }
});