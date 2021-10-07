import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setBeachDetails } from '../../actions';
import { getbeachDetails } from '../../API';
import { getDetails } from '../../reducers/beachDetails';
import {
  BeachImage,
  Contact,
  Content,
  Details,
  Wrapper,
} from './BeachDetails.styles';

const BeachDetails = () => {
  const { id } = useParams();
  const beachDetails = useSelector(getDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    getbeachDetails(id).then((beach) => {
      dispatch(setBeachDetails(beach));
    });
  }, [id]);
  return (
    <Wrapper>
      <Details>{beachDetails.details}</Details>
      <Content>
        <BeachImage src={beachDetails.image} alt="Nature" />
        <Contact>
          <div>
            <h1>Contact Us </h1>
            <h3>{beachDetails.email}</h3>
            <h3>{beachDetails.phone_number}</h3>
            <h3>{beachDetails.website}</h3>
          </div>
          <div>{beachDetails.name}</div>
        </Contact>
      </Content>
    </Wrapper>
  );
};

export default BeachDetails;
