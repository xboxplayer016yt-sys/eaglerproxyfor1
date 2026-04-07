// This folder contains options for both the bridge and networking adapter.
// Environment files and .env files are available here. Set the value of any config option to process.env.<ENV name>

import { Config } from "./launcher_types.js";

export const config: Config = {
  bridge: {
    enabled: true,
    motd: null,
  },
  adapter: {
    name: "EaglerProxy",
    bindHost: "0.0.0.0",
    bindPort: 10000,
    maxConcurrentClients: 20,
    skinUrlWhitelist: undefined,
    motd: true
      ? "FORWARD"
      : {
          iconURL: "logo.png",
          l1: "yes",
          l2: "no",
        },
    origins: {
      allowOfflineDownloads: true,
      originWhitelist: null,
      originBlacklist: null,
    },
    server: {
      host: "192.168.1.137",
      port: 25565,
    },
    tls: undefined,
  },
};
