import { IconButton, Slider } from '@mui/material'
import { FC, useState } from 'react'
import styled from 'styled-components'
import ExitFullScreen from '~/components/Icons/ExitFullScreen'
import FullScreenIcon from '~/components/Icons/FullScreenIcon'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import VolumeIcon from '~/components/Icons/VolumeIcon'
import MuteVolumeIcon from '~/components/Icons/MuteVolumeIcon'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils'
import { secondsToMediaTime } from '~/utils/secondsToMediaTime'

type Props = {
  isPlaying: boolean
  isFullScreen: boolean
  setIsPlaying: () => void
  handleProgressChange: (_: Event, value: number | number[]) => void
  handleVolumeChange: (_: Event, value: number | number[]) => void
  playingTime: number
  duration: number
  onFullScreenClick: () => void
  showToolbar: boolean
}

export const Toolbar: FC<Props> = ({
  isPlaying,
  isFullScreen,
  setIsPlaying,
  playingTime,
  duration,
  handleProgressChange,
  handleVolumeChange,
  onFullScreenClick,
  showToolbar,
}) => {
  const [volume, setVolume] = useState<number>(0.5)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [previousVolume, setPreviousVolume] = useState<number>(0.5)

  const volumeChangeHandler = (event: Event, value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value

    setVolume(newValue)
    handleVolumeChange(event, newValue)

    if (isMuted) {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    if (isMuted) {
      setVolume(previousVolume)
      handleVolumeChange(new Event('input'), previousVolume)
    } else {
      setPreviousVolume(volume)
      setVolume(0)
      handleVolumeChange(new Event('input'), 0)
    }

    setIsMuted(!isMuted)
  }

  return (
    <Flex>
      {(!showToolbar || isFullScreen) && (
        <ProgressSlider
          aria-label="Small"
          data-testid="progress-bar"
          isFullScreen={isFullScreen}
          max={duration}
          onChange={handleProgressChange}
          size="small"
          value={playingTime}
        />
      )}

      <Wrapper align="center" direction="row" showToolbar={showToolbar || isFullScreen}>
        <Action onClick={setIsPlaying} size="small">
          {!isPlaying ? <PlayIcon /> : <PauseIcon />}
        </Action>
        <TimeStamp direction="row">
          <span>{secondsToMediaTime(playingTime)}</span>
          <span className="separator">/</span>
          <span className="duration">{secondsToMediaTime(duration)}</span>
        </TimeStamp>
        <VolumeControl direction="row" px={9}>
          <Slider
            className="volume-slider"
            max={1}
            min={0}
            onChange={volumeChangeHandler}
            size="small"
            step={0.1}
            value={volume}
          />

          <VolumeWrapper onClick={toggleMute}>
            {isMuted ? (
              <MuteVolumeWrapper>
                <MuteVolumeIcon />
              </MuteVolumeWrapper>
            ) : (
              <VolumeIcon />
            )}
          </VolumeWrapper>
        </VolumeControl>
        <Fullscreen data-testid="fullscreen-button" onClick={onFullScreenClick}>
          {!isFullScreen ? <FullScreenIcon /> : <ExitFullScreen />}
        </Fullscreen>
      </Wrapper>
    </Flex>
  )
}

const Wrapper = styled(Flex)<{ showToolbar: boolean }>`
  height: 60px;
  padding: 12px 16px;
  ${(props) =>
    props.showToolbar &&
    `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:1;
    background-color: rgba(0, 0, 0, 0.6);
  `}

  &.error-wrapper {
    color: ${colors.primaryRed};
  }
`

const VolumeWrapper = styled.span``

const MuteVolumeWrapper = styled.span`
  color: gray;
`

const Action = styled(IconButton)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`

const VolumeControl = styled(Flex)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${colors.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${colors.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${colors.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }

  &:hover {
    background: rgba(42, 44, 55, 1);
    .volume-slider {
      width: 62px;
      margin-right: 4px;
      display: block;
    }
  }
`

const Fullscreen = styled(Flex)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`

const ProgressSlider = styled(Slider)<{ isFullScreen: boolean }>`
  && {
    z-index: 20;
    color: ${colors.white};
    height: 3px;
    width: calc(100% - 12px);
    margin: ${(props) => (props.isFullScreen ? '80px auto' : '-12px auto')};
    box-sizing: border-box;

    ${(props) =>
      props.isFullScreen &&
      `
      width: calc(100% - 80px)
    padding: 12px auto;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:1;
  `}

    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 10px;
      height: 10px;
      background-color: ${colors.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }
`

const TimeStamp = styled(Flex)`
  color: ${colors.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${colors.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${colors.GRAY6};
  }
`
