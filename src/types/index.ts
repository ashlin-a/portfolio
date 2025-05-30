import { IconType } from 'react-icons';

export interface InfoBoxProps {
  type: 'success' | 'error';
  icon: IconType;
}

export type InfoType = 'success' | 'error';

export interface BaseLinkProps {
  href: string;
  text: string;
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

export interface FormButtonProps {
  text: string;
  icon?: IconType;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}
