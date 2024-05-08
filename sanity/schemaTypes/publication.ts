import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO'
    },
    { name: 'contenu', title: 'Contenu', default: true },
    { name: 'media', title: 'Media' }
  ],
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      group: 'contenu',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'seo',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    }),

    defineField({
      name: 'mainImage',
      title: 'Image principal',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif'
        }
      ],
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'contenu',
      validation: (Rule) =>
        Rule.max(200)
          .required()
          .warning(`La description de l'événément ne doit pas dépasser 200 caractères`)
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publié le',
      group: 'contenu',
      type: 'datetime'
    }),
    defineField({
      name: 'body',
      title: 'Corps de texte',
      group: 'contenu',
      type: 'blockContent'
    }),
    defineField({
      name: 'imageGallery',
      title: "Galerie d'image",
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'metatitre',
      title: 'Métatitre',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'metadescription',
      title: 'Métadescription',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required()
    })
  ],

  preview: {
    select: {
      title: 'titre',

      media: 'mainImage'
    },
    prepare(selection) {
      const { title } = selection;
      return { ...selection, subtitle: title };
    }
  }
});
