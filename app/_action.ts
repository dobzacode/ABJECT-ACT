'use server';

import { google } from 'googleapis';
import { getLocale, getTranslations } from 'next-intl/server';

export async function joinUsAction(formData: FormData) {
  const locale = await getLocale();
  const t = await getTranslations('form');

  console.log(formData);

  const values: (FormDataEntryValue | null)[][] = [
    [
      locale === 'fr' ? formData.get('PrÃ©nom') : formData.get('firstname'),
      locale === 'fr' ? formData.get(t('lastname')) : formData.get('lastname'),
      formData.get('email'),
      locale === 'fr' ? formData.get(t('subject')) : formData.get('subject'),
      formData.get('message')
    ]
  ];

  console.log(values);

  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = process.env.JOIN_US_SPREADSHEET_ID;

  try {
    if (!spreadsheetId) throw new Error();
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.JOIN_US_SPREADSHEET_ID,
      range: 'sheet1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: values
      }
    });

    return t('success');
  } catch (error) {
    return t('error');
  }
}
