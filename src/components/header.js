import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'shallowequal';
import deepEqual from 'deep-equal';

class NodeHeader extends Component {
    shouldComponentUpdate(nextProps) {
        const props = this.props;
        const nextPropKeys = Object.keys(nextProps);

        for (let i = 0; i < nextPropKeys.length; i++) {
            const key = nextPropKeys[i];
            if (key === 'animations') {
                continue;
            }

            const isEqual = shallowEqual(props[key], nextProps[key]);
            if (!isEqual) {
                return true;
            }
        }

        return !deepEqual(props.animations, nextProps.animations, {strict: true});
    }

    render() {
        const {animations, decorators, node, onClick, style} = this.props;
        const {active, children} = node;
        const terminal = !children;
        
        // (8/4/19) markdoub: changed to fix firefox problem:
        // TypeError: CSS2Properties doesn't have an indexed property setter for '0'
        // https://github.com/storybooks/react-treebeard/issues/148
        
        // const container = [style.link, active ? style.activeLink : null];
        // const headerStyles = Object.assign({container}, style);
        const activeLink = active ? style.activeLink : null;
        const headerStyles = Object.assign({}, style, style.link, activeLink);

        return (
            <decorators.Container
                {...{animations, decorators, node, onClick, terminal}}
                style={headerStyles}
            />
        );
    }
}

NodeHeader.propTypes = {
    style: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    node: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default NodeHeader;
