import ReactMarkdown from 'react-markdown';

interface AboutCardProps {
  content: {
    heading: string;
    body_text: string;
    link_text: string;
    link_url: string;
  };
}

const AboutCard: React.FC<AboutCardProps> = ({
  content: { heading, body_text, link_text: linkText, link_url: linkUrl },
}) => {
  return (
    <div className='mx-2 flex my-8 lg:my-16'>
      <div className='bg-transparent border-primary-md2 border-2 shadow-md shadow-primary-dk1 mx-auto flex max-w-6xl justify-center rounded-3xl px-6 py-8 text-center lg:px-16 lg:py-16 dark:bg-neutral-7'>
        <div className='flex max-w-5xl flex-col items-center justify-around align-baseline'>
          <h3 className='text-primary mb-4 text-lg text-neutral-9 lg:text-3xl dark:text-neutral-1'>
            {heading}
          </h3>
          <div className='h-[2px] w-full max-w-2xl mb-8 bg-primary-md1'></div>
          <div className='px-2 text-center mb-6 lg:mb-12 text-base lg:px-12 lg:text-left lg:text-lg'>
            <p>{body_text}</p>
          </div>
          {linkUrl && (
            <a
              href={linkUrl}
              className='text-tertiary hover:text-primary-md1 text-sm underline underline-offset-4 transition-all  duration-300 lg:text-2xl'
            >
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
