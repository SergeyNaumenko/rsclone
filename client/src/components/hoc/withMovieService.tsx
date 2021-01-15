import React from 'react';
import { MovieApiServiceConsumer } from '../movie_service_context';

const withMovieService = (mapMethodsToProps: Function) => (Wrapped: any) => {

  return (props: any) => {
    return (
      <MovieApiServiceConsumer>
        {
          (movieService) => {
            const serviceProps = mapMethodsToProps(movieService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </MovieApiServiceConsumer>
    );
  }
};

export default withMovieService;
