export default"# React\n\n我们提供开箱即用的 react 支持。\n\n## 依赖安装\n\n除了 `@milkdown/core`，预设和主题，我们还需要安装 `@milkdown/react`，它提供了让 milkdown 运行在 react 中的能力。\n\n```bash\n# install with npm\nnpm install @milkdown/react @milkdown/core\n\n# optional\nnpm install @milkdown/preset-commonmark @milkdown/theme-nord\n```\n\n## 创建一个组件\n\n创建一个组件十分简单。\n\n```typescript\nimport React from 'react';\nimport { Editor, rootCtx } from '@milkdown/core';\nimport { nord } from '@milkdown/theme-nord';\nimport { ReactEditor, useEditor } from '@milkdown/react';\nimport { commonmark } from '@milkdown/preset-commonmark';\n\nexport const MilkdownEditor: React.FC = () => {\n    const editor = useEditor((root) =>\n        Editor.make()\n            .config((ctx) => {\n                ctx.set(rootCtx, root);\n            })\n            .use(nord)\n            .use(commonmark),\n    );\n\n    return <ReactEditor editor={editor} />;\n};\n```\n\n### 在线示例\n\n!CodeSandBox{milkdown-react-setup-ngkiq?fontsize=14&hidenavigation=1&theme=dark&view=preview}\n\n---\n\n## 自定义节点组件 Component\n\n我们提供开箱即用的自定义组件的支持。\n\n```typescript\nimport React from 'react';\nimport { Editor, rootCtx } from '@milkdown/core';\nimport { ReactEditor, useEditor, useNodeCtx } from '@milkdown/react';\nimport { commonmark, paragraph, image } from '@milkdown/preset-commonmark';\n\nconst CustomParagraph: React.FC = ({ children }) => <div className=\"react-paragraph\">{children}</div>;\n\nconst CustomImage: React.FC = ({ children }) => {\n    const { node } = useNodeCtx();\n\n    return (\n        <img\n            className=\"react-image\"\n            src={node.attrs.src}\n            alt={node.attrs.alt}\n            title={node.attrs.tittle}\n        />;\n    )\n};\n\nexport const MilkdownEditor: React.FC = () => {\n    const editor = useEditor((root, renderReact) => {\n        const nodes = commonmark\n            .configure(paragraph, { view: renderReact(CustomParagraph) })\n            .configure(image, { view: renderReact(CustomImage) });\n\n        return new Editor()\n            .config((ctx) => {\n                ctx.set(rootCtx, root);\n            })\n            .use(nodes);\n    });\n\n    return <ReactEditor editor={editor} />;\n};\n```\n\n`useNodeCtx` 中可以获取到的值：\n\n-   _editor_:\n\n    Milkdown 编辑器的实例。\n\n-   _node_:\n\n    当前需要组件渲染的 prosemirror 节点。\n    等同于 [nodeViews 中的 node 参数](https://prosemirror.net/docs/ref/#view.EditorProps.nodeViews)。\n\n-   _view_:\n\n    当前编辑器的 prosemirror view。\n    等同于 [nodeViews 中的 view 参数](https://prosemirror.net/docs/ref/#view.EditorProps.nodeViews)。\n\n-   _getPos_:\n\n    用于获取当前节点的位置的方法或属性。\n    等同于 [nodeViews 中的 getPos 参数](https://prosemirror.net/docs/ref/#view.EditorProps.nodeViews)。\n\n-   _decorations_:\n\n    当前节点的 prosemirror decorations。\n    等同于 [nodeViews 中的 decorations 参数](https://prosemirror.net/docs/ref/#view.EditorProps.nodeViews)。\n";
