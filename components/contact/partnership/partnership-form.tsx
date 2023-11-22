import { partnershipAction } from 'app/_action';
import Input from 'components/ui/form/input';
import P from 'components/ui/text/p';
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';
import GenericForm from '../generic-form';

export default function PartnershipForm() {
  async function updateStatus(previousState: string, formData: FormData) {
    previousState = await partnershipAction(formData);
    return previousState;
  }

  const [state, formAction] = useFormState(updateStatus, '');

  const tForm = useTranslations('form');

  return (
    <GenericForm classname="flex flex-col gap-small w-full" action={formAction}>
      {state && (
        <P
          textType={'body'}
          className={`${state === tForm('success') ? 'text-success50' : 'text-error50'}`}
        >
          {state}
        </P>
      )}
      <div className="flex w-full flex-col justify-between  gap-small mobile-large:flex-row">
        <Input
          className="mobile-large:w-1/2"
          minLength={2}
          maxLength={30}
          required
          type="text"
          id={tForm('firstname')}
          placeholder={tForm('firstname')}
          hiddenlabel="true"
        ></Input>
        <Input
          className="mobile-large:w-1/2"
          minLength={2}
          maxLength={30}
          required
          type="text"
          id={tForm('lastname')}
          placeholder={tForm('lastname')}
          hiddenlabel="true"
        ></Input>
      </div>
      <Input required type="email" id={'email'} placeholder={'Email'} hiddenlabel="true"></Input>
      <Input
        minLength={2}
        maxLength={30}
        required
        type="text"
        id={tForm('subject')}
        placeholder={tForm('subject')}
        hiddenlabel="true"
      ></Input>
      <Input
        minLength={10}
        maxLength={500}
        required
        type="textarea"
        id={'message'}
        placeholder={'Message'}
        rows={5}
        cols={3}
        hiddenlabel="true"
      ></Input>
    </GenericForm>
  );
}
