import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'spectacle',
  title: 'Spectacle',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO'
    },
    { name: 'contenu', title: 'Contenu', default: true },
    { name: 'media', title: 'Media' },
    { name: 'production', title: 'Production' }
  ],
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      group: 'contenu',
      validation: (Rule) =>
        Rule.max(100)
          .required()
          .warning(`Le titre de l'événément ne doit pas dépasser 100 caractères`)
    }),
    defineField({
      name: 'dates',
      title: 'Dates',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stop',
          title: 'Stop',
          fields: [
            {
              type: 'string',
              title: 'Ville',
              name: 'ville',
              validation: (Rule) => Rule.required()
            },
            {
              type: 'string',
              title: 'Emplacement',
              name: 'emplacement',
              validation: (Rule) => Rule.required()
            },
            {
              type: 'blockContent',
              title: 'Description',
              name: 'description'
            },
            {
              type: 'array',
              of: [{ type: 'datetime', title: 'Horaires', name: 'horaires' }],
              title: 'Dates et horaires',
              name: 'dates',
              validation: (Rule) => Rule.required()
            },
            {
              type: 'url',
              title: 'Lien',
              name: 'lien',
              description: "Lien vers plus d'informations"
            }
          ]
        }
      ],
      group: 'contenu'
    }),
    defineField({
      name: 'body',
      title: 'Description',
      group: 'contenu',
      type: 'blockContent'
    }),

    defineField({
      name: 'ecritureEtJeuEtMiseEnScene',
      title: 'Ecriture, jeu et mise en scène',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'ecritureEtJeu',
      title: 'Ecriture et jeu',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }],
      //@ts-expect-error is not defined
      hidden: ({ document }) => (document?.ecritureEtJeuEtMiseEnScene?.length > 0 ? true : false)
    }),
    defineField({
      name: 'miseEnScene',
      title: 'Mise en scène',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }],
      //@ts-expect-error is not defined
      hidden: ({ document }) => (document?.ecritureEtJeuEtMiseEnScene?.length > 0 ? true : false)
    }),

    defineField({
      name: 'costumes',
      title: 'Costumes',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'decors',
      title: 'Décors',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'lumiereEtRegie',
      title: 'Lumière et régie',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'musiqueEtSon',
      title: 'Musique et son',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),

    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'duree',
      title: 'Durée',
      type: 'string',
      group: 'production'
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
      media: 'imageGallery.0'
    },
    prepare(selection) {
      const { title } = selection;
      return { ...selection, subtitle: title };
    }
  }
});
