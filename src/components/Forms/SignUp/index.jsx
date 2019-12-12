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
    <form className="row u__no_margin">
      <div className="col-12 u__no_padding">
        <TextField
          label={es.fields.name}
          required
          name="name"
          autoComplete="on"
          placeholder="Richard Hendricks"
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
          label={es.fields.username}
          maxLength={15}
          minLength={1}
          required
          value={fields.username}
          placeholder="richardhen"
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
          label={es.fields.email}
          maxLength={40}
          minLength={10}
          name="email"
          onChange={handleChange}
          placeholder="richard@piedpiper.com"
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
          label={es.fields.password}
          maxLength={15}
          minLength={6}
          name="password"
          onChange={handleChange}
          placeholder="******"
          value={fields.password}
          required
          type="password"
        />
      </div>
    </form>
  );
};

export default SignUpForms;
