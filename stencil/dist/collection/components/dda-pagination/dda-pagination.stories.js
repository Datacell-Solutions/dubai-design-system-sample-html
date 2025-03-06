export default {
    title: 'Components/Pagination',
    tags: ['autodocs'],
    argTypes: {
        total_pages: {
            control: 'number',
            description: 'Total number of pages',
        },
        current_page: {
            control: 'number',
            description: 'Current page number',
        },
        type: {
            control: { type: 'select' },
            options: ['simple-slider', 'buttons', 'text', 'text-pages', 'button-text', 'buttons-pages', 'full'],
            description: 'Type of pagination design',
        },
        custom_class: {
            control: { type: 'text' }, // Add control for custom class
            description: 'Custom class for the pagination component',
        },
        component_mode: {
            control: { type: 'check' },
            options: ['light-mode'],
            description: 'Mode of the pagination component',
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
To use the \`dda-pagination\` component, pass the following props:

\`\`\`html
<dda-pagination
    total_pages="8"
    current_page="1"
    type="simple-slider"
    custom_class=""
    component_mode=""
></dda-pagination>
  \`\`\`
`,
            },
        },
    },
};
const Template = (args) => {
    const attributes = Object.entries(args)
        .filter(([key, value]) => value !== undefined && key !== 'text')
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');
    return `<dda-pagination ${attributes}></dda-pagination>`;
};
export const SimpleSlider = Template.bind({});
SimpleSlider.args = {
    total_pages: 8,
    current_page: 1,
    type: 'simple-slider',
    custom_class: '',
    component_mode: '',
};
export const Buttons = Template.bind({});
Buttons.args = {
    total_pages: 8,
    current_page: 1,
    type: 'buttons',
    custom_class: '',
    component_mode: '',
};
export const Text = Template.bind({});
Text.args = {
    total_pages: 8,
    current_page: 1,
    type: 'text',
    custom_class: '',
    component_mode: '',
};
export const TextPages = Template.bind({});
TextPages.args = {
    total_pages: 8,
    current_page: 1,
    type: 'text-pages',
    custom_class: '',
    component_mode: '',
};
export const ButtonText = Template.bind({});
ButtonText.args = {
    total_pages: 8,
    current_page: 1,
    type: 'button-text',
    custom_class: '',
    component_mode: '',
};
export const ButtonsPages = Template.bind({});
ButtonsPages.args = {
    total_pages: 8,
    current_page: 1,
    type: 'buttons-pages',
    custom_class: '',
    component_mode: '',
};
export const Full = Template.bind({});
Full.args = {
    total_pages: 8,
    current_page: 1,
    type: 'full',
    custom_class: '',
    component_mode: '',
};
//# sourceMappingURL=dda-pagination.stories.js.map
