
import React from 'react';
import { shirts } from '../constants';
import ShirtCard from './ShirtCard';

const Shop: React.FC = () => {
  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase">Our Designs</h2>
          <p className="text-gray-600 mt-2">Guaranteed to make your opponents smile (before you smash it).</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {shirts.map(shirt => (
            <ShirtCard key={shirt.id} shirt={shirt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;