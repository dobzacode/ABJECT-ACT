import { SubmitButton } from 'components/ui/form/submit-button';
import { cn } from 'lib/utils';
import { FormEventHandler, ReactNode } from 'react';

interface ContactFormProps {
  children: ReactNode;
  // eslint-disable-next-line no-unused-vars
  action?: (payload: FormData) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  classname: string;
}

export default function ContactForm({ children, action, classname, onSubmit }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} action={action} className={cn(classname)}>
      {children}
      <SubmitButton></SubmitButton>
    </form>
  );
}
