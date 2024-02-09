'use server';

import { google } from 'googleapis';
import { getLocale, getTranslations } from 'next-intl/server';

export async function joinUsAction(formData: FormData) {
  const locale = await getLocale();
  const t = await getTranslations('form');

  const values: (FormDataEntryValue | null)[][] = [
    [
      locale === 'fr' ? formData.get('PrÃ©nom') : formData.get('Firstname'),
      locale === 'fr' ? formData.get(t('lastname')) : formData.get('Lastname'),
      formData.get('email'),
      locale === 'fr' ? formData.get(t('subject')) : formData.get('Subject'),
      formData.get('message')
    ]
  ];

  const config = {
    email: process.env.GOOGLE_CLIENT_EMAIL ?? '',
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? ''
  };

  const client = new google.auth.JWT(config.email, null || '', config.key, [
    'https://www.googleapis.com/auth/spreadsheets'
  ]);

  const sheets = google.sheets({ version: 'v4', auth: client });

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
    console.log(error);
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

  const config = {
    email: process.env.GOOGLE_CLIENT_EMAIL ?? '',
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? ''
  };

  const client = new google.auth.JWT(config.email, null || '', config.key, [
    'https://www.googleapis.com/auth/spreadsheets'
  ]);

  const sheets = google.sheets({ version: 'v4', auth: client });

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

export async function newsletterAction(formData: FormData) {
  const t = await getTranslations('form');

  console.log(formData);

  const values: (FormDataEntryValue | null)[][] = [[formData.get('email')]];

  console.log(values);

  const config = {
    email: process.env.GOOGLE_CLIENT_EMAIL ?? '',
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? ''
  };

  const client = new google.auth.JWT(config.email, null || '', config.key, [
    'https://www.googleapis.com/auth/spreadsheets'
  ]);

  const sheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = process.env.JOIN_US_SPREADSHEET_ID;

  try {
    if (!spreadsheetId) throw new Error();
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.JOIN_US_SPREADSHEET_ID,
      range: 'Newsletter',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: values
      }
    });

    return t('newsletterSuccess');
  } catch (error) {
    return t('error');
  }
}

export async function contactAction(formData: FormData) {
  const locale = await getLocale();
  const t = await getTranslations('form');

  const values: (FormDataEntryValue | null)[][] = [
    [
      locale === 'fr' ? formData.get('PrÃ©nom') : formData.get('Firstname'),
      locale === 'fr' ? formData.get(t('lastname')) : formData.get('Lastname'),
      formData.get('email'),
      locale === 'fr' ? formData.get(t('subject')) : formData.get('Subject'),
      formData.get('message')
    ]
  ];

  const config = {
    email: process.env.GOOGLE_CLIENT_EMAIL ?? '',
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? ''
  };

  const client = new google.auth.JWT(config.email, null || '', config.key, [
    'https://www.googleapis.com/auth/spreadsheets'
  ]);

  const sheets = google.sheets({ version: 'v4', auth: client });

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
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`
  });

  const data = await res.json();

  if (data.score > 0.5) {
    return true;
  } else {
    return false;
  }
}

export async function generateOpenGraphImage(route: string) {
  console.log(route);
  const url = `https://abject-act.vercel.app${route}`;

  console.log(
    `https://opengraph.io/api/1.1/site/${url}?app_id=${process.env.OPENGRAPH_IO_KEY?.toString()}`
  );

  try {
    const response = await fetch(
      `https://opengraph.io/api/1.1/screenshot/${encodeURIComponent(url)}?accept_lang=auto&app_id=${
        process.env.OPENGRAPH_IO_KEY
      }`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await response.json();
    console.log(data.screenshotUrl);
    // Utilisez ogImageUrl dans votre balise OpenGraph
    return data.screenshotUrl;
  } catch (error) {
    console.error("Erreur lors de la génération de l'image OpenGraph :", error);
  }
}
