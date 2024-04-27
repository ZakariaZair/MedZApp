// RichTextEditor.js (for use in web environments)
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import "./richStyle.css";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addLink = () => {
    const url = window.prompt("Enter the URL");
    if (url) {

      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: `${window.location.origin}/subjects/${url}` })
        .run();
    }
  };

  const removeLink = () => {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
    }
  };

  return (
    <div className="menu-bar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        b
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        i
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        s
      </button>
      <div style={{ height: "100%", fontSize: "3em", marginRight: 5 }}>|</div>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        p
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <div style={{ height: "100%", fontSize: "3em", marginRight: 5 }}>|</div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        -
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        q
      </button>
      <div style={{ height: "100%", fontSize: "3em", marginRight: 5 }}>|</div>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={
          editor.isActive("highlight", { color: "#ffde64" }) ? "is-active" : ""
        }
      >
        🟨
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        🟣
      </button>
      <div style={{ height: "100%", fontSize: "3em", marginRight: 5 }}>|</div>
      <button onClick={addLink}>link</button>
      <button onClick={removeLink}>unlink</button>
      <div style={{ height: "100%", fontSize: "3em", marginRight: 5 }}>|</div>
      <button
        style={{ fontSize: "2em" }}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        ↜
      </button>
      <button
        style={{ fontSize: "2em" }}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        ↝
      </button>
    </div>
  );
};
const RichTextEditor = ({ content, onUpdate }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        keyboardShortcuts: {
          'Mod-z': () => editor.commands.undo(),
          'Mod-Shift-z': () => editor.commands.redo(),
        }
      }),
      TextStyle,
      Color,
      Link,
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onUpdate(html);
    },
  });

  React.useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent className="editor-container" editor={editor} />
    </div>
  );
};

export default RichTextEditor;

/*
<FloatingMenu editor={editor}>
  {
    <div className="floating-bar">
      <button
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
        className={
          editor.isActive("heading", { level: 1 }) ? "is-active" : ""
        }
      >
        h1
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={
          editor.isActive("heading", { level: 2 }) ? "is-active" : ""
        }
      >
        h2
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
        className={
          editor.isActive("heading", { level: 3 }) ? "is-active" : ""
        }
      >
        h3
      </button>
      <div style={{ height: "100%", fontSize: "3em", marginRight: 5 }}>
        |
      </div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        -
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        q
      </button>
    </div>
  }
</FloatingMenu>
*/
