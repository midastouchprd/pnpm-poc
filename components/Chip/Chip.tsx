import React, {
  useEffect,
  useContext,
  FC,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import { ThemeContext } from 'styled-components';
import { THEME_PROVIDER_WARNING } from '@real-agent/theme';
import { ActionClearIcon, ActionClearFilledIcon } from '@real-agent/icon';
import { StyledChip, StyledChipButton } from './styles';
import { ChipProps } from './types';

const Chip: FC<ChipProps> = ({
  title,
  onDeleteTitle = 'remove',
  color = 'system',
  inverse = false,
  disabled = false,
  onDelete,
  icon: ChipIcon,
  id,
  className,
}) => {
  // this makes sure that your component is receiving a ThemeProvider
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    if (!themeContext) {
      console.warn(THEME_PROVIDER_WARNING);
    }
  });

  const chipProps = {
    color,
    inverse,
    id,
    hasBeforeIcon: !!ChipIcon,
  };

  const renderChipIcon = () =>
    ChipIcon && (
      <span className="chip-icon">
        <ChipIcon size="small" color={color} inverse={inverse} />
      </span>
    );

  const renderChipText = () => <span className="chip-text">{title}</span>;

  return onDelete ? (
    <StyledChipButton
      hasAfterIcon
      {...chipProps}
      type="button"
      aria-disabled={disabled}
      onClick={(event: MouseEvent | KeyboardEvent) =>
        !disabled && onDelete(event)
      }
      className={className}
    >
      {renderChipIcon()}
      {renderChipText()}
      <span className="remove-chip-icon remove-chip" title={onDeleteTitle}>
        <ActionClearIcon size="small" color={color} inverse={inverse} />
      </span>
      <span
        className="remove-chip-icon remove-chip-filled"
        title={onDeleteTitle}
      >
        <ActionClearFilledIcon size="small" color={color} inverse={inverse} />
      </span>
    </StyledChipButton>
  ) : (
    <StyledChip
      {...chipProps}
      className={className}
      data-testid={id}
      aria-disabled={disabled}
    >
      {renderChipIcon()}
      {renderChipText()}
    </StyledChip>
  );
};

export default Chip;
