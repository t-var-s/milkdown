export default"# Prose\n\n[Prosemirror](https://prosemirror.net/) needs its core packages to be the same version.\n\nSo [@milkdown/prose](https://www.npmjs.com/package/@milkdown/prose) package is provided to combine core packages of milkdown.\n\nCombined packages:\n\n-   [prosemirror-model](https://www.npmjs.com/package/prosemirror-model)\n-   [prosemirror-state](https://www.npmjs.com/package/prosemirror-state)\n-   [prosemirror-view](https://www.npmjs.com/package/prosemirror-view)\n-   [prosemirror-transform](https://www.npmjs.com/package/prosemirror-transform)\n-   [prosemirror-commands](https://www.npmjs.com/package/prosemirror-commands)\n-   [prosemirror-inputrules](https://www.npmjs.com/package/prosemirror-inputrules)\n-   [prosemirror-keymap](https://www.npmjs.com/package/prosemirror-keymap)\n\nUsers can access their API through `@milkdown/prose`, for example:\n\n```typescript\nimport { EditorState, Node, Mark, Selection } from '@milkdown/prose';\n```\n";