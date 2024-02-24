import Link from 'next/link';

const links = [
{url: '/', title: 'Home'},
{url: '/about', title: 'About'},
{url: '/portfolio', title: 'Portfolio'},
{url: '/contact', title: 'Contact'},
];

const Navbar = () => {
return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Logo */}
    <div className= ''>
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
            <span className='text-white mr-1'>Molham</span>
            <span className='w-20 h-8 rounded bg-white text-black flex items-center justify-center'>Alrashed</span>
        </Link>
    </div>

    {/* Responsive menu */}
    <div>
        <button className = 'w-10 h-8 flex flex-col justify-between'>
            <span className='w-10 h-1 bg-black rounded'></span>
            <span className='w-10 h-1 bg-black rounded'></span>
            <span className='w-10 h-1 bg-black rounded'></span>
        </button>
        {/* Menu list */}
        <div>
            {links.map((link)=>(
                <Link href={link.url} key={link.url}>{link.title}</Link>
            ))}
        </div>
    </div>
    </div>
)
}
export default Navbar;