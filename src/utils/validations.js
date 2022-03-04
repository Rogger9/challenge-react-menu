export const validationsLogin = ({ email, password }) => {
  const err = {}
  if (!email) err.email = 'Please enter an email'
  if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) err.email = 'Please enter a valid email'
  if (!/[\S+]{5,}$/.test(password)) err.password = 'Please enter a valid password. Minimum 5 characters'
  return err
}

export const validationSearch = ({ search }) => {
  const err = {}
  if (!search) err.search = 'Enter a search'
  return err
}
