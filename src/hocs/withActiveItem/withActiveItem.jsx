import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeId: null
      };

      this._onHover = this._onHover.bind(this);
    }

    _onHover(id) {
      this.setState({
        activeId: id
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onHover={this._onHover}
        >
        </Component>
      );
    }

  }

  WithActiveItem.propTypes = {
    handleActiveOffer: PropTypes.func
  };

  return WithActiveItem;
};

export default withActiveItem;
