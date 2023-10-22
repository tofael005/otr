import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
    return (
        <div className="flex justify-between items-center bg-sky-400 px-3">
            <div>
                <img className="w-[75px] cursor-pointer" src="/src/assets/png.png" alt="" />
            </div>
            <div className="flex justify-between items-center gap-7">
                <AiOutlineShoppingCart className='text-3xl cursor-pointer' />
                <CgProfile className='text-3xl cursor-pointer' />
            </div>
        </div>
    );
};

export default NavBar;