import Navbar from '../components/Navbar';
import Hero from '../components/(product)/Hero';
import Images from '../components/(product)/Images';
import Assets from '../components/(product)/Assets';
import Specs from '../components/(product)/Specs';
import { products } from '@/data/productInfo';

export default function Product() {
    console.log(products);
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar page="tools" />
            <Hero />
            <Images />
            <Specs />
            <Assets />
        </div>
    );
}
