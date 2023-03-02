export const LoginPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.dir({
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    });
    e.currentTarget.reset();
  };
  return (
    <div>
      <h2>login page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
