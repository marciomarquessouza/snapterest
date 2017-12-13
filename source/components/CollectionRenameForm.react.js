// source/components/CollectionRenameForm.react.js

var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');

var inputStyle = {
    marginRight: '5px'
};

var CollectionRenameForm = React.createClass({

    getInitialState: function() {
        return {
            inputValue: this.props.name
        };
    },

    setInputValue: function (inputValue) {
        this.setState({
            inputValue: inputValue
        });
    },
    
    handleInputValue: function (inputValue) {
        this.setState({
            inputValue: inputValue
        });
    },

    handleInputValueChange: function (event) {
        var inputValue = event.target.value;
        this.setInputValue(inputValue)
    },

    handleFormSubmit: function (event) {
        event.preventDefault();
        var collectionName = this.props.name;
        this.setInputValue(collectionName);
        this.props.onCancelCollectionNameChange();
    },

    handleFormCancel: function (cancel) {
        event.preventDefault();

        var collectionName = this.props.name;
        this.setInputValue(collectionName);
        this.props.onCancelCollectionNameChange();
    },

    componentDidMount: function () {
        this.refs.collectionName.focus();
    },

    render: function () {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>

            <Header text="Collection name;" />

            <div className="form-group">
            <input
                className="form-control"
                style={inputStyle}
                onChange={this.handleInputValueChange}
                value={this.state.inputValue}
                ref="collectionName" />
            </div>

            <Button label="Change" handleClick={this.handleFormSubmit} />
            <Button label="Cancel" handleClick={this.handleFormCancel} />
            </form>
        );
    }
});

module.exports = CollectionRenameForm;
