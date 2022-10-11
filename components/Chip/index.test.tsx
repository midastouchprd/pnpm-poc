import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { KWThemeProvider } from '@real-agent/theme';

import SymbolCheckmarkCircleFilledIcon from '@real-agent/icon/icons/SymbolCheckmarkCircleFilled';
import Chip from './index';

afterEach(cleanup);

const onDeleteFunc = jest.fn();

const renderChip = (props?: any) =>
  render(
    <KWThemeProvider>
      <Chip title="Chip" {...props} />
    </KWThemeProvider>
  );

test('Chip renders with an icon', () => {
  const { getByRole } = renderChip({
    icon: SymbolCheckmarkCircleFilledIcon,
  });
  expect(getByRole('presentation')).toBeTruthy();
});

test('Editable button renders with the close icon', () => {
  const { getAllByTitle } = renderChip({ onDelete: onDeleteFunc });
  const closeIcon = getAllByTitle('remove');
  expect(closeIcon).toBeTruthy();
});

test('Editable button executes the onclick function', () => {
  const { getByRole } = renderChip({ onDelete: onDeleteFunc });
  const chipButton = getByRole('button');

  fireEvent.click(chipButton);
  expect(onDeleteFunc).toHaveBeenCalled();
});
