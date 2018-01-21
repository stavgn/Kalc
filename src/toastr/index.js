import React from 'react';
import ReactDOM from 'react-dom';
import * as toastr from 'toastr';
import Button from 'material-ui/Button';
import './styles.scss';

toastr.options.rtl = true;
toastr.options.closeButton = true;

export function toastWithButton(type, {text, buttonText, onButtonClick}) {
  toastr.options.timeOut = 0;
  toastr.options.extendedTimeOut = 0;

  toastr[type](`<p class="toastText">${text}</p><div id="toastRoot"></div>`);
  ReactDOM.render(<Button raised onClick={onButtonClick}>{buttonText}</Button>, document.getElementById('toastRoot'));
}

export default toastr;
