import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'label',
  title: 'Label',
  type: 'document',
  fields: [
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'url',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'picture',
      title: 'Image',
      type: 'image',
      options: { hotspot: true, metadata: ['lqip', 'blurhash'] },
      fields: [{ name: 'alt', type: 'string', title: 'Texte alternatif' }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: { title: 'name', media: 'picture', subtitle: 'link' }
  }
});
