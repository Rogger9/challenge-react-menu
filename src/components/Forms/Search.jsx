import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSearch } from '../../utils/validations'

const Search = ({ getQuery }) => (
  <Formik
    initialValues={{ search: '' }}
    validate={validationSearch}
    onSubmit={({ search }) => getQuery(search)}
  >
    {
      ({ errors }) => (
        <Form className='flex flex-col sm:flex-row justify-center items-center w-11/12 md:w-1/2 gap-4 relative'>
          <Field
            type='search'
            name='search'
            id='search'
            placeholder='Recipe type...'
            className='max-w-md w-full px-2 py-1 rounded border-none outline-none focus:shadow-sm focus:shadow-white'
          />
          <ErrorMessage name='search' component={() => <span className='text-red-700 absolute top-full'>{errors.search}</span>}/>
          <input
            type='submit'
            value='Search'
            aria-label='search'
            className='bg-cyan-200 w-24 py-1 px-4 border-2 border-cyan-300 rounded-md cursor-pointer hover:bg-cyan-300 outline-none disabled:opacity-40 disabled:pointer-events-none'
          />
        </Form>
      )
    }
  </Formik>
)

export default Search
