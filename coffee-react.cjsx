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
        	<div></div>
			<button></button>
	    </div>
                    
React.render <TodoApp />,  $('#demo')[0]
