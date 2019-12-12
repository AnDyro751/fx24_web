import React, { useState } from 'react';
import styles from '../style.module.css';
import TextField from '../../Inputs/Text';
import { es } from '../../../locales/es.json';

const SignUpForms = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    setFields({
      ...fields,
      [target.name]: target.value,
    });
  };

  return (
    <form className={`row u__no_margin with_elevation ${styles.form_container}`}>
      <div className="col-12 u__no_padding">
        <h1>{es.components.forms.signUp.title}</h1>
        <p style={{ paddingBottom: '1.5em' }}>{es.components.forms.signUp.message}</p>
        <TextField
          label={es.fields.name.label}
          required
          name="name"
          autoComplete="on"
          placeholder={es.fields.name.placeholder}
          spellCheck
          onChange={handleChange}
          minLength={3}
          maxLength={20}
          value={fields.name}
          style={{
            container: {
              paddingBottom: '1em',
            },
          }}
        />
        <TextField
          label={es.fields.username.label}
          maxLength={15}
          minLength={1}
          required
          value={fields.username}
          placeholder={es.fields.username.placeholder}
          name="username"
          onChange={handleChange}
          style={{
            container: {
              paddingBottom: '1em',
            },
          }}
        />
        <TextField
          autoComplete="on"
          inputMode="email"
          label={es.fields.email.label}
          maxLength={40}
          minLength={10}
          name="email"
          onChange={handleChange}
          placeholder={es.fields.email.placeholder}
          required
          type="email"
          value={fields.email}
          style={{
            container: {
              paddingBottom: '1em',
            },
          }}
        />
        <TextField
          label={es.fields.password.label}
          maxLength={15}
          minLength={6}
          name="password"
          onChange={handleChange}
          placeholder={es.fields.password.placeholder}
          value={fields.password}
          required
          type="password"
        />
        <div className="row justify-content-end u__no_margin" style={{ paddingTop: '1.5em' }}>
          <button type="button" className="with_elevation">
            {es.components.forms.signUp.button}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForms;
