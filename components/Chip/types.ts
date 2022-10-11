import { ComponentType, MouseEvent, KeyboardEvent } from 'react';
import { ThemeColor } from '@real-agent/theme';

export interface ChipProps {
  /** The text inside the chip; also used for aria-title */
  title: string;
  /** Tooltip text for the close button on editable chip */
  onDeleteTitle?: string;
  /** Sets the color family of the chip. */
  color?: ThemeColor;
  /** sets the inverse style of the component */
  inverse?: boolean;
  /** sets the disabled state of the component. Disabled components are set to 50% opacity, and display cursor: not-allowed; on hover. Used for chips with onDelete property applied, if desired. */
  disabled?: boolean;
  /** Include property and a function to be handled when a chip is removed. Adding this property adds a "remove" icon after the chip title. */
  onDelete?: (event: MouseEvent | KeyboardEvent) => void;
  /** An icon component, positioned before the title. Size and color are preset by the chip color and style. Any icon can be used, but for best results, use filled, circled icons. */
  icon?: ComponentType<any>;
  /** sets the id and data-testid of the button component */
  id?: string;
  className?: string;
}
