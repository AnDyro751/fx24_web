import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.module.css';

const TextInput = ({
  label, required, name, type, autoComplete, placeholder, spellCheck, onChange, minLength,
  maxLength, inputMode, value, style,
}) => (
  <div style={style.container} className={`row u__no_margin ${styles.input_container}`}>
    <div className="col-12 u__no_padding">
      <p className={styles.input_label}>{label}</p>
    </div>
    <div className="col-12 u__no_padding">
      <input
        required={required}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        spellCheck={spellCheck}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        inputMode={inputMode}
        value={value}
      />
    </div>
  </div>
);

TextInput.defaultProps = {
  required: false,
  autoComplete: 'off',
  type: 'text',
  spellCheck: false,
  onChange: () => null,
  minLength: 0,
  maxLength: 1000,
  inputMode: 'text',
  style: {},
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  spellCheck: PropTypes.bool,
  onChange: PropTypes.func,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  inputMode: PropTypes.string,
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default TextInput;
