import decorator from './decorator';
import Component from './Suite';

export const Suite = Component;
export const SelectedSuite = decorator(Component);
