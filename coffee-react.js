(function() {
  var TodoApp, TodoList;

  TodoList = require('demo/list');

  TodoApp = React.createClass({
    displayName: 'TodoApp',
    getInitialState: function() {
      return {
        items: [],
        text: ''
      };
    },
    onChange: function(e) {
      return this.setState({
        text: e.target.value
      });
    },
    handleSubmit: function(e) {
      var nextItems, nextText;
      e.preventDefault();
      nextItems = this.state.items.concat([this.state.text]);
      nextText = '';
      return this.setState({
        items: nextItems,
        text: nextText
      });
    },
    render: function() {
      return React.createElement('div', null, React.createElement('div', {
        className: 'alert alert-info'
      }, '任务列表'), React.createElement(TodoList, {
        items: this.state.items
      }), React.createElement('form', {
        onSubmit: this.handleSubmit
      }, React.createElement('input', {
        className: 'form-group form-control',
        onChange: this.onChange,
        value: this.state.text
      }), React.createElement('button', {
        className: 'btn btn-success glyphicon-plus'
      }, ' 增加 (' + (this.state.items.length + 1) + ')')));
    }
  });

  React.render(React.createElement(TodoApp, null), $('#demo')[0]);

}).call(this);
