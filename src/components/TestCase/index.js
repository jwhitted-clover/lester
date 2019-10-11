import decorator from './decorator';
import Component from './TestCase';

export const TestCase = Component;
export const SelectedTestCase = decorator(Component);
