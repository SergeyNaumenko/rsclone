/* eslint-disable react/prop-types */
import React, { Component } from 'react';

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
      this.props
        .getData()
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
        return <p>spinner</p>;
      }

      /*if (error) {
        return <p>error</p>;
      }*/

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
