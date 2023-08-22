# astro-toml

This is a very simple Astro Integration to allow you to use TOML files as `data` collections.

## Quick Installation

```sh
# global
astro add astro-toml
# or npm
npx astro add astro-toml
# or yarn
yarn dlx astro add astro-toml
# or pnpm
pnpm dlx astro add astro-toml
```

## Manual Installation

First, install the `astro-toml` package using your package manager.

```sh
# or npm
npm install astro-toml
# or yarn
yarn add astro-toml
# or pnpm
pnpm add astro-toml
```

Next, add the integration to your `astro.config.*` file. There is currently no set of configuration options.

```
import { defineConfig } from 'astro/config';
import toml from 'astro-toml';

export default defineConfig({
  // ...
  integrations: [toml()],
});
```

## Usage

TOML files can only be used within content collections of the `data` type. Add entries to any content collection using the .toml extension:

```
src/content/toml/
  data-1.toml
  data-2.toml
```

Define a collection and its schema in your `content/config.ts` file.

```typescript
import { z, defineCollection } from "astro:content";

const tomlCollection = defineCollection({
  // MUST BE 'data'. 'content' will not work.
  type: "data",
  // Schema must match what is in your TOML files.
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  // ...
  toml: tomlCollection,
};
```

```astro
---
import { getEntryBySlug } from 'astro:content';

const entry = await getEntryBySlug('toml', 'data-1');
---

<!--Access frontmatter properties with `data`-->
<h1>{entry.data.title}</h1>
```

## Contributing

Feel free to create Issues or PRs for bugs or new functionality.

This project uses [PNPM](https://pnpm.io/).

## License

Copyright 2023 Chris Griffing

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
