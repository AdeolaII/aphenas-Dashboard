import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const hierarchyData = {
  id: 'npf',
  name: 'Nigeria Police Force',
  type: 'organization',
  children: [
    {
      id: 'lagos',
      name: 'Lagos State Command',
      type: 'state',
      children: [
        {
          id: 'area-a',
          name: 'Area A Command',
          type: 'area',
          children: [
            {
              id: 'alpha',
              name: 'Alpha Division',
              type: 'division',
              children: [
                {
                  id: 'traffic',
                  name: 'Traffic Unit',
                  type: 'unit',
                },
                {
                  id: 'crime',
                  name: 'Crime Unit',
                  type: 'unit',
                },
              ],
            },
            {
              id: 'beta',
              name: 'Beta Division',
              type: 'division',
              children: [
                {
                  id: 'operations',
                  name: 'Operations Unit',
                  type: 'unit',
                },
              ],
            },
          ],
        },
        {
          id: 'area-b',
          name: 'Area B Command',
          type: 'area',
          children: [
            {
              id: 'gamma',
              name: 'Gamma Division',
              type: 'division',
            },
          ],
        },
      ],
    },
    {
      id: 'fct',
      name: 'FCT Command',
      type: 'state',
    },
  ],
};

const OrganizationalHierarchy = ({ onSelect }) => {
  const [expandedNodes, setExpandedNodes] = useState({
    npf: true,
    lagos: true,
    'area-a': true,
    alpha: true,
  });

  const [selectedNode, setSelectedNode] = useState('alpha');

  const toggleNode = (nodeId) => {
    setExpandedNodes((previous) => ({
      ...previous,
      [nodeId]: !previous[nodeId],
    }));
  };

  const handleSelect = (node) => {
    setSelectedNode(node.id);

    if (onSelect) {
      onSelect(node);
    }
  };

  const getNodeSymbol = (type) => {
    switch (type) {
      case 'organization':
        return '◉';

      case 'state':
        return '▣';

      case 'area':
        return '▤';

      case 'division':
        return '□';

      case 'unit':
        return '●';

      default:
        return '○';
    }
  };

  const renderNode = (node, level = 0, isLast = false) => {
    const hasChildren =
      node.children && node.children.length > 0;

    const isExpanded = expandedNodes[node.id];
    const isSelected = selectedNode === node.id;

    return (
      <View key={node.id}>
        <View style={styles.nodeContainer}>

          {/* Tree Lines */}
          {level > 0 && (
            <View
              style={[
                styles.verticalLine,
                {
                  left: (level - 1) * 24 + 13,
                  height: isLast ? 20 : '100%',
                },
              ]}
            />
          )}

          {level > 0 && (
            <View
              style={[
                styles.horizontalLine,
                {
                  left: (level - 1) * 24 + 13,
                },
              ]}
            />
          )}

          {/* Indentation */}
          <View
            style={{
              width: level * 24,
            }}
          />

          {/* Expand / Collapse */}
          {hasChildren ? (
            <TouchableOpacity
              style={styles.expandButton}
              onPress={() => toggleNode(node.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.expandText}>
                {isExpanded ? '−' : '+'}
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.expandPlaceholder} />
          )}

          {/* Node */}
          <TouchableOpacity
            style={[
              styles.node,
              isSelected && styles.selectedNode,
            ]}
            onPress={() => handleSelect(node)}
            activeOpacity={0.75}
          >
            <View
              style={[
                styles.iconContainer,
                isSelected && styles.selectedIconContainer,
              ]}
            >
              <Text
                style={[
                  styles.nodeIcon,
                  isSelected && styles.selectedNodeIcon,
                ]}
              >
                {getNodeSymbol(node.type)}
              </Text>
            </View>

            <View style={styles.nodeTextContainer}>
              <Text
                style={[
                  styles.nodeName,
                  isSelected && styles.selectedNodeName,
                ]}
              >
                {node.name}
              </Text>

              <Text style={styles.nodeType}>
                {node.type}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Children */}
        {hasChildren && isExpanded && (
          <View>
            {node.children.map((child, index) =>
              renderNode(
                child,
                level + 1,
                index === node.children.length - 1
              )
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderNode(hierarchyData)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  nodeContainer: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  verticalLine: {
    position: 'absolute',
    width: 1,
    backgroundColor: '#D9D9D9',
    top: 0,
  },

  horizontalLine: {
    position: 'absolute',
    width: 12,
    height: 1,
    backgroundColor: '#D9D9D9',
    top: '50%',
  },

  expandButton: {
    width: 26,
    height: 26,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
    zIndex: 2,
  },

  expandText: {
    fontSize: 17,
    lineHeight: 19,
    color: '#444444',
    fontWeight: '500',
  },

  expandPlaceholder: {
    width: 32,
  },

  node: {
    flex: 1,
    minHeight: 46,
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectedNode: {
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#D8D8D8',
  },

  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 7,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  selectedIconContainer: {
    backgroundColor: '#E7E7E7',
  },

  nodeIcon: {
    fontSize: 15,
    color: '#555555',
  },

  selectedNodeIcon: {
    color: '#111111',
  },

  nodeTextContainer: {
    flex: 1,
  },

  nodeName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#252525',
  },

  selectedNodeName: {
    fontWeight: '700',
    color: '#111111',
  },

  nodeType: {
    marginTop: 3,
    fontSize: 11,
    color: '#8A8A8A',
    textTransform: 'capitalize',
  },
});

export default OrganizationalHierarchy;