import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { getNodeType } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { MapNodeTypeModalStepID, SelectedValues } from '..'
import { parseJson, parsedObjProps } from '../../BlueprintModal/Body/Editor/utils'
import { filterNodeKey } from '~/components/ModalsContainer/ChangeNodeTypeModal/utils'
import { noSpacePattern } from '~/components/AddItemModal/SourceTypeStep/constants'

type Props = {
  skipToStep: (step: MapNodeTypeModalStepID) => void
  nodeType: string
  handleSelectType: (val: string) => void
  selectedValues: SelectedValues
}

export const RequiredPropertiesStep: FC<Props> = ({ handleSelectType, skipToStep, nodeType, selectedValues }) => {
  const [loading, setLoading] = useState(false)
  const [attributes, setAttributes] = useState<parsedObjProps[]>()

  const {
    watch,
    formState: { isValid },
  } = useFormContext()

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      const data = await getNodeType(nodeType)

      const parsedData = parseJson(data)

      const filteredAttributes = filterNodeKey(parsedData)

      setAttributes(filteredAttributes)

      setLoading(false)
    }

    init()
  }, [nodeType, watch])

  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, ' ')

  const sortedAttributes = attributes
    ? [...attributes].sort((a, b) => {
        if (a.required && !b.required) {
          return -1
        }

        if (!a.required && b.required) {
          return 1
        }

        return 0
      })
    : []

  const filteredAttributes = sortedAttributes.filter((attr) => {
    if (attr.required) {
      if (!Object.values(selectedValues).includes(attr.key)) {
        return true
      }
    }

    return false
  })

  const handlePrevButton = () => {
    handleSelectType('')
    skipToStep('sourceType')
  }

  const isNextDisabled =
    !isValid || loading || filteredAttributes.some((attr) => attr.required && !watch(attr.key)?.trim())

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <Flex align="center" direction="row">
          <StyledText>Required Properties</StyledText>
        </Flex>
      </Flex>

      <StyledWrapper>
        {loading ? (
          <Flex style={{ margin: 'auto' }}>
            <ClipLoader color={colors.SECONDARY_BLUE} />
          </Flex>
        ) : (
          <Flex className="input__wrapper">
            {filteredAttributes?.map(({ key, required }: parsedObjProps) => (
              <>
                <TextFieldWrapper>
                  <Text>{capitalizeFirstLetter(key)}</Text>
                  <TextInput
                    id="item-name"
                    maxLength={50}
                    name={key}
                    placeholder={required ? 'Required' : 'Optional'}
                    rules={{
                      ...(required
                        ? {
                            ...requiredRule,
                            pattern: {
                              message: 'No leading whitespace allowed',
                              value: noSpacePattern,
                            },
                          }
                        : {}),
                    }}
                  />
                </TextFieldWrapper>
              </>
            ))}
          </Flex>
        )}
      </StyledWrapper>

      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={handlePrevButton} size="large" variant="contained">
            Prev
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button
            color="secondary"
            disabled={isNextDisabled}
            onClick={() => skipToStep('createConfirmation')}
            size="large"
            variant="contained"
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`

const StyledWrapper = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`

const TextFieldWrapper = styled(Flex)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${colors.GRAY7};
    -webkit-text-fill-color: ${colors.GRAY7};
  }
`
