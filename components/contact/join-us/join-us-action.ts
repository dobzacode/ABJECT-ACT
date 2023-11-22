'use server';

import { google } from 'googleapis';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function joinUsAction(formData: FormData) {
  const locale = await getLocale();
  const t = await getTranslations('form');

  const values = [
    [
      locale === 'fr' ? formData.get(t('firstname')) : formData.get('firstname'),
      locale === 'fr' ? formData.get(t('lastname')) : formData.get('lastname'),
      formData.get('email'),
      locale === 'fr' ? formData.get(t('subject')) : formData.get('subject'),
      formData.get('message')
    ]
  ];

  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const sheets = google.sheets({ version: 'v4', auth });

  try {
    // Ajout des données à la feuille de calcul
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.JOIN_US_SPREADSHEET_ID
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
