/**
 * ContentEditable node for preformatted content.
 * 
 * @class
 * @constructor
 * @extends {ve.ce.BranchNode}
 * @param model {ve.dm.PreformattedNode} Model to observe
 */
ve.ce.PreformattedNode = function( model ) {
	// Inheritance
	ve.ce.BranchNode.call( this, model );
};

/* Static Members */

/**
 * @see ve.ce.NodeFactory
 */
ve.ce.PreformattedNode.rules = {
	'canHaveChildren': true,
	'canHaveGrandchildren': false,
	'canBeSplit': true
};

/* Registration */

ve.ce.factory.register( 'preformatted', ve.ce.PreformattedNode );

/* Inheritance */

ve.extendClass( ve.ce.PreformattedNode, ve.ce.BranchNode );
