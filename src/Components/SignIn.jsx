import { useDispatch } from 'react-redux';
import { signIn } from '../store/authSlice';

export const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(e.target.username.value, e.target.password.value));
    console.log(e.target.username.value, 'SUBMIT');
    console.log(e.target.password.value, 'SUBMIT');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'></label>
      <input id='username' type='text' placeholder='Имя пользователя' />

      <label htmlFor='password'></label>
      <input id='password' type='password' placeholder='Пароль' />

      <button>Войти</button>
    </form>
  );
};
