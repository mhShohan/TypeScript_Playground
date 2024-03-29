import React from 'react';

// Button Event
type BtnProps = {
    children: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ handleClick, children }: BtnProps) => {
    return <button onClick={(event) => handleClick(event)}>{children}</button>;
};

export default Button;

type CustomBtnProps = {
    variant: 'primary' | 'secondary';
} & React.ComponentProps<'button'>;

const CustomBtn = ({ variant, children, ...rest }: CustomBtnProps) => {
    return (
        <button className={`${variant}`} {...rest}>
            {children}
        </button>
    );
};

type InputProps = React.ComponentProps<'input'>;

const Input = (props: InputProps) => {
    return <input {...props} />;
};
