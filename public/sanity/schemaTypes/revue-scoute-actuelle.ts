import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'revueScouteActuelle',
  title: 'La Revue Scoute [Tournée en cours]',
  type: 'document',
  groups: [
    { name: 'contenu', title: 'Contenu', default: true },
    { name: 'media', title: 'Media' },
    {
      name: 'seo',
      title: 'SEO'
    },
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
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      group: 'contenu',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'date',
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
      group: 'contenu',
      validation: (Rule) => Rule.required()
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
      name: 'distribution',
      title: 'Distribution',
      type: 'array',

      of: [
        {
          type: 'object',
          fields: [
            { type: 'string', title: 'Nom complet', name: 'nom' },
            { type: 'image', title: 'Photo', name: 'picture' }
          ]
        }
      ],
      group: 'contenu'
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
