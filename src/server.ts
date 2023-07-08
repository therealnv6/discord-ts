import { Channel } from "./channel";

const channel: Channel = new Channel("1126927273543602351");

channel.fetch();
channel.sendMessage("test")
  .then((response) => console.log(`successfully sent with reply: ${response}`))
  .catch((err) => console.log(`unable to send message, ${err}`));
