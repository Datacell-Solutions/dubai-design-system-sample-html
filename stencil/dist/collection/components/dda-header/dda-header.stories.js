export default {
    title: 'Components/Header',
    tags: ['autodocs'],
    component: 'dda-header',
    parameters: {
        docs: {
            description: {
                component: `
To use the \`dda-header\` component, pass the following props:

\`\`\`html
<dda-header
    first-logo-src="assets/img/government-of-dubai.svg"
    first-logo-white-src="assets/img/government-of-dubai-white.svg"
    first-logo-alt="undefined"
    second-logo-src="digital-logo.svg"
    second-logo-white-src="digital-logo-white.svg"
    second-logo-alt="Dubai-Digital-Authority"
    login-link="/login"
    readSpeakerLink=""
    languageswitch="() => console.log('Language Switcher')"
    smtextsize="() => console.log('Small Text')"
    basetextsize="() => console.log('Base Text')"
    lgtextsize="() => console.log('Large Text')"
    normalcontrast="() => console.log('Normal Text')"
    blindcontrast="() => console.log('Blind Text')"
    redcontrast="() => console.log('Red Text')"
    greencontrast="() => console.log('Green Text')">
</dda-header>
  \`\`\`
`,
            },
        },
    },
};
const Template = args => `
    <dda-header 
      first-logo-src="${args.firstlogoUrl}"
      first-logo-white-src="${args.firstLogoWhiteUrl}"
      first-logo-alt="${args.firstLogoAlt}"
      second-logo-src="${args.secondLogoUrl}"
      second-logo-white-src="${args.secondLogoWhiteUrl}"
      second-logo-alt="${args.secondLogoAlt}"
      login-link="${args.loginLink}"
      readSpeakerLink="app-eu.readspeaker.com"
      languageSwitch="() => console.log('Language Switcher')"
      smTextSize="() => console.log('Small Text')"
      baseTextSize="() => console.log('Base Text')"
      lgTextSize="() => console.log('Large Text')"
       normalContrast="() => console.log('Normal Text')"
        blindContrast="() => console.log('Blind Text')"
         redContrast="() => console.log('Red Text')"
          greenContrast="() => console.log('Green Text')"
      quick-links='${JSON.stringify(args.quickLinks)}'
      side-menu-items='${JSON.stringify(args.sideMenuItems)}'
    ></dda-header>
        <script>
      const header = document.querySelector('dda-header');
      header.addEventListener('languageSwitch', ${args.languageSwitch});
       header.addEventListener('smTextSize', ${args.smTextSize});
              header.addEventListener('baseTextSize', ${args.baseTextSize});
                     header.addEventListener('lgTextSize', ${args.lgTextSize});
                      header.addEventListener('normalContrast', ${args.normalContrast});
                       header.addEventListener('blindContrast', ${args.blindContrast});
                        header.addEventListener('redContrast', ${args.redContrast});
                         header.addEventListener('greenContrast', ${args.greenContrast});
    </script>
  `;
export const Default = Template.bind({});
Default.args = {
    firstlogoUrl: 'https://www.dof.gov.ae/Style Library/img/gov-logo.svg',
    firstLogoWhiteUrl: 'https://www.dof.gov.ae/Style Library/img/gov-logo-white.svg',
    firstlogoAlt: 'Dubai-Digital-Authority',
    secondLogoUrl: 'https://www.digitaldubai.ae/ResourcePackages/Theme/assets/dist/images/logo.svg',
    secondLogoWhiteUrl: 'https://www.digitaldubai.ae/ResourcePackages/Theme/assets/dist/images/logo.svg',
    secondLogoAlt: 'Dubai-Digital-Authority',
    loginLink: '/login',
    languageSwitch: "() => console.log('Language Switcher')",
    smTextSize: "() => console.log('Small Text')",
    baseTextSize: "() => console.log('Base Text')",
    lgTextSize: "() => console.log('Large Text')",
    normalContrast: "() => console.log('Normal Contrast')",
    blindContrast: "() => console.log('Blind Contrast')",
    redContrast: "() => console.log('Red Contrast')",
    greenContrast: "() => console.log('Green Contrast')",
    readSpeakerLink: "app-eu.readspeaker.com",
    quickLinks: [
        { label: 'Home', href: '#', subMenu: [] },
        {
            label: 'Services',
            href: '#',
            subMenu: [
                { title: 'Web Development', description: 'Build and maintain websites', icon: 'sentiment_satisfied', href: '#' },
                { title: 'SEO Services', description: 'Improve your site ranking', icon: 'sentiment_satisfied', href: '#' },
            ],
        },
        { label: 'About', href: '#', subMenu: [] },
        { label: 'Contact', href: '#', subMenu: [] },
    ],
    sideMenuItems: [
        { label: 'Home', href: '#', subMenu: [] },
        {
            label: 'Initiatives',
            href: '#',
            subMenu: [
                { label: 'Submenu-1', href: '#' },
                { label: 'Submenu-2', href: '#' },
            ],
        },
        { label: 'Services', href: '#', subMenu: [] },
        { label: 'Data', href: '#', subMenu: [] },
        { label: 'Government Services', href: '#', subMenu: [] },
        { label: 'Investor Relations', href: '#', subMenu: [] },
        { label: 'Locations', href: '#', subMenu: [] },
        { label: 'Newsroom', href: '#', subMenu: [] },
        { label: 'Contact Us', href: '#', subMenu: [] },
    ],
};
//# sourceMappingURL=dda-header.stories.js.map
