import Content from "@/components/Content";
import PageHead from "@/components/PageHead";
import { promises as fs } from "fs";
import { GetStaticProps } from "next";
import path from "path";
import ReactMarkdown from "react-markdown";

const PrivacyPolicy = ({ text }) => {
    return (
        <>
            <PageHead title="Privacy Policy" />
            <Content justifyText>
                <div className="my-8 bg-white dark:bg-gray-300 p-8 rounded-md">
                    <article className="prose max-w-none">
                        <ReactMarkdown>{text}</ReactMarkdown>
                    </article>
                </div>
            </Content>
        </>
    );
};

const getStaticProps: GetStaticProps = async () => {
    const data = await fs.readFile(
        path.join(process.cwd(), "markdown/privacy-policy.md")
    );
    const text = data.toString();
    return {
        props: {
            text,
        },
    };
};

export { getStaticProps };
export default PrivacyPolicy;
