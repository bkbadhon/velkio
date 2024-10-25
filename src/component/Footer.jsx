import img from '../../public/footer.jpg'
const Footer = () => {
    return (
        <div className='md:w-9/12 mx-auto'>
        <img className='w-full md:h-72 h-32' src={img} alt="" />
        </div>
    );
};

export default Footer;