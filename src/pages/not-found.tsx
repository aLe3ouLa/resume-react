import { useEffect } from 'react';
import Page from '../components/fragments/page';
import Wrapper from '../components/fragments/wrapper';
import { BlogSection, NotFound, BackLink } from '../components/blocks/blog/blog.styles';

const NotFoundPage = () => {
    useEffect(() => {
        document.title = '404 - Page Not Found — Alexandra Barka';
    }, []);

    return (
        <Page>
            <BlogSection>
                <Wrapper>
                    <NotFound>
                        404
                        <br />
                        Page not found.
                        <br />
                        <BackLink to="/">← Back to home</BackLink>
                    </NotFound>
                </Wrapper>
            </BlogSection>
        </Page>
    );
};

export default NotFoundPage;
