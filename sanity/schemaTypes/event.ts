import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'eventDate',
  title: 'Événement',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.max(120).required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true, metadata: ['blurhash', 'lqip'] },
      fields: [{ name: 'alt', title: 'Texte alternatif', type: 'string' }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'lieu',
      title: 'Lieu',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (Rule) => Rule.required()
    })
  ],
  orderings: [
    {
      title: 'Date (plus récent)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    },
    {
      title: 'Date (plus ancien)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }]
    }
  ],
  preview: {
    select: { title: 'titre', media: 'image', subtitle: 'date' },
    prepare(selection) {
      const { subtitle } = selection as { title: string; subtitle: string };
      return { ...selection, subtitle: subtitle };
    }
  }
});
