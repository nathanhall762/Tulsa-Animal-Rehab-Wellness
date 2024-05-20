interface Props {
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
}

const ContactSection: React.FC<Props> = ({
  businessName,
  businessAddress,
  businessPhone,
  businessEmail,
}) => {
  const formatPhoneNumber = (phone: string) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  return (
    <div className='relative flex h-fit flex-col-reverse justify-around lg:flex-row lg:p-10'>
      <div className='flex flex-col items-center py-10 lg:w-[40vw]'>
        <div
          className='mb-4 h-[50vh] w-[90%] rounded-3xl bg-neutral-5 bg-cover'
          style={{ border: '0' }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d206181.47982743484!2d-95.8780104!3d36.1523015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xadd67515501f50ad%3A0xe77378f24311d60a!2sTulsa%20Animal%20Rehab%20%26%20Wellness!5e0!3m2!1sen!2sus!4v1716221952283!5m2!1sen!2sus'
            className='h-full w-full rounded-3xl'
            loading='lazy'
            title={`Map of ${businessName}`}
          ></iframe>
        </div>
        <address className='mb-8 text-neutral-9 dark:text-neutral-1'>
          {businessAddress}
        </address>
        <p className='mb-4'>
          <a href={`tel:${businessPhone}`}>
            {formatPhoneNumber(businessPhone)}
          </a>
        </p>
        <p className='mb-8'>
          <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
        </p>
        <table className='text-neutral-9 dark:text-neutral-1'>
          <tbody>
            <tr>
              <td>MONDAY</td>
              <td>9AM - 5PM</td>
            </tr>
            <tr>
              <td>TUESDAY</td>
              <td>9AM - 5PM</td>
            </tr>
            <tr>
              <td>WEDNESDAY</td>
              <td>9AM - 5PM</td>
            </tr>
            <tr>
              <td>THURSDAY</td>
              <td>9AM - 5PM</td>
            </tr>
            <tr>
              <td>FRIDAY</td>
              <td>9AM - 5PM</td>
            </tr>
            <tr>
              <td>SATURDAY</td>
              <td>9AM - 5PM</td>
            </tr>
            <tr>
              <td>SUNDAY</td>
              <td>CLOSED</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='h-auto lg:w-[700px] rounded-3xl bg-primary-md1 dark:bg-neutral-7'>
        <iframe
          src='https://link.k9rehab.marketing/widget/form/EpYzueMnW7JQf73e9MIZ'
          id='inline-EpYzueMnW7JQf73e9MIZ'
          data-layout="{'id':'INLINE'}"
          data-trigger-type='alwaysShow'
          data-trigger-value=''
          data-activation-type='alwaysActivated'
          data-activation-value=''
          data-deactivation-type='neverDeactivate'
          data-deactivation-value=''
          data-form-name='Inquire about cost & availability- 1'
          data-height='1149'
          data-layout-iframe-id='inline-EpYzueMnW7JQf73e9MIZ'
          data-form-id='EpYzueMnW7JQf73e9MIZ'
          title='Inquire about cost & availability- 1'
          className="h-full w-full"
        ></iframe>
        <script src='https://link.k9rehab.marketing/js/form_embed.js'></script>
      </div>
    </div>
  );
};

export default ContactSection;
