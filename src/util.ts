require("dotenv").config();

import axios from "axios";
import { ObjectMapper } from "jackson-js";

export const TOKEN = process.env.DISCORD_TOKEN;
export const BASE_URL = "https://discord.com/api/v9";

axios.defaults.headers.common["Authorization"] = `Bot ${TOKEN}`;

export const OBJECT_MAPPER = new ObjectMapper();

export function camelize(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
}
