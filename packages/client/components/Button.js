import React from 'react';
import cx from 'classnames';
import colors from '../lib/colors';

const Button = ({
  primary,
  full,
  narrow,
  simple,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cx('btn', className, { primary, full, narrow, simple })}
      {...props}
    >
      {children}
      <style jsx>{`
        .btn {
          color: ${colors.twitterBlue};
          background: #fff;
          border: 1px solid ${colors.twitterBlue};
          border-radius: 50px;
          cursor: pointer;
          outline: none;

          font-size: 0.9em;
          font-weight: bold;
          padding: 12px;

          transition: background 0.2s ease;
        }

        .btn:hover {
          background: ${colors.buttonNegativeHover};
        }

        .btn:active {
          background: ${colors.buttonNegativeActive};
        }

        .btn[disabled] {
          cursor: not-allowed;
          background: ${colors.buttonDisabled};
        }

        .btn:focus:not(:active) {
          box-shadow: 0 0 0 0.18em rgb(154, 210, 249);
        }

        .btn.primary {
          color: #fff;
          background: ${colors.twitterBlue};
          border: none;
        }

        .btn.primary:hover {
          background: ${colors.buttonPrimaryHover};
        }

        .btn.primary:active {
          background: ${colors.buttonPrimaryActive};
        }

        .btn.primary[disabled] {
          background: ${colors.buttonDisabled};
        }

        .btn.full {
          width: 100%;
        }

        .btn.narrow {
          padding-top: 8px;
          padding-bottom: 8px;
        }

        .btn.simple {
          border: none;
          background: none;
        }
      `}</style>
    </button>
  );
};

export default Button;