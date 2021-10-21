import React from 'react';

function DelayUnmount(Component: any) {
  return class extends React.Component<any> {

    state = {
      shouldRender: this.props.status
    }

    componentWillReceiveProps(nextProps: any) {
      if (this.props.status && !nextProps.status) {
        setTimeout(() => this.setState({ shouldRender: false }), this.props.delayTime)
      } else if (!this.props.status && nextProps.status) {
        this.setState({ shouldRender: true })
      }
    }

    render() {
      return this.state.shouldRender ? <Component {...this.props} /> : null
    }
  }
}

export default DelayUnmount

