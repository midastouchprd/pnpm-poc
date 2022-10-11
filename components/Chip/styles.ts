import styled, { css } from 'styled-components';
import {
  fetchThemeColor,
  typography,
  measures,
  FetchThemeColorProps,
  ThemedElementProps,
} from '@real-agent/theme';

export type BaseChipStyleProps = ThemedElementProps<HTMLElement> &
  FetchThemeColorProps & {
    hasBeforeIcon?: boolean;
    hasAfterIcon?: boolean;
    inverse?: boolean;
  };

const baseChipStyles = css<BaseChipStyleProps>`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: ${(props) => (props.hasBeforeIcon ? '4px' : '8px')};
  padding-right: ${(props) => (props.hasAfterIcon ? '4px' : '8px')};
  border-radius: 12px;
  width: auto;
  min-width: 24px;
  ${typography.text12Bold};
  background: ${(props) =>
    fetchThemeColor(
      props,
      props.inverse ? 'containerTintedInverse' : 'containerTinted'
    )};
  transition: all ${measures.transitionDuration} ${measures.transitionFunction};
  color: ${(props) =>
    fetchThemeColor(props, props.inverse ? 'labelInverse' : 'action')};

  > span.chip-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 240px;
  }

  .chip-icon {
    margin-right: 4px;
  }

  .remove-chip-icon {
    margin-left: 4px;
  }

  .remove-chip-filled {
    display: none;
  }

  &[aria-disabled='false'] {
    &:hover,
    &:focus {
      .remove-chip {
        display: none;
      }
      .remove-chip-filled {
        display: inline-block;
      }
    }
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
  }
`;

const StyledChip = styled.div`
  ${baseChipStyles};
  &:hover,
  &:focus {
    cursor: auto;
    &[aria-disabled='true'] {
      cursor: not-allowed;
    }
  }
`;

const StyledChipButton = styled.button<BaseChipStyleProps>`
  ${baseChipStyles};
  border: 0;
  &:hover,
  &:focus {
    cursor: pointer;
    &[aria-disabled='true'] {
      cursor: not-allowed;
    }
  }

  &:hover,
  &:focus {
    background: ${(props) =>
      fetchThemeColor(
        props,
        props.inverse ? 'actionHover' : 'containerTinted'
      )};
    color: ${(props) =>
      fetchThemeColor(props, props.inverse ? 'labelInverse' : 'actionHover')};
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${(props) => fetchThemeColor(props, 'actionFocusOutline')};
    outline: 0;
  }

  &:active {
    background: ${(props) =>
      fetchThemeColor(
        props,
        props.inverse ? 'actionActive' : 'containerTinted'
      )};
    color: ${(props) =>
      fetchThemeColor(props, props.inverse ? 'labelInverse' : 'actionActive')};
  }
`;

const ChipContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  > [class*='styles__StyledChip'] {
    margin: 0 4px 8px;
  }
`;

export { StyledChip, StyledChipButton, ChipContainer };
