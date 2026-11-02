import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { AdminHeader } from './Header';

const meta = {
  title: 'Headers/Admin',
  component: AdminHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    user: { name: 'Alexandre' },
    onLogout: fn(),
  },
} satisfies Meta<typeof AdminHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
