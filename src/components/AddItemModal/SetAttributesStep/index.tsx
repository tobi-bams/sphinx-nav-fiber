import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { noSpacePattern } from '~/components/AddItemModal/SourceTypeStep/constants'
import { parseJson, parsedObjProps } from '~/components/ModalsContainer/BlueprintModal/Body/Editor/utils'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { getNodeType } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { AddItemModalStepID } from '..'

type Props = {
  skipToStep: (step: AddItemModalStepID) => void
  nodeType: string
  handleSelectType: (val: string) => void
}

export const SetAttributesStep: FC<Props> = ({ handleSelectType, skipToStep, nodeType }) => {
  const [loading, setLoading] = useState(false)
  const [attributes, setAttributes] = useState<parsedObjProps[]>()

  const {
    watch,
    setValue,
    formState: { isValid },
  } = useFormContext()

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      const data = await getNodeType(nodeType)

      const parsedData =
        data.attributes && typeof data.attributes === 'object' ? parseJson(data.attributes) : parseJson(data)

      const filteredAttributes = parsedData.filter((attr) => attr.key !== 'node_key')

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

  const handlePrevButton = () => {
    handleSelectType('')
    skipToStep('sourceType')
  }

  const handleNextButton = () => {
    attributes?.forEach(({ key, required }) => {
      if (required) {
        const value = watch(key)

        if (typeof value === 'string') {
          setValue(key, value.trim(), { shouldValidate: true })
        }
      }
    })

    if (isValid && !loading && attributes?.every((attr) => !attr.required || watch(attr.key))) {
      skipToStep('setBudget')
    }
  }

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <Flex align="center" direction="row">
          <StyledText>Set Attributes</StyledText>
        </Flex>
      </Flex>

      <StyledWrapper>
        {loading ? (
          <Flex style={{ margin: 'auto' }}>
            <ClipLoader color={colors.lightGray} />
          </Flex>
        ) : (
          <Flex className="input__wrapper">
            {sortedAttributes?.map(({ key, required }: parsedObjProps) => (
              <TextFieldWrapper key={key}>
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
            disabled={!isValid || loading || attributes?.some((attr) => attr.required && !watch(attr.key))}
            onClick={handleNextButton}
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
