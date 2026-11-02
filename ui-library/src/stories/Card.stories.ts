import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';
import { Card, CardGallery } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    author: 'Author',
    description: 'This is a description for the card.',
    imageUrl: 'https://via.placeholder.com/150',
    linkUrl: '/card',
  },
};

export const AllCards: Story = {
  args: {
    title: 'Card Title',
    author: 'Author',
    description: 'This is a description for the card.',
    imageUrl: 'https://placehold.co/600x360/e2e8f0/334155?text=Card',
    linkUrl: '/card',
  },
  render: () => createElement(CardGallery),
};