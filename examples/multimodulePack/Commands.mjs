const Command = Polyglot.import("command");
const TextComponentString = Polyglot.import("textComponentString");

const cmd = new Command("testing")
        .setAliases(["test", "tst"])
        .onPermissionCheck((server, sender) => {
            return sender.senderType.isCommandBlock();
        })
        .onExecute((server, block, args) => {
            server.broadcast("Testing server say");
            block.message("Yay! Message!");
            block.message(new TextComponentString("Green message!")
                    .setColor("dark_green")
                    .setBold()
            );
            block.message("Args: " + args.join(", "));
            block.name = "My new name";
            block.command = "/say Replaced!";
            block.executeCommand();
        })
        .register();