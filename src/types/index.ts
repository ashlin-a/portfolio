import { z } from 'zod/v4';
import { IconType } from 'react-icons';
import { contactFormSchema } from '@/lib/schema';

export interface InfoBoxProps {
  type: 'success' | 'error';
  icon: IconType;
  messages: string[];
}

export interface BaseLinkProps {
  href: string;
  text: string;
}

export interface NavLinkProps extends BaseLinkProps {
  onClick: () => void;
}

export interface LinkButtonProps extends BaseLinkProps {
  icon: IconType;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface TechExpItemProps {
  text: string;
  icon: IconType;
}

export interface BaseInputProps {
  placeholder: string;
  required?: boolean;
  value: string;
}

export interface TextAreaInputProps extends BaseInputProps {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface TextInputProps extends BaseInputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export interface ImageSliderProps {
  imgUrls: string[];
}

export interface FormButtonProps {
  text: string;
  icon?: IconType;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}

export type ContactFormType = z.infer<typeof contactFormSchema>;
