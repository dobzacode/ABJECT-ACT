'use server';

import { google } from 'googleapis';
import { getLocale, getTranslations } from 'next-intl/server';

export async function joinUsAction(formData: FormData) {
  const locale = await getLocale();
  const t = await getTranslations('form');

  console.log(formData);

  const values: (FormDataEntryValue | null)[][] = [
    [
      locale === 'fr' ? formData.get('PrÃ©nom') : formData.get('Firstname'),
      locale === 'fr' ? formData.get(t('lastname')) : formData.get('Lastname'),
      formData.get('email'),
      locale === 'fr' ? formData.get(t('subject')) : formData.get('Subject'),
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
      range: 'Rejoins-nous',
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

export async function partnershipAction(formData: FormData) {
  const locale = await getLocale();
  const t = await getTranslations('form');

  console.log(formData);

  const values: (FormDataEntryValue | null)[][] = [
    [
      locale === 'fr' ? formData.get('PrÃ©nom') : formData.get('Firstname'),
      locale === 'fr' ? formData.get(t('lastname')) : formData.get('Lastname'),
      formData.get('email'),
      locale === 'fr' ? formData.get(t('subject')) : formData.get('Subject'),
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
      range: 'Partenariat',
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

export async function contactAction(formData: FormData) {
  const locale = await getLocale();
  const t = await getTranslations('form');

  console.log(formData);

  const values: (FormDataEntryValue | null)[][] = [
    [
      locale === 'fr' ? formData.get('PrÃ©nom') : formData.get('Firstname'),
      locale === 'fr' ? formData.get(t('lastname')) : formData.get('Lastname'),
      formData.get('email'),
      locale === 'fr' ? formData.get(t('subject')) : formData.get('Subject'),
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
      range: 'Contact',
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

export async function verifyCaptchaAction(token: string) {
  console.log(
    process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
    'process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY'
  );
  console.log(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`
  );
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`
  });

  const data = await res.json();

  console.log(data);

  if (data.score > 0.5) {
    return true;
  } else {
    return false;
  }
}
