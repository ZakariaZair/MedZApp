// RichTextEditor.js (for use in web environments)
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";
import React from "react";
import "./richStyle.css";

const ImageResize = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: "100",
        parseHTML: (element) => element.getAttribute("width") || "100",
        renderHTML: (attributes) => {
          return {
            width: attributes.width,
          };
        },
      },
    };
  },
});

const HeadingColor = Heading.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.style.backgroundColor || null,
        renderHTML: (attributes) => {
          if (!attributes.backgroundColor) {
            return {};
          }

          return {
            style: `background-color: ${attributes.backgroundColor}`,
          };
        },
      },
      color: {
        default: null,
        parseHTML: (element) => element.style.color || null,
        renderHTML: (attributes) => {
          if (!attributes.color) {
            return {};
          }
          return {
            style: `color: ${attributes.color}`,
          };
        },
      },
    };
  },
});

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
        .setLink({ href: `myapp://subjects/${url}` })
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
        style={{
          fontSize: "1.6em",
          wordSpacing: 0,
          lineHeight: 0,
          boxSizing: 0,
        }}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        &#x27F2;
      </button>
      <button
        style={{
          fontSize: "1.6em",
          wordSpacing: 0,
          lineHeight: 0,
          boxSizing: 0,
        }}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        &#x27F3;
      </button>
      <div
        style={{
          height: "100%",
          fontSize: "2em",
          marginRight: 5,
          opacity: 0.2,
        }}
      >
        |
      </div>
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
      <div
        style={{
          height: "100%",
          fontSize: "2em",
          marginRight: 5,
          opacity: 0.2,
        }}
      >
        |
      </div>
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
      <div
        style={{
          height: "100%",
          fontSize: "2em",
          marginRight: 5,
          opacity: 0.2,
        }}
      >
        |
      </div>
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
      <div
        style={{
          height: "100%",
          fontSize: "2em",
          marginRight: 5,
          opacity: 0.2,
        }}
      >
        |
      </div>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        &#x2015;
      </button>
      <div
        style={{
          height: "100%",
          fontSize: "2em",
          marginRight: 5,
          opacity: 0.2,
        }}
      >
        |
      </div>
      <button
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        className={editor.isActive("subscript") ? "is-active" : ""}
      >
        X<sub>2</sub>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        className={editor.isActive("superscript") ? "is-active" : ""}
      >
        X<sup>2</sup>
      </button>
      <div
        style={{
          height: "100%",
          fontSize: "2em",
          marginRight: 5,
          opacity: 0.2,
        }}
      >
        |
      </div>
      <button onClick={addLink}>link</button>
      <button onClick={removeLink}>unli</button>
    </div>
  );
};

const RichTextEditor = ({ content, onUpdate }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        keyboardShortcuts: {
          "Mod-z": () => editor.commands.undo(),
          "Mod-Shift-z": () => editor.commands.redo(),
        },
      }),
      TextStyle,
      Color,
      Link,
      Underline,
      Highlight.configure({
        multicolor: true,
      }),
      Superscript,
      Subscript,
      ImageResize.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: {
          class: "image",
        },
      }),
      HeadingColor,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onUpdate(html);
    },
    editorProps: {
      handleDOMEvents: {
        paste: (view, event) => {
          const items = event.clipboardData?.items;

          if (items) {
            for (let i = 0; i < items.length; i++) {
              if (items[i].type.indexOf("image") !== -1) {
                const file = items[i].getAsFile();
                const reader = new FileReader();

                reader.onload = (readerEvent) => {
                  const base64Image = readerEvent.target.result;
                  const transaction = view.state.tr.replaceSelectionWith(
                    view.state.schema.nodes.image.create({
                      src: base64Image,
                      width: "200",
                    }),
                  );
                  view.dispatch(transaction);
                };

                if (file) {
                  reader.readAsDataURL(file);
                }
                event.preventDefault();
                return true;
              }
            }
          }
          return false;
        },
      },
    },
  });

  const upscaleImage = () => {
    const currentWidth = editor.getAttributes("image").width || 100;
    let newWidth = parseInt(currentWidth, 10) + 20;
    if (newWidth > 700) {
      newWidth = 700;
    }
    editor.commands.updateAttributes("image", { width: newWidth.toString() });
  };

  const downscaleImage = () => {
    const currentWidth = editor.getAttributes("image").width || 100;
    let newWidth = parseInt(currentWidth, 10) - 20;
    if (newWidth < 10) return;
    editor.commands.updateAttributes("image", { width: newWidth.toString() });
  };

  const setHeadingBackgroundColor = (color) => {
    editor.commands.updateAttributes("heading", {
      backgroundColor: color,
    });
  };

  const unsetHeadingBackgroundColor = () => {
    editor.commands.updateAttributes("heading", { backgroundColor: null });
  };

  const setHeadingColor = () => {
    editor.commands.updateAttributes("heading", { color: "white" });
  };

  const unsetHeadingColor = () => {
    editor.commands.updateAttributes("heading", { color: null });
  };

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
      {editor.isActive("image") && (
        <div className="hover-window">
          <p>Resize:</p>
          <button onClick={upscaleImage}>+</button>
          <button onClick={downscaleImage}>-</button>
        </div>
      )}
      {editor.isActive("heading") && (
        <div className="hover-window">
          <button onClick={() => unsetHeadingBackgroundColor()}>none</button>
          <button onClick={() => setHeadingBackgroundColor("#D3615D")}>
            🔴
          </button>
          <button onClick={() => setHeadingBackgroundColor("#DFA01F")}>
            🟠
          </button>
          <button onClick={() => setHeadingBackgroundColor("#4788C7")}>
            🔵
          </button>
          <button onClick={() => setHeadingBackgroundColor("#B04081")}>
            🟣
          </button>
          <button onClick={() => unsetHeadingColor()}>🔳</button>
          <button onClick={() => setHeadingColor()}>🔲</button>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
