import { ComponentStory, ComponentMeta } from '@storybook/react';

import { JobCard } from './JobCard';

export default {
  title: 'Molecules/JobCard',
  component: JobCard,
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => <JobCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGx5RV9AvJFYg/company-logo_100_100/0/1649455844061?e=1661385600&v=beta&t=MpVDvvN9hBaovy5Parv1_-fP_OhpGHj8gxmSL_o30FQ',
        a11y_img: 'Warner Bros Discovery logo',
        company: 'Warner Bros. Discovery',
        jobFunction: 'Frontend Engineer',
        duration: 'Jul 2021 - Present · 1 yr',
        responsibilities:
            (<>As a front-end engineer in HBO max TV platform, my work revolves\naround helping users to enjoy the next generation of streaming\napps and having a direct impact on the consumer experience of\nmillions of users worldwide.\n\n- Migrate the Design system in the new version\n- Closely work with designers and developers to have web accessible and pixel perfect application</>),
        technologies: 'JSX ・ Typescript ・ Lightning TV framework・ Javascript ・ Accessibility ・ Design Systems ・ Web accessibility',
        link: 'https://www.warnermedia.com'
}
