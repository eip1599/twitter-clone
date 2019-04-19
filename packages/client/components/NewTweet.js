import React from 'react';
import colors from '../lib/colors';
import Avatar from './Avatar';

const NewTweet = () => (
  <div className="new-tweet">
    <Avatar size="small" />
    <form>
      <textarea className="input" placeholder="What's hapenning?" />
    </form>
    <style jsx>{`
      .new-tweet {
        padding: 10px 12px 10px 18px;
        display: flex;
        background-color: ${colors.newTweetBg};
        border: 1px solid ${colors.boxBorder};
      }

      form {
        margin-left: 8px;
        flex: 1 1 auto;
      }

      .input {
        padding: 6px 8px;
        width: 100%;
        height: 36px;
        border: 1px solid ${colors.inputBlueBorder};
        box-shadow: none;
        font-size: 0.9em;
        resize: none;
      }

      .input:hover {
        border: 1px solid ${colors.inputBlueBorder};
      }

      .input::placeholder {
        color: ${colors.twitterBlue};
      }
    `}</style>
  </div>
);

export default NewTweet;