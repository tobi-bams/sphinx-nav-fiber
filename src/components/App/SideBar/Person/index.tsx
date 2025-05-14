import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useNormalizedNode } from '~/stores/useDataStore'
import { useSelectedNode } from '~/stores/useGraphStore'

export const Person = () => {
  const selectedNode = useSelectedNode()
  const normalizedNode = useNormalizedNode(selectedNode?.ref_id || '')

  const personName = normalizedNode?.name || normalizedNode?.label

  return (
    <Flex direction="row" px={24} py={16}>
      <Avatar
        data-testid="person-image"
        size={80}
        src={normalizedNode?.image_url || 'person_placeholder_img.png'}
        type="person"
      />
      <Flex p={20}>
        <Text color="primaryText1" kind="bigHeading">
          {personName}
        </Text>
      </Flex>
    </Flex>
  )
}
