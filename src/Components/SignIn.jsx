import { useDispatch } from 'react-redux';
import { signIn } from '../store/authSlice';

export const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get('username');
    const password = data.get('password');

    dispatch(signIn({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'></label>
      <input
        id='username'
        name='username'
        type='text'
        placeholder='Имя пользователя'
      />

      <label htmlFor='password'></label>
      <input
        id='password'
        name='password'
        type='password'
        placeholder='Пароль'
      />

      <button>Войти</button>
    </form>
  );
};
