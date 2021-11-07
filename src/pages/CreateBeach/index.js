import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { createBeach } from '../../Api';
import Rating from '../../components/Rating/RatingInput';

import {
  Button, Content, Form, Wrapper,
} from './CreateBeach.styles';

const CreateBeach = () => {
  const [beach, set] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: '',
    city: '',
    country: '',
    website: '',
    details: '',
    rating: 0,
  });
  const [error, setError] = useState('');
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const setBeach = ({ target }) => set({ ...beach, [target.id]: target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { id } = await createBeach(beach, image);
      history.push(`beach/${id}`);
    } catch (e) {
      setError('There was an error creating this beach');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <Content>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <div className="Error">{error}</div>
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              required
              value={beach.name}
              onChange={setBeach}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              required
              type="email"
              value={beach.email}
              onChange={setBeach}
            />
          </label>
          <label htmlFor="phone_number">
            Phone Number
            <input
              id="phone_number"
              type="text"
              required
              value={beach.phone_number}
              onChange={setBeach}
            />
          </label>
          <label htmlFor="website">
            Website
            <input
              id="website"
              type="url"
              required
              value={beach.website}
              onChange={setBeach}
            />
          </label>
          <label htmlFor="address">
            Address
            <input
              id="address"
              type="text"
              required
              value={beach.address}
              onChange={setBeach}
            />
          </label>
          <label htmlFor="city">
            City
            <input
              id="city"
              type="text"
              required
              value={beach.city}
              onChange={setBeach}
            />
          </label>
          <label htmlFor="country">
            Country
            <input
              id="country"
              type="text"
              required
              value={beach.country}
              onChange={setBeach}
            />
          </label>
          <label htmlFor="details">
            Details
            <textarea
              id="details"
              type="text"
              required
              value={beach.details}
              onChange={setBeach}
            />
          </label>
          <label htmlFor="rating">
            Rating
            <Rating value={beach.rating} onChange={(rating) => set({ ...beach, rating })} />
            <input type="hidden" />
          </label>
          <label htmlFor="image">
            Image
            <input
              id="image"
              type="file"
              required
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <Button disabled={loading}>Submit</Button>
        </Form>
      </Content>
    </Wrapper>
  );
};
export default CreateBeach;
