import React from 'react';
import InlineList from '@real-agent/inlinelist';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SymbolCheckmarkCircleFilledIcon from '../Icon/icons/SymbolCheckmarkCircleFilled';
import {
  commonArgTypes,
  iconArgType,
  idArgType,
  titleArgType,
  classNameArgType,
} from '../utils/storybook/argTypes';
import { ALIGN_X } from '../utils';
import { name, version } from './package.json';
import Chip from './index';
import { ChipProps } from './types';

export default {
  title: 'Components/Chips/Chip',
  component: Chip,
  argTypes: {
    ...commonArgTypes,
    ...titleArgType,
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    inverse: {
      control: {
        type: 'boolean',
      },
    },

    onDelete: {
      control: { type: null },
    },
    ...iconArgType,
    ...idArgType,
    ...classNameArgType,
  },
  parameters: {
    componentSubtitle: `Chips are small pill-shaped tags used to provide additional information or a small control as part of a larger interface element. Chips come in two styles (low-contrast default chips, and high-contrast inverse chips), eight colors, and three feature variants: a normal chip, a chip with an icon, and an editable chip with a "remove" button. Chip width is determined by the length of the label, up to a max. width of 240px; at max. width, labels will truncate with ellipsis. Chips can be arranged in an inline list that can wrap to multiple lines, with 8px margins between chips and rows of chips.`,
    docs: {
      description: {
        component: `
    yarn add ${name}
    version: ${version}
        `,
      },
    },
  },
};

const defaultArgs: ChipProps = {
  disabled: false,
  inverse: false,
  color: 'system',
  title: 'Chip',
};

export const BasicChip: Story<ChipProps> = (args) => <Chip {...args} />;
BasicChip.args = {
  ...defaultArgs,
  id: 'chip',
};
BasicChip.parameters = {
  docs: {
    source: {
      code: `
import Chip from '@real-agent/chip';

<Chip title="Chip" />
// Everything other than "title" is an optional prop and will assume their default values unless otherwise specified.
      `,
    },
  },
};

export const ChipWithIcon: Story<ChipProps> = (args) => <Chip {...args} />;
ChipWithIcon.args = {
  ...defaultArgs,
  id: 'chip-with-icon',
  icon: SymbolCheckmarkCircleFilledIcon,
};
ChipWithIcon.parameters = {
  docs: {
    source: {
      code: `
import Chip from '@real-agent/chip';
import { SymbolCheckmarkCircleFilledIcon } from '@real-agent/icon';

<Chip title="Chip" icon={SymbolCheckmarkCircleFilledIcon} />
      `,
    },
  },
};

export const EditableChip: Story<ChipProps> = (args) => <Chip {...args} />;
EditableChip.args = {
  ...defaultArgs,
  id: 'editable-chip',
  onDelete: action('button clicked'),
};

EditableChip.parameters = {
  docs: {
    source: {
      code: `
import Chip from '@real-agent/chip';

<Chip title="Chip" onDelete={someCallbackFunc} />
// passing a callback function to the "onDelete" prop, makes the chip interactive
// and adds a "x" icon to the right of the chip text
      `,
    },
  },
};

const defaultChipWithIconArgs = {
  disabled: false,
  inverse: false,
  icon: SymbolCheckmarkCircleFilledIcon,
};

const defaultEditableChipArgs = {
  disabled: false,
  inverse: false,
  onDelete: action('button clicked'),
};

export const ChipList: Story<ChipProps> = () => (
  <div style={{ margin: '0 auto' }}>
    <InlineList alignX={ALIGN_X.CENTER}>
      <Chip {...defaultArgs} title="Corpus Christi" />
      <Chip {...defaultArgs} inverse={true} title="Nampa" />
      <Chip {...defaultArgs} color="red" title="West Jordan" />
      <Chip {...defaultArgs} inverse={true} color="red" title="Shreveport" />
      <Chip color="orange" title="Albany" />
      <Chip
        {...defaultChipWithIconArgs}
        inverse={true}
        color="orange"
        title="Great Falls"
      />
      <Chip {...defaultChipWithIconArgs} color="yellow" title="Austin" />
      <Chip
        {...defaultChipWithIconArgs}
        inverse={true}
        color="yellow"
        title="Chigaco"
      />
      <Chip {...defaultChipWithIconArgs} color="green" title="New York" />
      <Chip
        {...defaultChipWithIconArgs}
        inverse={true}
        color="green"
        title="San Fransisco"
      />

      <Chip {...defaultEditableChipArgs} color="blue" title="Boston" />
      <Chip
        {...defaultEditableChipArgs}
        inverse={true}
        color="blue"
        title="Lake Tahoe"
      />
      <Chip {...defaultEditableChipArgs} color="purple" title="Florida" />
      <Chip
        {...defaultEditableChipArgs}
        inverse={true}
        color="purple"
        title="Key West"
      />
      <Chip {...defaultEditableChipArgs} color="neutral" title="Cape Cod" />
      <Chip
        {...defaultEditableChipArgs}
        inverse={true}
        color="neutral"
        title="Outer Banks"
      />
    </InlineList>
  </div>
);
ChipList.parameters = {
  docs: {
    source: {
      code: `
import Chip from '@real-agent/chip';

// Wrap the chip list in the InlineList component as shown below:
// This will render the chips in a container with 8px gutters, center aligned, and auto-wrap turned on.
// InlineList settings can be configured. Refer InlineList component for details.

<InlineList alignX="center">
  <Chip />
  <Chip />
  <Chip />
  ....
</InlineList>
      `,
    },
  },
};
