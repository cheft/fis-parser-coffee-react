TodoList = require 'demo/list'

TodoApp = React.createClass
    displayName: 'TodoApp'
    getInitialState: ->
        items: [], text: ''

    onChange: (e) ->
        @setState text: e.target.value
    
    handleSubmit: (e) ->
        e.preventDefault()
        nextItems = @state.items.concat [@state.text]
        nextText = ''
        @setState items: nextItems, text: nextText

    render: ->
    	<div>
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} value={this.state.text} />
                <button>{'Add #' + (this.state.items.length + 1)}</button>
            </form>
        </div>
                    
React.render <TodoApp />,  $('#demo')[0]
