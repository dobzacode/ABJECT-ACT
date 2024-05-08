import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'revueScouteAffiche',
  title: 'Affiches de la Revue Scoute',
  type: 'document',

  fields: [
    defineField({
      name: 'imageGallery',
      title: "Galerie d'image",
      type: 'array',
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
    })
  ],

  preview: {
    select: {
      media: 'imageGallery.0'
    },
    prepare(selection) {
      return { ...selection };
    }
  }
});
