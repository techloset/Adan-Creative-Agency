interface HeaderProps{
    Heading:String
    Text:String
}
const Header:React.FC<HeaderProps> = ({Heading,Text}) => {
    return (
        <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px]">
            <h6 className="text-exact-red dark:text-exact-light-orange text-center text-xl font-semibold">
                {Heading}
            </h6>
            <h3 className="text-center text-[#111029] dark:text-white text-xl md:text-2xl lg:text-4xl xl:text-[42px] px-1 tracking-[-0.1px]  font-semibold lg:leading-[56px]">
                {Text}
            </h3>
        </div>
    );
};
export default Header;
