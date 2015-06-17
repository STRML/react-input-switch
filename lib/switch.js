var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  display: 'InputSwitch',

  render: function () {
    var name = this.props.name;
    var checked = !!this.props.checked;
    var classes = {'is-checked': checked};
    classes['u-switch'] = true;
    this.checked = checked;

    return (
      <label className={cx(classes)}>
        <input
          type="checkbox"
          name={name}
          onClick={this.handleClick}
        />
        <span className="track"></span>
        <span className="button"></span>
      </label>
    );
  },

  handleClick() {
    if(this.props.onChange) {
      this.props.onChange(!this.checked);
    }
  }
});