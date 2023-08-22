import type { AstroIntegration, DataEntryType, HookParameters } from "astro";
import * as TOML from "@iarna/toml";

type SetupHookParams = HookParameters<"astro:config:setup"> & {
  addDataEntryType: (dataEntryType: DataEntryType) => void;
};

export default function createIntegration(): AstroIntegration {
  return {
    name: "astro-toml",
    hooks: {
      "astro:config:setup": (params) => {
        const { addDataEntryType } = params as SetupHookParams;

        addDataEntryType({
          extensions: [".toml"],
          getEntryInfo: ({ contents }: { fileUrl: URL; contents: string }) => {
            const data = TOML.parse(contents);
            return {
              data,
              rawData: contents,
            };
          },
        });
      },
    },
  };
}
