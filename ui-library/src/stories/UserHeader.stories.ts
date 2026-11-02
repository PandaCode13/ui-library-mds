import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { UserHeader } from './Header';

const meta = {
  title: 'Headers/User',
  component: UserHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    user: { name: 'Camille' },
    onLogout: fn(),
  },
} satisfies Meta<typeof UserHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
