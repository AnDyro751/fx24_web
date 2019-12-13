/* eslint-disable no-lonely-if */
import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
import { toast } from 'react-toastify';
import { FirebaseContext } from 'gatsby-plugin-firebase';
import styles from '../style.module.css';
import TextField from '../../Inputs/Text';
import { es } from '../../../locales/es.json';
import { validateName, validateUsername, validateEmail } from '../../../utils/validations';
import { removeExtraWhiteSpaces } from '../../../utils/formatStrings';

const SignUpForms = () => {
  const firebase = useContext(FirebaseContext);
  const [fields, setFields] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });
  const [currentToast, setCurrentToast] = useState();

  const handleChange = ({ target }) => {
    setFields({
      ...fields,
      [target.name]: target.value,
    });
  };

  const validateInfo = () => {
    if (fields.name.length >= 3 && fields.name.length <= 20) {
      if (validateName(fields.name)) {
        handleChange({
          target: {
            name: 'name',
            value: removeExtraWhiteSpaces(fields.name),
          },
        });
        if (fields.username.length >= 1 && fields.username.length <= 15) {
          if (validateUsername(fields.username)) {
            if (fields.email.length >= 10 && fields.email.length <= 40) {
              if (validateEmail(fields.email)) {
                if (fields.password.length >= 6 && fields.password.length <= 15) {
                  firebase.firestore().collection('users').where('username', '==', fields.username).get()
                    // eslint-disable-next-line consistent-return
                    .then(({ docs }) => {
                      if (docs.length === 0) {
                        return true;
                      }
                      if (!toast.isActive(currentToast)) {
                        setCurrentToast(toast.error(es.fields.username.errors.taken));
                      }
                    });
                } else {
                  if (!toast.isActive(currentToast)) {
                    setCurrentToast(toast.error(es.fields.password.errors.length));
                  }
                }
              } else {
                if (!toast.isActive(currentToast)) {
                  setCurrentToast(toast.error(es.fields.email.errors.invalid));
                }
              }
            } else {
              if (!toast.isActive(currentToast)) {
                setCurrentToast(toast.error(es.fields.email.errors.invalid));
              }
            }
          }
        } else {
          if (!toast.isActive(currentToast)) {
            setCurrentToast(toast.error(es.fields.username.errors.length));
          }
        }
      } else {
        if (!toast.isActive(currentToast)) {
          setCurrentToast(toast.error(es.fields.name.errors.format));
        }
      }
    } else {
      if (!toast.isActive(currentToast)) {
        setCurrentToast(toast.error(es.fields.name.errors.length));
      }
    }
    return false;
  };

  const handleCreateUser = () => {
    if (validateInfo()) {
      firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password)
        .then(() => {
          firebase.firestore().collection('users').add({
            username: fields.username,
            name: fields.name,
            status: 'pending',
          });
        }).catch(({ code }) => {
          switch (code) {
            case 'email-already-in-use':
              if (!toast.isActive(currentToast)) {
                setCurrentToast(toast.error(es.fields.email.errors.taken));
              }
              break;
            case 'invalid-email':
              if (!toast.isActive(currentToast)) {
                setCurrentToast(toast.error(es.fields.email.errors.invalid));
              }
              break;
            case 'weak-password':
              if (!toast.isActive(currentToast)) {
                setCurrentToast(toast.error(es.fields.password.errors.weak));
              }
              break;
            default:
              if (!toast.isActive(currentToast)) {
                setCurrentToast(toast.error(es.fields.errors.internalError));
              }
          }
        });
    }
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
        <div className="row u__no_margin" style={{ padding: '1.5em 0 1em 0' }}>
          <div className="col-12 u__no_padding">
            <small style={{ fontSize: '1em' }}>{es.components.forms.signUp.acceptance}</small>
          </div>
        </div>
        <div className="row justify-content-center u__no_margin align-items-center">
          <button type="button" className="with_elevation col-12" onClick={handleCreateUser}>
            {es.components.forms.signUp.button}
          </button>
          <div className="col-auto u__no_padding" style={{ marginTop: '0.5em' }}>
            <Link to="/sign-in">
              {es.components.forms.signUp.signIn}
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForms;
