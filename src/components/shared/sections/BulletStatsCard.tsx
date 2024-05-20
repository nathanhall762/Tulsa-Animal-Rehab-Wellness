interface Props {
  content: {
    heading: string;
    body_text: string[];
    image: string;
    image_alt_text: string;
  };
}

const BulletStatsCard: React.FC<Props> = ({
  content: { heading: title, body_text: body, image: bg_image, image_alt_text },
}) => {
  return (
    <div
      className={`flex justify-center my-36 bg-cover bg-center text-neutral-9 shadow-inner lg:h-[50vh] lg:px-32 dark:text-white`}
      style={{ backgroundImage: `url('${bg_image}')` }}
      title={image_alt_text}
    >
      <div
        className={`flex h-full max-w-[800px] flex-col items-center justify-center dark:bg-primary-dk1 dark:bg-opacity-50 bg-primary-md1 px-8 py-8 shadow-xl backdrop-blur-sm bg-opacity-70 lg:px-16 backdrop-brightness-100`}
      >
        <h3 className='pb-4 text-2xl text-center text-shadow-xl text-neutral-1 lg:text-3xl'>{title}</h3>
        <div className='w-full'>
          <p className='py-2 text-neutral-1 text-shadow-xl text-2xl lg:text-3xl'>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default BulletStatsCard;
