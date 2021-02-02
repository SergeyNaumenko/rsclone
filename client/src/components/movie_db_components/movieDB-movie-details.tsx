import React from 'react';
import DescriptionPanel from '../description_panel/descriptionPanel.component';
import {
  withData,
  withMovieService,
} from '../hoc';
import compose from '../../utils/compose';

const mapMovieDetailsToProps = (movieApiService: any) => {
  return {
    getData: movieApiService.getMovieById
  };
};

const MovieDetails = compose(
                      withMovieService(mapMovieDetailsToProps),
                      withData,
                    )(DescriptionPanel);

export {
  MovieDetails,
}
