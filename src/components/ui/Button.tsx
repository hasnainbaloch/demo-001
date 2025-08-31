import React from 'react';
import { Button as AntButton } from 'antd';
import './Button.scss';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'microsoft';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  onClick,
  icon,
  children
}) => {
  const getButtonClasses = () => {
    const classes = ['custom-button'];
    
    if (variant === 'primary') {
      classes.push('custom-button--primary');
    } else if (variant === 'secondary') {
      classes.push('custom-button--secondary');
    } else if (variant === 'microsoft') {
      classes.push('custom-button--microsoft');
    }
    
    classes.push(`custom-button--${size}`);
    
    if (fullWidth) {
      classes.push('custom-button--full-width');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const getAntButtonType = () => {
    if (variant === 'primary') return 'primary';
    return 'default';
  };

  return (
    <AntButton
      htmlType={type}
      type={getAntButtonType()}
      className={getButtonClasses()}
      block={fullWidth}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      icon={icon}
    >
      {children}
    </AntButton>
  );
};
