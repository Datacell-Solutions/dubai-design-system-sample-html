import { html } from "lit-html";
export default {
    title: 'Components/Alert',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
To use the \`dda-alert\` component, pass the following props:

\`\`\`html
    
<dda-alert
    type="primary"
    variation="info"
    title_text="Alert Title"
    description="This is an informational alert."
    button_text="Learn more"
    custom_class=""
    component_mode=""
    first_link=""
    second_link=""
    onclick="console.log("clicked!")">
</dda-alert>
\`\`\`
`,
            },
        },
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['primary', 'secondary'],
            description: 'Type of the alert component',
        },
        variation: {
            control: 'select',
            options: ['info', 'warning', 'error', 'success'],
            description: 'Variation of the alert component',
        },
        title_text: { control: 'text', description: 'Title text' },
        description: { control: 'text', description: 'Description' },
        button_text: { control: 'text', description: 'Button text' },
        first_link: { control: 'text', description: 'link' },
        second_link: { control: 'text', description: 'link' },
        custom_class: {
            control: { type: 'text' },
            description: 'Custom class to be applied to the accordion'
        },
        component_mode: {
            control: { type: 'check' },
            options: ['light-mode'],
            description: 'Mode of the alert component',
        },
    },
};
const Template = ({ type, variation, title_text, description, button_text, custom_class, component_mode, first_link, second_link, onclick }) => html `
  <dda-alert
    type=${type}
    variation=${variation}
    title_text=${title_text}
    description=${description}
    button_text=${button_text}
    custom_class=${custom_class}
    component_mode=${component_mode}
    first_link=${first_link}
    second_link=${second_link}
    onclick=${onclick}
  >
  </dda-alert>
`;
export const AlertInfo = Template.bind({});
AlertInfo.args = {
    type: 'primary',
    variation: 'info',
    title_text: 'Alert Title',
    description: 'This is an informational alert.',
    button_text: 'Learn more',
    custom_class: '',
    component_mode: '',
    first_link: '',
    second_link: '',
    onclick: "console.log('clicked')",
};
export const AlertWarning = Template.bind({});
AlertWarning.args = {
    type: 'primary',
    variation: 'warning',
    title_text: 'Alert Title',
    description: 'This is an informational alert.',
    button_text: 'Learn more',
    custom_class: '',
    component_mode: '',
    first_link: '',
    second_link: '',
    onclick: "console.log('clicked')",
};
export const AlertError = Template.bind({});
AlertError.args = {
    type: 'primary',
    variation: 'error',
    title_text: 'Alert Title',
    description: 'This is an informational alert.',
    button_text: 'Learn more',
    custom_class: '',
    component_mode: '',
    first_link: '',
    second_link: '',
    onclick: "console.log('clicked')",
};
export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
    type: 'primary',
    variation: 'success',
    title_text: 'Alert Title',
    description: 'This is an informational alert.',
    button_text: 'Learn more',
    custom_class: '',
    component_mode: '',
    first_link: '',
    second_link: '',
    onclick: "console.log('clicked')",
};
//# sourceMappingURL=dda-alert.stories.js.map
