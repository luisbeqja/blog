import type { TinaField } from "tinacms";
export function authorFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Name",
    },
    {
      type: "string",
      name: "bio",
      label: "Bio",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "avatar",
      label: "Avatar Image",
    },
    {
      type: "object",
      name: "social",
      label: "Social Media",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
      ],
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured Author",
    },
  ] as TinaField[];
}
export function home_heroFields() {
  return [
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "number",
      name: "maxWidthPX",
      label: "Max Width",
      required: true,
    },
  ] as TinaField[];
}
export function homeFields() {
  return [...home_heroFields()] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "number",
      name: "timeToRead",
      label: "Read Time",
      required: true,
    },
    {
      type: "image",
      name: "hero",
      label: "Hero Image",
    },
    {
      type: "string",
      name: "authors",
      label: "Authors",
      list: true,
      ui: {
        component: "tags",
      },
    },
  ] as TinaField[];
}
