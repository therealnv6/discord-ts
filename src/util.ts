require("dotenv").config();

import axios from "axios";
import { ObjectMapper } from "jackson-js";

export const TOKEN = process.env.DISCORD_TOKEN;
export const OBJECT_MAPPER = new ObjectMapper();

axios.defaults.baseURL = "https://discord.com/api/v9";
axios.defaults.headers.common["Authorization"] = `Bot ${TOKEN}`;
