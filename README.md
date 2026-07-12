# CharlieCut

A free and open source video editor for web, desktop, and mobile.

[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat)](LICENSE)

## Status

**CharlieCut is being built from the ground up.** What's coming:

- An Editor API
- First-class third party plugins (made possible by a plugin-first architecture)
- Desktop, mobile, and browser from one codebase (Rust core)
- MCP server (for AI agents)
- Headless mode (automation, batch rendering)
- A scripting tab directly in the editor

## Development

Install [proto](https://moonrepo.dev/proto) if you haven't already:

```sh
bash <(curl -fsSL https://moonrepo.dev/install/proto.sh)
```

From the repo root:

```sh
proto use    # installs the tools pinned in .prototools
```

```sh
moon run web:dev       # localhost:5173
moon run api:dev       # localhost:8787
moon run desktop:dev   # see apps/desktop/README.md
```

## Contributing

We're not set up to take outside contributions yet while the architecture is being designed. If you want to follow along or ask questions, [open an issue](https://github.com/fabwinter/CharlieCut/issues).

## License

[MIT](LICENSE)
