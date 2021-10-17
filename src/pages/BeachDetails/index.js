import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setBeachDetails } from '../../actions';
import { getbeachDetails } from '../../Api';
import Rating from '../../components/Rating';
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
      <Content>
        <BeachImage src={beachDetails.image} alt="Nature" />
        <Details>
          <h2>{beachDetails.name}</h2>
          <Contact>
            <Rating value={beachDetails.rating} />
            <span>
              {beachDetails.email}
            </span>
            <span>
              {beachDetails.phone_number}
            </span>
          </Contact>
        </Details>
      </Content>
      <Content>
        <p>
          {beachDetails.details}
        </p>

        <a href={beachDetails.website} target="_blank" rel="noreferrer">Visit Website</a>
      </Content>
    </Wrapper>
  );
};

export default BeachDetails;
