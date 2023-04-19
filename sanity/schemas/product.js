export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "oldPrice",
      title: "OldPrice",
      type: "number",
      required: false,
    },
    {
      name: "size",
      title: "Size",
      type: "string",
      required: false,
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
  ],
};
