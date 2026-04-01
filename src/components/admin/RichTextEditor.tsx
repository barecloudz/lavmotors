"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Undo2,
  Redo2,
  Pilcrow,
} from "lucide-react";

interface Props {
  content: string;
  onChange: (html: string) => void;
}

export function RichTextEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "min-h-[320px] outline-none p-4 text-[#e0e0e0] text-sm leading-relaxed",
      },
    },
  });

  if (!editor) return null;

  const ToolBtn = ({
    onClick,
    active,
    title,
    children,
  }: {
    onClick: () => void;
    active: boolean;
    title: string;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
        onClick();
      }}
      title={title}
      className={`p-1.5 rounded transition-colors ${
        active
          ? "bg-[#c9932c]/20 text-[#c9932c]"
          : "text-[#777] hover:text-white hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 border-b border-[#2a2a2a] bg-[#141414]">
        <ToolBtn
          onClick={() => editor.chain().focus().setParagraph().run()}
          active={editor.isActive("paragraph")}
          title="Paragraph"
        >
          <Pilcrow size={14} />
        </ToolBtn>
        <ToolBtn
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive("heading", { level: 2 })}
          title="Heading 2"
        >
          <Heading2 size={14} />
        </ToolBtn>
        <ToolBtn
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          active={editor.isActive("heading", { level: 3 })}
          title="Heading 3"
        >
          <Heading3 size={14} />
        </ToolBtn>
        <div className="w-px h-4 bg-[#2a2a2a] mx-1" />
        <ToolBtn
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          title="Bold"
        >
          <Bold size={14} />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          title="Italic"
        >
          <Italic size={14} />
        </ToolBtn>
        <div className="w-px h-4 bg-[#2a2a2a] mx-1" />
        <ToolBtn
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          title="Bullet list"
        >
          <List size={14} />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          title="Numbered list"
        >
          <ListOrdered size={14} />
        </ToolBtn>
        <div className="w-px h-4 bg-[#2a2a2a] mx-1" />
        <ToolBtn
          onClick={() => editor.chain().focus().undo().run()}
          active={false}
          title="Undo"
        >
          <Undo2 size={14} />
        </ToolBtn>
        <ToolBtn
          onClick={() => editor.chain().focus().redo().run()}
          active={false}
          title="Redo"
        >
          <Redo2 size={14} />
        </ToolBtn>
      </div>

      {/* Editor area */}
      <EditorContent
        editor={editor}
        className="
          [&_.ProseMirror]:min-h-[320px]
          [&_.ProseMirror]:p-4
          [&_.ProseMirror]:outline-none
          [&_.ProseMirror_h2]:text-xl
          [&_.ProseMirror_h2]:font-bold
          [&_.ProseMirror_h2]:text-white
          [&_.ProseMirror_h2]:mt-5
          [&_.ProseMirror_h2]:mb-2
          [&_.ProseMirror_h3]:text-base
          [&_.ProseMirror_h3]:font-semibold
          [&_.ProseMirror_h3]:text-white
          [&_.ProseMirror_h3]:mt-4
          [&_.ProseMirror_h3]:mb-1
          [&_.ProseMirror_p]:mb-3
          [&_.ProseMirror_p]:text-[#c0c0c0]
          [&_.ProseMirror_ul]:list-disc
          [&_.ProseMirror_ul]:pl-5
          [&_.ProseMirror_ul]:mb-3
          [&_.ProseMirror_ol]:list-decimal
          [&_.ProseMirror_ol]:pl-5
          [&_.ProseMirror_ol]:mb-3
          [&_.ProseMirror_li]:mb-1
          [&_.ProseMirror_strong]:font-semibold
          [&_.ProseMirror_strong]:text-white
          [&_.ProseMirror_.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]
          [&_.ProseMirror_.is-editor-empty:first-child::before]:text-[#555]
          [&_.ProseMirror_.is-editor-empty:first-child::before]:pointer-events-none
          [&_.ProseMirror_.is-editor-empty:first-child::before]:float-left
          [&_.ProseMirror_.is-editor-empty:first-child::before]:h-0
        "
      />
    </div>
  );
}
