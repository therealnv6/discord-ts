import { OBJECT_MAPPER } from "./util";
import { JsonProperty } from "jackson-js";
import axios, { AxiosResponse } from "axios";

export class Channel {
  @JsonProperty()
  name: string = "";

  @JsonProperty()
  id: string = "";

  @JsonProperty()
  topic: string = "";

  @JsonProperty()
  position: number = 0;

  @JsonProperty()
  nsfw: boolean = false;

  @JsonProperty({ value: "parent_id" })
  parentId: string = "";

  @JsonProperty()
  type: number = 0;

  @JsonProperty()
  flags: number = 0;

  @JsonProperty({ value: "last_message_id" })
  lastMessageId: number = 0;

  @JsonProperty({ value: "rate_limit_per_user" })
  rateLimitPerUser: number = 0;

  @JsonProperty({ value: "guild_id" })
  guildId: string = "";

  @JsonProperty({ value: "permission_overwrites" })
  permissionOverwrites: [string] = [""];

  public constructor();
  public constructor(channelId: string);

  constructor(channelId?: string) {
    if (channelId) {
      this.id = channelId;
    }
  }

  async fetch() {
    if (!this.id) {
      throw new Error("unable to infer id, as it hasn't been set!");
    }

    let response = await axios.get(`/channels/${this.id}`);
    let json = response.data;

    this.fromJSON(json);
  }

  async sendMessage(content: string): Promise<AxiosResponse> {
    return axios.post(`/channels/${this.id}/messages`, {
      content,
    });
  }

  fromJSON(json: any) {
    Object.assign(
      this,
      OBJECT_MAPPER.parse<Channel>(JSON.stringify(json), {
        mainCreator: () => [Channel],
      }),
    );
  }
}
