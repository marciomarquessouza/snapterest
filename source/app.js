var React = require('react');
var ReactDom = require('react-dom');

var h1 =     React.createElement('h1', { className: 'header', key: 'header' }, 'This is React');
var p =      React.createElement('p',  { className: 'content',key: 'content'}, 'And that is how it works');
var reactFragment = [ h1,p ];
var section = React.createElement('section', { className: 'container' }, reactFragment);

ReactDom.render(section, document.getElementById('react-application'));

var listItemElement1 = React.createElement('li',{ className: 'item-1', key: 'item-1' },'Item 1');

var listItemElement2 = React.createElement('li',{ className: 'item-2', key: 'item-2' },'Item 2');

var listItemElement3 = React.createElement('li',{ className: 'item-3', key: 'item-3' },'Item 3');

var reactFragment = [ listItemElement1, listItemElement2, listItemElement3 ];

var listOfItems = React.createElement('ul',{ className: 'list-of-items' }, reactFragment);

ReactDom.render(listOfItems, document.getElementById('listExample1'));

var createListItemElement = React.createFactory('li');

var listItemElementf1 = createListItemElement({ className: 'item-1', key: 'item-1' },'Item 1');

var listItemElementf2 = createListItemElement({ className: 'item-2', key: 'item-2' },'Item 2');

var listItemElementf3 = createListItemElement({ className: 'item-3', key: 'item-3' },'Item 3');

var reactFragmentF1 = [ listItemElementf1, listItemElementf2, listItemElementf3 ];

var listOfItemsF1 = React.createElement('ul',{ className: 'list-of-items' }, reactFragmentF1);

ReactDom.render(listOfItemsF1, document.getElementById('listExample2'));

var listItemElementD1 = React.DOM.li( { className: 'item-1d', key: 'item-1D' }, 'Item Dom 1');

var listItemElementD2 = React.DOM.li( { className: 'item-2d', key: 'item-2D' }, 'Item Dom 2');

var listItemElementD3 = React.DOM.li( { className: 'item-3d', key: 'item-3D' }, 'Item Dom 3');

var reactFragmentD1 = [ listItemElementD1, listItemElementD2, listItemElementD3];

var listOfItemsD1 = React.DOM.ul( {className: 'list-of-items'}, reactFragmentD1);

ReactDom.render(listOfItemsD1,document.getElementById('listExample3'));
