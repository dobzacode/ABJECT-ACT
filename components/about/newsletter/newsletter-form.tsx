import { newsletterAction, verifyCaptchaAction } from 'app/_action';
import GenericForm from 'components/contact/generic-form';
import Input from 'components/ui/form/input';
import P from 'components/ui/text/p';
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';

export default function NewsletterForm({
  executeRecaptcha
}: {
  // eslint-disable-next-line no-unused-vars
  executeRecaptcha: (_: string) => Promise<string>;
}) {
  const [state, formAction] = useFormState(updateStatus, '');

  const tForm = useTranslations('form');

  async function updateStatus(previousState: string, formData: FormData) {
    if (!executeRecaptcha) {
      previousState = tForm('error');
      return previousState;
    }

    const token = await executeRecaptcha('onSubmit');

    const verified = await verifyCaptchaAction(token);

    if (!verified) {
      previousState = tForm('error');
      return previousState;
    }

    previousState = await newsletterAction(formData);
    return previousState;
  }

  return (
    <>
      {state && (
        <P
          textType={'body'}
          className={`${
            state === tForm('newsletterSuccess') ? 'text-success50' : 'text-error50'
          } text-center`}
        >
          {state}
        </P>
      )}
      <GenericForm
        isEmail={true}
        classname="flex  gap-small justify-center w-full"
        action={formAction}
      >
        <Input
          className="w-1/2"
          intent="black"
          required
          type="email"
          id={'email'}
          placeholder={'Email'}
          hiddenlabel="true"
        ></Input>
      </GenericForm>
    </>
  );
}
