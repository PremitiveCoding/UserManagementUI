import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EditUser = ({ match }) => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/user/find/${match.params.id}`);
      setUser(data);
    };
    fetchUser();
  }, [match.params.id]);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.put(`/user/update/${match.params.id}`, values);
        history.push('/');
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditUser;
