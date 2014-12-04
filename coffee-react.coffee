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
    	React.createElement(React.DOM.div, null,  
        	React.createElement(React.DOM.div, null),  
			React.createElement(React.DOM.button, null) 
	    )
                    
React.render React.createElement(TodoApp, null),  $('#demo')[0]
