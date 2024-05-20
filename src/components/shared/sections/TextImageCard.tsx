interface Props {
  content: {
    heading: string;
    image: string;
    image_alt_text: string;
    body_text: string;
    link_url?: string;
    link_text?: string;
    reversed?: boolean;
  };
}

const TextImagecard: React.FC<Props> = ({
  content: {
    heading,
    image,
    image_alt_text,
    body_text,
    link_url,
    link_text,
    reversed = false,
  },
}) => {
  return (
    <section className='my-16 flex justify-center'>
      <div className='flex max-w-[1200px] flex-col transition-all lg:grid lg:grid-cols-12 lg:gap-8'>
        <img
          src={image}
          alt={image_alt_text}
          className={`${reversed && 'lg:order-1'}  shadow-md box-border rounded-t-3xl lg:rounded-3xl w-screen lg:w-full object-cover lg:col-span-5 lg:row-span-1`}
        />
        <div className='mx-auto shadow-md rounded-b-3xl lg:rounded-3xl bg-secondary flex flex-col items- justify-between py-8 lg:py-16 text-center text-neutral-8 transition-all lg:col-span-7 lg:px-6 dark:bg-neutral-7 dark:text-neutral-2'>
          <div className="flex flex-col items-center">
            <h3 className='text-primary mb-4 text-lg text-neutral-9 lg:text-3xl dark:text-neutral-1'>
              {heading}
            </h3>
            <div className='h-[2px] w-3/4 mb-8 max-w-2xl bg-primary-md1'></div>
            <div className='px-6 text-center mb-6 lg:mb-12 text-base lg:px-12 lg:text-left lg:text-lg'>
              <p>{body_text}</p>
            </div>
          </div>
          {link_url && (
            <a
              href={link_url}
              className='text-tertiary hover:text-primary-md1 hover:text-accent text-sm underline underline-offset-4 transition-all  duration-300 lg:text-2xl'
            >
              {link_text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextImagecard;
