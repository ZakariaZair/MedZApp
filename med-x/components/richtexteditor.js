// RichTextEditor.js (for use in web environments)
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
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

  const setFontSize = (size) => {
      editor.chain().focus().setMark('textStyle', { fontSize: `${size}px` }).run();
  };

  return (
    <div className="menu-bar">
      <button
        style={{ fontSize: "1.6em", wordSpacing: 0, lineHeight: 0, boxSizing: 0 }}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        &#x27F2;
      </button>
      <button
        style={{ fontSize: "1.6em", wordSpacing: 0, lineHeight: 0, boxSizing: 0 }}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        &#x27F3;
      </button>
      <div style={{ height: "100%", fontSize: "2em", marginRight: 5, opacity: 0.2 }}>|</div>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
      <strong>B</strong>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <em>I</em>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <u>U</u>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <s>S</s>
      </button>
      <div style={{ height: "100%", fontSize: "2em", marginRight: 5, opacity: 0.2 }}>|</div>
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
      <div style={{ height: "100%", fontSize: "2em", marginRight: 5, opacity: 0.2 }}>|</div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        &#x2022;
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        1.
      </button>
      <div style={{ height: "100%", fontSize: "2em", marginRight: 5, opacity: 0.2 }}>|</div>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        &#x2015;
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={
          editor.isActive("highlight", { color: "#ffde64" }) ? "is-active" : ""
        }
      >
        🟨
      </button>
      <div style={{ height: "100%", fontSize: "2em", marginRight: 5, opacity: 0.2 }}>|</div>
      <button onClick={addLink}>link</button>
      <button onClick={removeLink}>unlink</button>
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
      Underline,
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
    <div className="main-container">
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
