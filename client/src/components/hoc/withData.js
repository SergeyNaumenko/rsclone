/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Spinner from '../spinner/spinner.tsx';
import ErrorBoundary from '../error_boundary';

const withData = (View) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        loading: true,
        error: false,
      };
    }

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      // eslint-disable-next-line react/prop-types
      // eslint-disable-next-line react/destructuring-assignment
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        loading: true,
        error: false,
      });

      // eslint-disable-next-line react/destructuring-assignment
      const id = this.props.id || '';
      this.props
        .getData(id)
        .then((data) => {
          this.setState({
            data,
            loading: false,
          });
        })
        // eslint-disable-next-line no-unused-vars
        .catch((e) => {
          this.setState({
            error: true,
            loading: false,
          });
        });
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return (
          <div className="col s10">
            <Spinner/>;
          </div>
        )
      }

      if (error) {
        return (
          <div className="col s10">
            <ErrorBoundary/>
          </div>
        )
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
