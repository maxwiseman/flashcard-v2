"use client";

import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconCheckbox,
  IconItalic,
  IconQuote,
  IconSeparatorHorizontal,
  IconStrikethrough,
  IconUnderline,
} from "@tabler/icons-react";
import {
  default as Blockquote,
  default as OrderedList,
} from "@tiptap/extension-blockquote";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";
import Code from "@tiptap/extension-code";
import {
  EditorProvider,
  EditorProviderProps,
  useCurrentEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  CodeIcon,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrderedIcon,
  SubscriptIcon,
  SuperscriptIcon,
} from "lucide-react";
import { Card } from "./card";
import { Separator } from "./separator";
import "./tiptap.css";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

function MenuBar() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <>
      <div className="p-2">
        <div className="flex w-full gap-3 p-2">
          <ToggleGroup
            variant={"outline"}
            type="multiple"
            value={[
              editor.isActive("bold") ? "Bold" : "",
              editor.isActive("italic") ? "Italic" : "",
              editor.isActive("strike") ? "Strike" : "",
              editor.isActive("underline") ? "Underline" : "",
            ]}
          >
            <ToggleGroupItem
              variant={"outline"}
              value="Bold"
              size={"sm"}
              aria-label="Toggle bold"
              onClick={() => editor?.chain().focus().toggleBold().run()}
            >
              <IconBold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Italic"
              size={"sm"}
              aria-label="Toggle italic"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
            >
              <IconItalic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Strike"
              size={"sm"}
              aria-label="Toggle strikethrough"
              onClick={() => editor?.chain().focus().toggleStrike().run()}
            >
              <IconStrikethrough className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Underline"
              size={"sm"}
              aria-label="Toggle underline"
              onClick={() => editor?.chain().focus().toggleUnderline().run()}
            >
              <IconUnderline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup
            variant={"outline"}
            type="single"
            value={
              editor.isActive("heading", { level: 1 })
                ? "H1"
                : editor.isActive("heading", { level: 2 })
                  ? "H2"
                  : editor.isActive("heading", { level: 3 })
                    ? "H3"
                    : ""
            }
          >
            <ToggleGroupItem
              variant={"outline"}
              value="H1"
              size={"sm"}
              aria-label="Toggle heading 1"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              <Heading1 className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="H2"
              size={"sm"}
              aria-label="Toggle heading 2"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              <Heading2 className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="H3"
              size={"sm"}
              aria-label="Toggle heading 3"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            >
              <Heading3 className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup
            variant={"outline"}
            type="multiple"
            value={[
              editor.isActive("blockquote") ? "Blockquote" : "",
              editor.isActive("bulletList") ? "Bulleted List" : "",
              editor.isActive("orderedList") ? "Ordered List" : "",
              editor.isActive("taskList") ? "Checkbox" : "",
              editor.isActive("superscript") ? "Superscript" : "",
              editor.isActive("subscript") ? "Subscript" : "",
              editor.isActive("code") ? "Code" : "",
            ]}
          >
            <ToggleGroupItem
              variant={"outline"}
              value="Blockquote"
              size={"sm"}
              aria-label="Toggle blockquote"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
            >
              <IconQuote className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Horizontal Line"
              size={"sm"}
              aria-label="Add horizontal line"
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
            >
              <IconSeparatorHorizontal className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Bulleted List"
              size={"sm"}
              aria-label="Toggle bulleted list"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
              <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Ordered List"
              size={"sm"}
              aria-label="Toggle ordered list"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
              <ListOrderedIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Checkbox"
              size={"sm"}
              aria-label="Toggle checkbox"
              onClick={() => editor.chain().focus().toggleTaskList().run()}
            >
              <IconCheckbox className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Subscript"
              size={"sm"}
              aria-label="Toggle subscript"
              onClick={() => editor.chain().focus().toggleSubscript().run()}
            >
              <SubscriptIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Superscript"
              size={"sm"}
              aria-label="Toggle superscript"
              onClick={() => editor.chain().focus().toggleSuperscript().run()}
            >
              <SuperscriptIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Code"
              size={"sm"}
              aria-label="Toggle code"
              onClick={() => editor.chain().focus().toggleCode().run()}
            >
              <CodeIcon className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup
            variant={"outline"}
            type="multiple"
            value={[
              editor.isActive({ textAlign: "left" }) ? "Left" : "",
              editor.isActive({ textAlign: "center" }) ? "Center" : "",
              editor.isActive({ textAlign: "justify" }) ? "Justify" : "",
              editor.isActive({ textAlign: "right" }) ? "Right" : "",
            ]}
          >
            <ToggleGroupItem
              variant={"outline"}
              value="Left"
              size={"sm"}
              aria-label="Align left"
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
            >
              <IconAlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Center"
              size={"sm"}
              aria-label="Align center"
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
            >
              <IconAlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Justify"
              size={"sm"}
              aria-label="Align justify"
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
            >
              <IconAlignJustified className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant={"outline"}
              value="Right"
              size={"sm"}
              aria-label="Align right"
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
            >
              <IconAlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <Separator className="w-full" />
    </>
  );
}

export function TipTap(props: Partial<EditorProviderProps>) {
  const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    // @ts-ignore
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
    Typography,
    Underline,
    Blockquote,
    OrderedList,
    Subscript,
    Superscript,
    TaskList,
    TaskItem,
    TextAlign,
    Code,
  ];
  const testContent = "<p>Hello, World!</p>";

  return (
    <Card>
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={testContent}
        {...props}
      >
        {/* <FloatingMenu>This is the floating menu</FloatingMenu> */}
        {/* <BubbleMenu>
          <Card className='w-max p-2 rounded-md'>
            <CardContent className='w-max h-max p-0 space-x-1'>
              <Toggle
                size={'sm'}
                aria-label='Toggle bold'
                // onClick={() => editor?.chain().focus().toggleBold().run()}
                // pressed={editor.isActive('bold')}
              >
                <FontBoldIcon className='w-4 h-4' />
              </Toggle>
              <Toggle
                size={'sm'}
                aria-label='Toggle italic'
                // onClick={() => editor?.chain().focus().toggleItalic().run()}
                // pressed={editor.isActive('italic')}
              >
                <FontItalicIcon className='w-4 h-4' />
              </Toggle>
              <Toggle
                size={'sm'}
                aria-label='Toggle strikethrough'
                // onClick={() => editor?.chain().focus().toggleStrike().run()}
                // pressed={editor.isActive('strike')}
              >
                <StrikethroughIcon className='w-4 h-4' />
              </Toggle>
            </CardContent>
          </Card>
        </BubbleMenu> */}
      </EditorProvider>
    </Card>
  );
}
